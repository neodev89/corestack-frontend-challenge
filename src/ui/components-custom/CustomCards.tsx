import { Card, CardContent, Box, Typography } from "@mui/material";
import { ReactNode } from "react";

interface CardProps {
    title: ReactNode;
    bodyCard: ReactNode;
    footerCard: ReactNode;
}

export default function CustomCards(props: CardProps) {

    return (
        <Box sx={{
            position: "relative",
            display: "flex",
            minHeight: "15rem",
            width: "20rem",
        }}>
            <Card>
                <CardContent>
                    <Typography variant="h3">
                        {props.title}
                    </Typography>
                    <Typography variant="body1">
                        {props.bodyCard}
                    </Typography>
                    <Typography variant="body2">
                        {props.footerCard}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}