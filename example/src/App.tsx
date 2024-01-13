import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { RemixIcon } from 'remixicon-native';

export default function App() {
  return (
    <View style={styles.container}>
      <RemixIcon name="remixicon-line" color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
