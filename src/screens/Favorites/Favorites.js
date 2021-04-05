import { useNavigation } from '@react-navigation/native';
import React from 'react';
import PropTypes from 'prop-types';
import { Text, Image, View, TouchableOpacity, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './Favorites.styles';
import { TextStyles } from '@/theme';
import { getImageUrl } from '@/helpers/urls';
import { NAVIGATION } from '@/constants';

export const Favorites = () => {
  const navigation = useNavigation();
  const { list } = useSelector(state => state.list);

  const goToMovie = id => {
    navigation.navigate(NAVIGATION.movie, {
      movieId: id,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={[TextStyles.title, styles.title]}>My List</Text>
      <FlatList
        columnWrapperStyle={styles.list}
        data={list}
        renderItem={({ item }) => (
          <TouchableOpacity key={item.id} onPress={() => goToMovie(item.id)}>
            <Image
              source={{ uri: getImageUrl(item.poster_path) }}
              style={styles.poster}
              accessibilityIgnoresInvertColors
            />
          </TouchableOpacity>
        )}
        numColumns={2}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

Favorites.propTypes = {
  route: PropTypes.shape(),
};
