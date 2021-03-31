import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TextStyles, Colors } from '@/theme';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    padding: 10,
    width: '100%',
    color: '#fff',
    backgroundColor: Colors.blue.primary,
  },
  label: {
    color: '#fff',
  },
});

export function Button({ style, textStyle, title, ...rest }) {
  return (
    <TouchableOpacity style={[styles.button, style]} {...rest}>
      <Text style={[TextStyles.label, textStyle, styles.label]}>{title}</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  style: PropTypes.object,
  textStyle: PropTypes.object,
  title: PropTypes.string.isRequired,
};

Button.defaultProps = {
  style: null,
  textStyle: null,
};
