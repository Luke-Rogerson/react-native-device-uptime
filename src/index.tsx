import { NativeModules } from 'react-native';

type DeviceUptimeType = {
  multiply(a: number, b: number): Promise<number>;
};

const { DeviceUptime } = NativeModules;

export default DeviceUptime as DeviceUptimeType;
