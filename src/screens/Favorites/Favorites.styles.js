import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '@/theme';

const window = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black.secondary,
    color: Colors.white,
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  title: {
    marginBottom: 20,
  },
  list: {
    justifyContent: 'space-between',
  },
  poster: {
    alignItems: 'center',
    borderRadius: 6,
    height: 230,
    width: window.width / 2 - 30,
    marginBottom: 20,
  },
});
