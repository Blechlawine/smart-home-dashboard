import yml from "js-yaml";
import fs from "fs";
import path from "path";
import axios from "axios";

export const readDeviceConfig = (id: string): IDeviceConfig => {
    const runtimeConfig = useRuntimeConfig();
    let config: IDeviceConfigFile;
    try {
        config = yml.load(fs.readFileSync(path.join(runtimeConfig.deviceConfigPath, `${id}.yml`)));
        // console.log(JSON.stringify(config));
    } catch (error) {
        config = undefined;
    }
    return config.device;
};

export const readScreenConfig = (id: string): IScreenConfig => {
    const runtimeConfig = useRuntimeConfig();
    let config: IScreenConfigFile;
    try {
        config = yml.load(fs.readFileSync(path.join(runtimeConfig.screenConfigPath, `${id}.yml`)));
        // console.log(JSON.stringify(config));
    } catch (error) {
        config = undefined;
    }
    return config.screen;
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
