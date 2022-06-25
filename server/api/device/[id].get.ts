import { fetchDeviceData, readDeviceConfig } from "@/utils/utils";
import { sendError } from "h3";

export default defineEventHandler(async (event) => {
    const id = event.context.params.id;
    const config = readDeviceConfig(id);
    if (config) {
        const data = await fetchDeviceData(config);
        let res = data.match(config.schema);
        return {
            data: res,
        };
    } else {
        sendError(event, createError({ statusCode: 404, statusMessage: `Device with id: "${id}" not found` }));
    }
});
