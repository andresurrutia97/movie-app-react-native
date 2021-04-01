import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, ScrollView } from 'react-native';

import NowPlaying from './NowPlaying/NowPlaying';
import { styles } from '@/screens/Home/Home.styles';
import { fetchPopular } from '@/actions/HomeActions';
import Carousel from '@/components/Carousel';

export function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopular());
  }, [dispatch]);

  const { popular, isFetchingPopular, popularError } = useSelector(
    state => state.home
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        <NowPlaying />
        <Carousel
          title="Trending Now"
          movies={popular}
          isFetching={isFetchingPopular}
          error={popularError}
        />
      </ScrollView>
    </View>
  );
}
