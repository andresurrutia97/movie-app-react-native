import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window');

export const styles = StyleSheet.create({
  poster: { width: window.width, height: 600 },

  title: { color: '#fff' },

  nowPlaying: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  gradient: {
    height: '30%',
    width: '100%',
    alignItems: 'center',
    paddingTop: 10,
  },

  actions: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});
