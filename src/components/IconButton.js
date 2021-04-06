import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

import { Colors, TextStyles } from '@/theme';

const styles = StyleSheet.create({
  button: {
    padding: 5,
    alignItems: 'center',
  },
  title: { color: Colors.white },
  icon: {
    tintColor: Colors.white,
  },
  standarIcon: { width: 32, height: 32 },
  smallIcon: { width: 26, height: 26 },
});

const IconButton = ({ icon, title, small, ...rest }) => {
  return (
    <TouchableOpacity style={styles.button} {...rest}>
      <Image
        style={[styles.icon, small ? styles.smallIcon : styles.standarIcon]}
        source={icon}
        accessibilityIgnoresInvertColors={false}
      />
      <Text style={[styles.title, TextStyles.smallText]}>{title}</Text>
    </TouchableOpacity>
  );
};

IconButton.propTypes = {
  icon: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  small: PropTypes.bool,
};

IconButton.defaultProps = {
  onPress: () => {},
  small: false,
};

export default IconButton;
