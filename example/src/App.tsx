import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import DeviceUptime from 'react-native-device-uptime';

export default function App() {
  const [uptime, setUptime] = useState<string | null>(null);

  useEffect(() => {
    DeviceUptime.getUptime().then((nativeUptime) => setUptime(nativeUptime));
  }, []);

  if (!uptime) return null;

  return (
    <View style={styles.container}>
      <Text>{`Device uptime is ${uptime}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
