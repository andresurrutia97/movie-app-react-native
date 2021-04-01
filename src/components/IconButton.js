import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { Colors } from '@/theme/Colors';

const styles = StyleSheet.create({
  button: {
    padding: 5,
    alignItems: 'center',
  },
  title: { color: Colors.white, fontWeight: '500' },
  icon: {
    tintColor: Colors.white,
    width: 40,
    height: 40,
  },
});

const icons = {
  list: require('@/assets/ic_home/ic_home.png'),
  play: '',
  info: '',
};

const IconButton = ({ icon, title }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Image
        style={styles.icon}
        source={icons[icon]}
        accessibilityIgnoresInvertColors={false}
      />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default IconButton;
