import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { NAVIGATION } from '@/constants';
import { Favorites } from '@/screens';

const Stack = createNativeStackNavigator();

export function FavoritesNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={NAVIGATION.favorites} component={Favorites} />
    </Stack.Navigator>
  );
}
