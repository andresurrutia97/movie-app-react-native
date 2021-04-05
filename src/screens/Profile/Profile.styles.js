import { StyleSheet } from 'react-native';
import { Colors } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 40,
    backgroundColor: Colors.black.secondary,
  },
  title: {
    marginTop: 20,
    textAlign: 'center',
  },
});
