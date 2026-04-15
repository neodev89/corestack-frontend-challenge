'use client'

import { typicodeApiProps } from '@/app/homeComponent';
import { useCustomMutation } from '@/tanstack/mutations/post/postMutation';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Dialog, DialogActions, DialogContent, IconButton, Slide, TextField } from "@mui/material";
import { TransitionProps } from '@mui/material/transitions';
import React, { useState } from 'react';

interface modalProps {
    open: boolean;
    onClose: () => void;
}

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function CustomModal(props: modalProps) {
    const [formData, setFormData] = useState<Partial<typicodeApiProps>>({
        title: "",
        body: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const addData = useCustomMutation<Partial<typicodeApiProps>>(['added-data']);

    const handleSubmit = async () => {
        if (!formData.title || !formData.body) return;

        await addData.mutateAsync({
            url: "/api/challenge-data",
            body: formData,
        });
    };


    return (
        <Dialog
            open={props.open}
            onClose={props.onClose}
            slots={{
                transition: Transition
            }}
        >
            <DialogContent>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "500px",
                    width: "400px",
                    gap: "1rem",
                }}>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        height: "2rem",
                        width: "100%",
                    }}>
                        <IconButton
                            onClick={props.onClose}
                            color="error"
                        >
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <Box component={'form'} sx={{
                        display: "flex",
                        flexDirection: 'column',
                        gap: '1rem',
                        height: "100%",
                        width: "100%",
                    }}>
                        <TextField
                            name="title"
                            label={'title'}
                            variant="outlined"
                            onChange={handleChange}
                            value={formData.title}
                            fullWidth
                        />
                        <TextField
                            name="body"
                            label={'body'}
                            variant="outlined"
                            onChange={handleChange}
                            value={formData.body}
                            fullWidth
                        />
                        <Button type="submit" color="primary" onClick={handleSubmit}>
                            Invia
                        </Button>
                    </Box>
                </Box>
            </DialogContent>
        </Dialog >
    )
}