import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { NAVIGATION } from '@/constants';
import { Favorites, Movie } from '@/screens';

const Stack = createNativeStackNavigator();

export function FavoritesNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={NAVIGATION.favorites} component={Favorites} />
      <Stack.Screen name={NAVIGATION.movie} component={Movie} />
    </Stack.Navigator>
  );
}
