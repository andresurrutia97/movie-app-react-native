import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { NAVIGATION } from '@/constants';
import { Home } from '@/screens';

const Stack = createNativeStackNavigator();

export function SearchNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NAVIGATION.search} component={Home} />
    </Stack.Navigator>
  );
}
