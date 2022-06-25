import yml from "js-yaml";
import fs from "fs";
import path from "path";
import axios from "axios";
import { sendError } from "h3";

export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig();
    const id = event.context.params.id;
    let config;
    try {
        config = yml.load(fs.readFileSync(path.join(runtimeConfig.deviceConfigPath, `${id}.yml`)));
        console.log(JSON.stringify(config));
    } catch (error) {
        config = undefined;
    }
    if (config) {
        const { device } = config;
        const data = await axios
            .get(device.resource.url, {
                headers: {
                    accept: "application/xml",
                },
                auth: {
                    username: device.resource.credentials.user,
                    password: device.resource.credentials.password,
                },
            })
            .then((res) => res.data);
        console.log(data);
        let res = data.match(device.schema);
        return {
            data: res,
        };
    } else {
        sendError(event, createError({ statusCode: 404, statusMessage: `Device with id: "${id}" not found` }));
    }
});
