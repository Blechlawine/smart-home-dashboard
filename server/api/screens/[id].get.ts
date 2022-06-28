import { readScreenConfig } from "@/utils/utils";
import { sendError } from "h3";

export default defineEventHandler((event) => {
    const id = event.context.params.id;
    const config = readScreenConfig(id);
    if (config) {
        return {
            data: config,
        };
    } else {
        sendError(event, createError({ statusCode: 404, statusMessage: `Screen with id: "${id}" not found` }));
    }
});
