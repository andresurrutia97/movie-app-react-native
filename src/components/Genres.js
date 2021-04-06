import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';

import { Colors, TextStyles } from '@/theme';

export const styles = StyleSheet.create({
  genres: {
    color: Colors.white,
  },
});

const Genres = ({ genres, small }) => {
  if (genres.length === 0) {
    return null;
  }

  const movieGenres = genres.map(genre => genre.name);
  return (
    <Text
      style={[styles.genres, small ? TextStyles.smallText : TextStyles.text]}
    >
      {movieGenres.join(' | ')}
    </Text>
  );
};

Genres.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.shape()),
  small: PropTypes.bool,
};

Genres.defaultProps = {
  small: false,
};

export default Genres;
