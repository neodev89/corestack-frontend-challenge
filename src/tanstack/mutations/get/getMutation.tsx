'use client';

import instance from "@/axios/instance"
import { useQuery } from "@tanstack/react-query";

export interface MutationConfig {
    url: string;
    key: string[];
    enabled: boolean;
}

export const useGet = <T,>({ url, key, enabled }: MutationConfig) => {
    return useQuery<T>({
        queryKey: key,
        queryFn: async () => {
            const res = await instance.get<T>(url);
            return res.data;
        },
        enabled,
    })
}