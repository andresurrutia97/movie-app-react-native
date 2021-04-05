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
import { fetchNowPlayingIfNeeded } from '@/actions/HomeActions';
import { addMovie, removeMovie } from '@/actions/ListActions';
import { getImageUrl } from '@/helpers/urls';
import { ERRORS } from '@/constants';

const NowPlaying = ({ goToMovie }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNowPlayingIfNeeded());
  }, [dispatch]);

  const { nowPlaying, isFetchingNowPlaying, nowPlayingError } = useSelector(
    state => state.home
  );

  const { list } = useSelector(state => state.list);

  if (isFetchingNowPlaying) {
    return <Spinner />;
  }
  if (nowPlayingError) {
    return <ErrorView errors={[ERRORS.MAIN]} small />;
  }

  const poster = getImageUrl(nowPlaying.poster_path);
  const isFavorite = list.find(el => el.id === nowPlaying.id);

  return (
    <ImageBackground source={{ uri: poster }} style={styles.poster}>
      <View style={styles.nowPlaying}>
        <LinearGradient
          colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.7)', '#000']}
          style={styles.gradient}
        >
          <Genres genres={nowPlaying.genres} />
          <View style={styles.actions}>
            <IconButton
              icon={isFavorite ? 'play' : 'add'}
              title="My list"
              onPress={() => {
                isFavorite
                  ? dispatch(removeMovie(nowPlaying.id))
                  : dispatch(addMovie(nowPlaying));
              }}
            />
            <IconButton
              icon="play"
              title="Play"
              onPress={() => dispatch(removeMovie(nowPlaying.id))}
            />
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
