import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, ImageBackground } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import { styles } from './NowPlaying.styles';
import { ErrorView, Spinner, IconButton, Genres } from '@/components';
import { fetchNowPlayingIfNeeded } from '@/actions/HomeActions';
import { addMovie, removeMovie } from '@/actions/ListActions';
import { getImageUrl } from '@/helpers/urls';
import { ERRORS } from '@/constants';
import { addIcon, playIcon, infoIcon, addedIcon } from '@/assets';

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

  const isFavorite = list.find(el => el.id === nowPlaying.id);

  return (
    nowPlaying && (
      <ImageBackground
        source={{ uri: getImageUrl(nowPlaying.poster_path) }}
        style={styles.poster}
      >
        <View style={styles.nowPlaying}>
          <LinearGradient
            colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.7)', '#000']}
            style={styles.gradient}
          >
            <Genres genres={nowPlaying.genres} />
            <View style={styles.actions}>
              <IconButton
                icon={isFavorite ? addedIcon : addIcon}
                title="My list"
                onPress={() => {
                  isFavorite
                    ? dispatch(removeMovie(nowPlaying.id))
                    : dispatch(addMovie(nowPlaying));
                }}
              />
              <IconButton icon={playIcon} title="Play" />
              <IconButton
                icon={infoIcon}
                title="Info"
                onPress={() => goToMovie(nowPlaying.id)}
              />
            </View>
          </LinearGradient>
        </View>
      </ImageBackground>
    )
  );
};

NowPlaying.propTypes = {
  goToMovie: PropTypes.func,
};

export default NowPlaying;
