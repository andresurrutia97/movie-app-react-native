import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { NAVIGATION } from '@/constants';
import { Home } from '@/screens';

const Stack = createNativeStackNavigator();

export function FavoritesNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NAVIGATION.favorites} component={Home} />
    </Stack.Navigator>
  );
}
