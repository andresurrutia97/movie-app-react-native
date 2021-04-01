import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Text, View, ImageBackground } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import { styles } from './NowPlaying.styles';
import Genres from '@/components/Genres';
import IconButton from '@/components/IconButton';
import { fetchNowPlaying } from '@/actions/HomeActions';
import { getImageUrl } from '@/helpers/urls';

const NowPlaying = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNowPlaying());
  }, [dispatch]);

  const { nowPlaying, isFetchingNowPlaying, nowPlayingError } = useSelector(
    state => state.home
  );

  if (isFetchingNowPlaying) {
    return <Text>Loading...</Text>;
  }
  if (nowPlayingError) {
    return <Text>Uh oh, something went wrong!</Text>;
  }

  const backDrop = getImageUrl(nowPlaying.poster_path);

  return (
    <ImageBackground source={{ uri: backDrop }} style={styles.backDrop}>
      <View style={styles.nowPlaying}>
        <LinearGradient
          colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.7)', '#000']}
          style={styles.gradient}
        >
          <Genres genres={nowPlaying.genres} />
          <View style={styles.actions}>
            <IconButton icon="list" title="My List" />
            <IconButton icon="list" title="Play" />
            <IconButton icon="list" title="Info" />
          </View>
        </LinearGradient>
      </View>
    </ImageBackground>
  );
};

NowPlaying.propTypes = {
  movieData: PropTypes.shape(),
};

export default NowPlaying;
