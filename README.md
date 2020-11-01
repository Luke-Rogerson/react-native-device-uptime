# react-native-device-uptime

A simple library to tell you your iOS or Android device's uptime (ie. the amount of time the system has been awake since the last time it was restarted).

On iOS, it wraps the [systemUptime](https://developer.apple.com/documentation/foundation/nsprocessinfo/1414553-systemuptime) property.

On Android, it uses the [elapsedRealtime](https://developer.android.com/reference/android/os/SystemClock#elapsedRealtime()) method.

## Installation

```sh
npm install react-native-device-uptime
```

## Usage

```js
import DeviceUptime from "react-native-device-uptime";

// ...

const uptime = await DeviceUptime.getUptime();
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
