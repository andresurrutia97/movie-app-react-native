import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';
import { Colors } from '@/theme/Colors';

export const styles = StyleSheet.create({
  genres: {
    fontSize: 16,
    color: Colors.white,
  },
});

const Genres = ({ genres }) => {
  const movieGenres = genres.map(genre => genre.name);
  return <Text style={styles.genres}>{movieGenres.join(' - ')}</Text>;
};

Genres.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.shape()),
};

export default Genres;
