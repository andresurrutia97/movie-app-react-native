import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { Colors } from '@/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.black.secondary,
  },
});

const Spinner = () => (
  <View style={styles.container}>
    <ActivityIndicator color={Colors.blue.primary} />
  </View>
);

export default Spinner;
