import { AsyncData } from "#app";

export const useScreen = async (id: string) => {
    const { pending, data, refresh } = await useFetch(`/api/screens/${id}`);

    return {
        response: data,
        pending,
        refresh,
    };
};
