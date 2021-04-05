import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import { listIcon } from '@/assets';
import { Colors, TextStyles } from '@/theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.pink.primary,
    borderRadius: 100,
    paddingVertical: 3,
    paddingHorizontal: 7,
    alignSelf: 'flex-start',
    marginVertical: 5,
  },
  icon: {
    marginLeft: 3,
    width: 16,
    height: 16,
    tintColor: Colors.white,
  },
});

const MovieAverage = ({ average }) => {
  return (
    <View style={styles.container}>
      <Text style={TextStyles.smallText}>{average}</Text>
      <Image
        style={styles.icon}
        source={listIcon}
        accessibilityIgnoresInvertColors={false}
      />
    </View>
  );
};

export default MovieAverage;
