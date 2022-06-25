import { sendError } from "h3";

export default defineEventHandler((event) => {
    sendError(event, createError({ statusCode: 404, statusMessage: "Not found" }));
});
