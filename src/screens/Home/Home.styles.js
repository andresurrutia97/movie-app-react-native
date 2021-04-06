import { StyleSheet, Platform } from 'react-native';
import { Colors } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black.secondary,
  },
  logo: {
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 1,
    width: 90,
    height: 50,
    ...Platform.select({
      ios: {
        top: 55,
        // marginTop: 55,
      },
      android: {
        top: 15,
      },
    }),
  },
});
