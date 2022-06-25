interface IDeviceConfigFile {
    device: IDeviceConfig;
}

interface IDeviceConfig {
    resource: IResource;
    schema: string;
}

interface IResource {
    url: string;
    credentials: ICredentials;
}

interface ICredentials {
    user: string;
    password: string;
}