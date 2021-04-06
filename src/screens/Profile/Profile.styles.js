import { StyleSheet, Platform } from 'react-native';
import { Colors } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: Colors.black.secondary,
    paddingHorizontal: 10,
    paddingBottom: 20,
    ...Platform.select({
      ios: {
        paddingTop: 55,
      },
      android: {
        paddingTop: 15,
      },
    }),
  },
  title: {
    textAlign: 'center',
  },
});
