import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, ImageBackground } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import { styles } from './NowPlaying.styles';
import Genres from '@/components/Genres';
import IconButton from '@/components/IconButton';
import Spinner from '@/components/Spinner';
import { ErrorView } from '@/components/ErrorView';
import { fetchNowPlaying } from '@/actions/HomeActions';
import { getImageUrl } from '@/helpers/urls';
import { ERRORS } from '@/constants';

const NowPlaying = ({ goToMovie }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNowPlaying());
  }, [dispatch]);

  const { nowPlaying, isFetchingNowPlaying, nowPlayingError } = useSelector(
    state => state.home
  );

  if (isFetchingNowPlaying) {
    return <Spinner />;
  }
  if (nowPlayingError) {
    return <ErrorView errors={[ERRORS.MAIN]} small />;
  }

  const poster = getImageUrl(nowPlaying.poster_path);

  return (
    <ImageBackground source={{ uri: poster }} style={styles.poster}>
      <View style={styles.nowPlaying}>
        <LinearGradient
          colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.7)', '#000']}
          style={styles.gradient}
        >
          <Genres genres={nowPlaying.genres} />
          <View style={styles.actions}>
            <IconButton icon="add" title="My list" />
            <IconButton icon="play" title="Play" />
            <IconButton
              icon="info"
              title="Info"
              onPress={() => goToMovie(nowPlaying.id)}
            />
          </View>
        </LinearGradient>
      </View>
    </ImageBackground>
  );
};

NowPlaying.propTypes = {
  goToMovie: PropTypes.func,
};

export default NowPlaying;
