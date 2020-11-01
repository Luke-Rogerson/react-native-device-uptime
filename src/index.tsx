import { NativeModules } from 'react-native';

export type DeviceUptimeType = {
  getUptime: () => Promise<string>;
};

const { DeviceUptime } = NativeModules;

export default DeviceUptime as DeviceUptimeType;
