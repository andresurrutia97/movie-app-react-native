import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Text, View, ScrollView, ImageBackground } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { styles } from './Movie.styles';
import Genres from '@/components/Genres';
import { ErrorView, Spinner, IconButton, MovieAverage } from '@/components';
import { TextStyles, Shared } from '@/theme';
import { fetchMovie } from '@/actions/MovieActions';
import { addMovie, removeMovie } from '@/actions/ListActions';
import { getImageUrl } from '@/helpers/urls';
import { ERRORS } from '@/constants';
import { defaultPoster, addIcon, playIcon, addedIcon } from '@/assets';

export const Movie = ({ route }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const { movieId } = route.params;
    dispatch(fetchMovie(movieId));
  }, [route, dispatch]);

  const { movie, isFetching, error } = useSelector(state => state.movie);
  const { list } = useSelector(state => state.list);

  if (isFetching) {
    return <Spinner />;
  }
  if (error) {
    return <ErrorView errors={[ERRORS.MAIN]} />;
  }

  const backDrop = movie.backdrop_path
    ? { uri: getImageUrl(movie.backdrop_path) }
    : defaultPoster;
  const releaseDate = movie.release_date.split('-')[0];
  const isFavorite = list.find(el => el.id === movie.id);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={Shared.contentContainerStyle}
    >
      <ImageBackground
        source={backDrop}
        style={styles.backDrop}
        accessibilityIgnoresInvertColors
        imageStyle={styles.backDropImg}
      >
        <View style={styles.actions}>
          <IconButton
            icon={isFavorite ? addedIcon : addIcon}
            title="My list"
            small
            onPress={() => {
              isFavorite
                ? dispatch(removeMovie(movie.id))
                : dispatch(addMovie(movie));
            }}
          />
          <IconButton icon={playIcon} title="Watch" small />
        </View>
      </ImageBackground>

      <View style={styles.content}>
        <Text style={styles.title}>
          {movie.title} <Text style={styles.releaseDate}>({releaseDate})</Text>
        </Text>
        <Genres genres={movie.genres} />
        <MovieAverage average={movie.vote_average} />
        <Text style={[styles.synopsis, TextStyles.title]}>Synopsis</Text>
        <Text style={[styles.overview, TextStyles.text]}>{movie.overview}</Text>
      </View>
    </ScrollView>
  );
};

Movie.propTypes = {
  route: PropTypes.shape(),
};
