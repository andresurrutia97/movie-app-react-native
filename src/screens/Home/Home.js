import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ScrollView } from 'react-native';

import NowPlaying from './NowPlaying/NowPlaying';
import { styles } from '@/screens/Home/Home.styles';
import { fetchPopular } from '@/actions/HomeActions';
import Carousel from '@/components/Carousel';
import { NAVIGATION } from '@/constants';

export function Home() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(fetchPopular());
  }, [dispatch]);

  const { popular, isFetchingPopular, popularError } = useSelector(
    state => state.home
  );

  const goToMovie = id => {
    navigation.navigate(NAVIGATION.movie, {
      movieId: id,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <NowPlaying navigation={navigation} goToMovie={goToMovie} />
      <Carousel
        goToMovie={goToMovie}
        title="Trending Now"
        movies={popular}
        isFetching={isFetchingPopular}
        error={popularError}
      />
    </ScrollView>
  );
}
