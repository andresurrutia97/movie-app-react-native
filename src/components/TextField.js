import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { TextStyles, Colors } from '@/theme';

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: Colors.black.lighter,
    borderRadius: 4,
    color: Colors.black.primary,
  },
});

export function TextField({ style, ...rest }) {
  return (
    <TextInput
      style={[TextStyles.text, styles.input, style]}
      underlineColorAndroid="transparent"
      {...rest}
    />
  );
}

TextField.propTypes = {
  style: PropTypes.object,
};

TextField.defaultProps = {
  style: null,
};
