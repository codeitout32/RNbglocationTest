import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Categories from '../screens/Categories';
import MyApp from '../screens/HomeScreen/MyApp';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {/* <MyApp /> */}
        <Stack.Screen
          name="Home"
          component={MyApp}
          initialParams={{catId: ''}}
        />

        <Stack.Screen name="Category" component={Categories} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
