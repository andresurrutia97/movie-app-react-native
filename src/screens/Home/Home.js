import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ScrollView, RefreshControl } from 'react-native';

import NowPlaying from './NowPlaying/NowPlaying';
import { styles } from '@/screens/Home/Home.styles';
import {
  fetchPopularIfNeeded,
  fetchNowPlaying,
  fetchPopular,
} from '@/actions/HomeActions';
import { Carousel } from '@/components';
import { NAVIGATION } from '@/constants';

export function Home() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    dispatch(fetchPopularIfNeeded());
  }, [dispatch]);

  const { popular, isFetchingPopular, popularError } = useSelector(
    state => state.home
  );
  const { list } = useSelector(state => state.list);

  const goToMovie = id => {
    navigation.navigate(NAVIGATION.movie, {
      movieId: id,
    });
  };

  const onRefresh = () => {
    setRefreshing(true);

    Promise.all([dispatch(fetchNowPlaying()), dispatch(fetchPopular())]).then(
      () => {
        setRefreshing(false);
      }
    );
  };

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={() => onRefresh()} />
      }
    >
      <NowPlaying navigation={navigation} goToMovie={goToMovie} />
      <Carousel goToMovie={goToMovie} title="My list" movies={list} />
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
