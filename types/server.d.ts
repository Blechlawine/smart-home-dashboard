// DEVICES
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

// SCREENS
interface IScreenConfigFile {
    screen: IScreenConfig;
}

interface IScreenConfig {
    title: string;
    content: IScreenContentElement[];
}

interface IScreenContentElement {
    type: "temperature"; // TODO: add more card types
    device: string;
}