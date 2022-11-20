interface IDeviceResponse {
    data: Array<string>;
    metadata: IDeviceConfig["metadata"];
}

interface IScreenResponse {
    data: IScreenConfig;
}
