import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '@/theme';

const window = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black.secondary,
    color: Colors.white,
  },
  backDrop: { width: window.width, height: 400 },
  backDropImg: { borderBottomRightRadius: 180 },
  content: { padding: 10, marginTop: 30 },
  title: {
    color: Colors.blue.primary,
    fontSize: 28,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  releaseDate: { fontSize: 20, fontWeight: '400', color: Colors.black.lighter },
  synopsis: {
    color: Colors.white,
    marginTop: 10,
  },
  overview: { color: Colors.black.lighter, marginTop: 5 },
  fav: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 10,
    backgroundColor: Colors.blue.primary,
    tintColor: Colors.white,
    padding: 5,
    borderRadius: 50,
  },
  added: {
    tintColor: Colors.white,
  },
  notAdded: {
    tintColor: Colors.black.primary,
  },
  actions: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: -25,
    left: 0,
    backgroundColor: Colors.pink.primary,
    borderRadius: 30,
    paddingHorizontal: 20,
    marginHorizontal: 20,
  },
});
