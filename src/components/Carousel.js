import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  ScrollView,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';

import { Colors, TextStyles } from '@/theme';
import { Spinner, ErrorView } from '@/components';
import { getImageUrl } from '@/helpers/urls';
import { ERRORS } from '@/constants';

const styles = StyleSheet.create({
  container: { marginVertical: 10, marginLeft: 10 },
  movieItem: {
    width: 110,
    height: 160,
    marginRight: 10,
  },
  poster: {
    width: '100%',
    height: '100%',
    borderRadius: 6,
  },
  title: {
    color: Colors.white,
    marginBottom: 10,
  },
});

const Carousel = ({ movies, isFetching, error, title, goToMovie }) => {
  if (isFetching) {
    return <Spinner />;
  }
  if (error) {
    return <ErrorView small errors={[ERRORS.MAIN]} />;
  }

  return (
    movies.length !== 0 && (
      <View style={styles.container}>
        {title && <Text style={[styles.title, TextStyles.title]}>{title}</Text>}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {movies &&
            movies.map(movie => (
              <TouchableOpacity
                key={movie.id}
                onPress={() => goToMovie(movie.id)}
              >
                <View style={styles.movieItem}>
                  <Image
                    source={{ uri: getImageUrl(movie.poster_path) }}
                    style={styles.poster}
                    accessibilityIgnoresInvertColors
                  />
                </View>
              </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
    )
  );
};

Carousel.propTypes = {
  title: PropTypes.string,
  movies: PropTypes.arrayOf(PropTypes.shape()),
  isFetching: PropTypes.bool,
  error: PropTypes.shape(),
};

Carousel.defaultProps = {
  title: '',
  movies: [],
  isFetching: false,
  error: null,
};

export default Carousel;
