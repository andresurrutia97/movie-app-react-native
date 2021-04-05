import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Image, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './Search.styles';
import { TextField, ErrorView, Spinner, MovieAverage } from '@/components';
import { searchMovie, clearSearch } from '@/actions/SearchActions';
import { TextStyles } from '@/theme';
import { getImageUrl } from '@/helpers/urls';
import { ERRORS, NAVIGATION } from '@/constants';
import { defaultPoster } from '@/assets';

export const Search = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchName) {
        dispatch(searchMovie(searchName));
      } else {
        dispatch(clearSearch());
      }
    }, 700);

    return () => clearTimeout(timer);
  }, [searchName, dispatch]);

  const { movies, isFetching, error } = useSelector(state => state.search);

  const goToMovie = id => {
    navigation.navigate(NAVIGATION.movie, {
      movieId: id,
    });
  };

  let content = [];

  if (isFetching) {
    content = <Spinner />;
  }
  if (error) {
    content = <ErrorView errors={[ERRORS.MAIN]} />;
  }

  if (movies?.length > 0) {
    content = (
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => goToMovie(item.id)}
            style={styles.list}
          >
            <Image
              source={
                item.backdrop_path
                  ? { uri: getImageUrl(item.backdrop_path) }
                  : defaultPoster
              }
              defaultSource={defaultPoster}
              style={styles.poster}
              accessibilityIgnoresInvertColors
            />
            <View style={styles.info}>
              <Text style={[TextStyles.text, styles.title]}>{item.title}</Text>
              <MovieAverage average={item.vote_average} />
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    );
  } else if (movies?.length === 0) {
    content = <Text style={TextStyles.text}>Nothing found...</Text>;
  }

  return (
    <View style={styles.container}>
      <TextField
        autoCapitalize="none"
        onChangeText={setSearchName}
        placeholder="Search a movie..."
        value={searchName}
      />
      {content}
    </View>
  );
};
