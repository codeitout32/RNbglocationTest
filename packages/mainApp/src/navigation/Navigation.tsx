import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Categories from '../screens/Categories';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
        }}
        swipeEnabled={true}>
        <Stack.Screen name="Home" component={Home} initialParams={{catId: 1}} />
        <Stack.Screen
          name="Category"
          component={Categories}
          initialParams={{catId: 1}} // only to show selected tab
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
