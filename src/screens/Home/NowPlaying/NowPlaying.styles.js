import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window');

export const styles = StyleSheet.create({
  nowPlaying: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  poster: { width: window.width, height: 550 },
  gradient: {
    height: '40%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  actions: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
});
