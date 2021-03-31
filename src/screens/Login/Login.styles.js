import { StyleSheet } from 'react-native';
import { Colors } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 30,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    right: 0,
  },
  formContainer: {
    borderRadius: 12,
    padding: 20,
    width: '100%',
    backgroundColor: Colors.black.opac,
  },
  submitButton: {
    marginTop: 20,
  },
  title: {
    fontSize: 75,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
  },
});
