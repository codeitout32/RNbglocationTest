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
        <Stack.Screen
          name="Home"
          component={Home}
          initialParams={{catId: ''}}
        />
        <Stack.Screen name="Category" component={Categories} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
