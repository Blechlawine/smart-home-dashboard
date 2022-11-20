import yml from "yaml";
import fs from "fs";
import path from "path";
import axios from "axios";

export const readDeviceConfig = (id: string) => {
    const runtimeConfig = useRuntimeConfig();
    let config: IDeviceConfigFile | undefined;
    try {
        const readData = fs.readFileSync(path.join(runtimeConfig.deviceConfigPath, `${id}.yml`));
        config = yml.parse(readData.toString("utf-8"));
        console.log(JSON.stringify(config));
    } catch (error) {
        config = undefined;
    }
    return config?.device;
};

export const readScreenConfig = (id: string) => {
    const runtimeConfig = useRuntimeConfig();
    let config: IScreenConfigFile | undefined;
    try {
        const readData = fs.readFileSync(path.join(runtimeConfig.screenConfigPath, `${id}.yml`));
        config = yml.parse(readData.toString("utf-8"));
        // console.log(JSON.stringify(config));
    } catch (error) {
        config = undefined;
    }
    return config?.screen;
};

export const fetchDeviceData = async (deviceConfig: IDeviceConfig) => {
    return await axios
        .get(deviceConfig.resource.url, {
            headers: {
                accept: "application/xml,application/json",
            },
            auth: {
                username: deviceConfig.resource.credentials.user,
                password: deviceConfig.resource.credentials.password,
            },
        })
        .then((res) => res.data);
};
