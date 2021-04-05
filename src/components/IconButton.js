import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

import { Colors, TextStyles } from '@/theme';
import { addIcon, playIcon, infoIcon } from '@/assets';

const styles = StyleSheet.create({
  button: {
    padding: 5,
    alignItems: 'center',
  },
  title: { color: Colors.white },
  icon: {
    tintColor: Colors.white,
    width: 40,
    height: 40,
  },
});

const icons = {
  add: addIcon,
  play: playIcon,
  info: infoIcon,
};

const IconButton = ({ icon, title, ...rest }) => {
  return (
    <TouchableOpacity style={styles.button} {...rest}>
      <Image
        style={styles.icon}
        source={icons[icon]}
        accessibilityIgnoresInvertColors={false}
      />
      <Text style={[styles.title, TextStyles.smallText]}>{title}</Text>
    </TouchableOpacity>
  );
};

IconButton.propTypes = {
  icon: PropTypes.oneOf(['add', 'play', 'info']).isRequired,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

IconButton.defaultProps = {
  onPress: () => {},
};

export default IconButton;
