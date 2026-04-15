'use client'
import { ReactNode } from "react";

export default function GlobalWrap({
    children
}: {
    children: ReactNode;
}) {
    return (
        <div>
            {children}
        </div>
    )
}