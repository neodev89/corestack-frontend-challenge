'use client'

import styles from "./page.module.css";
import CustomCards from "@/ui/components-custom/CustomCards";
import { useGet } from "@/tanstack/mutations/get/getMutation";
import { Box, Button, CircularProgress } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import CustomModal from "@/ui/components-custom/CustomModal";
import { useCustomMutation } from "@/tanstack/mutations/post/postMutation";


export interface typicodeApiProps {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface APiResponse<T> {
    success: boolean;
    message: string;
    data: T;
    status: number;
}

export default function HomeComponent() {
    const [open, setOpen] = useState<boolean>(false);

    const handleClose = () => {
        setOpen(false);
    };

    const dataChallenge = useGet<APiResponse<typicodeApiProps[]>>({
        url: "/api/challenge-data",
        key: ["call-data-typicode"],
        enabled: true,
    });

    console.log(dataChallenge.data);

    const addDataAPI = useCustomMutation<APiResponse<typicodeApiProps[]>>(['added-only-origin-data']);

    const hasPosted = useRef(false);

    useEffect(() => {
        if (!dataChallenge.data) return;
        if (hasPosted.current) return;

        hasPosted.current = true;

        addDataAPI.mutateAsync({
            url: "/api/add-only-origin-data",
            body: dataChallenge.data,
        });
    }, [dataChallenge.data]);


    return (
        <div className={styles.page}>
            <div className={styles.form}>
                <Button
                    className={styles.link}
                    onClick={() => setOpen(true)}
                >
                    Add +
                </Button>
            </div>
            {
                (dataChallenge.data && dataChallenge.data?.data.length == 0) ? (
                    <Box>I dati non sono stati recuperati: {dataChallenge.error?.message}</Box>
                ) : (
                    <>
                        {
                            dataChallenge.isLoading ? (
                                <CircularProgress />
                            ) : (
                                <>
                                    {
                                        dataChallenge.data?.data.map((item) => (
                                            <CustomCards
                                                key={item.id}
                                                title={item.title}
                                                bodyCard={item.body}
                                                footerCard={item.userId}
                                            />
                                        ))
                                    }
                                </>
                            )
                        }
                    </>
                )
            }
            <CustomModal open={open} onClose={handleClose} />
        </div >
    )
}