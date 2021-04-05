import { StyleSheet } from 'react-native';
import { Colors } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 10,
    backgroundColor: Colors.black.secondary,
  },
  list: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: Colors.black.primary,
    marginBottom: 10,
    borderRadius: 6,
  },
  poster: {
    alignItems: 'center',
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    height: 100,
    width: '50%',
  },
  info: {
    flex: 2,
    padding: 10,
  },
});
