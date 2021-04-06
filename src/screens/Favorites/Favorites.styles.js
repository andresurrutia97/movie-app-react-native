import { StyleSheet, Dimensions, Platform } from 'react-native';
import { Colors } from '@/theme';

const window = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black.secondary,
    color: Colors.white,
    paddingHorizontal: 10,
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
    marginBottom: 10,
  },
  poster: {
    alignItems: 'center',
    borderRadius: 6,
    height: 160,
    width: window.width / 3 - 15,
    marginBottom: 10,
    marginRight: 10,
  },
});
