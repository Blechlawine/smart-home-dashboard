import { AsyncData } from "#app";

export const useDevice = async (id: string) => {
    const { pending, data, refresh } = await useFetch(`/api/device/${id}`);

    return {
        response: data,
        pending,
        refresh,
    };
};
