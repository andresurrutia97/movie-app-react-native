import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, ScrollView, Text, Image, View } from 'react-native';

import { Colors } from '@/theme/Colors';
import { getImageUrl } from '@/helpers/urls';

const styles = StyleSheet.create({
  container: { marginVertical: 30, marginLeft: 20 },
  movieItem: {
    width: 140,
    height: 220,
    marginRight: 15,
  },
  poster: {
    width: '100%',
    height: '100%',
    borderRadius: 6,
  },
  title: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 15,
  },
});

const Carousel = ({ movies, isFetching, error, title }) => {
  if (isFetching) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Uh oh, something went wrong!</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {movies &&
          movies.map(movie => (
            <View style={styles.movieItem} key={movie.id}>
              <Image
                source={{ uri: getImageUrl(movie.poster_path) }}
                style={styles.poster}
                accessibilityIgnoresInvertColors
              />
            </View>
          ))}
      </ScrollView>
    </View>
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
