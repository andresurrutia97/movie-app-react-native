import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Colors, TextStyles } from '@/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black.secondary,
  },
});

export function ErrorView({ errors, small }) {
  if (errors.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      {errors.map(error => (
        <Text
          key={error}
          style={[
            small ? TextStyles.text : TextStyles.title,
            { color: Colors.pink.primary },
          ]}
        >
          {error}
        </Text>
      ))}
    </View>
  );
}

ErrorView.propTypes = {
  errors: PropTypes.array.isRequired,
  small: PropTypes.bool,
};

ErrorView.defaultProps = {
  small: false,
};
