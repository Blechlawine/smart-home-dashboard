import { AsyncData } from "#app";

export const useScreen = async (id: string) => {
    const { pending, data, refresh } = (await useFetch(`/api/screens/${id}`)) as AsyncData<IScreenResponse, Error>;
    
    return {
        response: data,
        pending,
        refresh,
    };
};
