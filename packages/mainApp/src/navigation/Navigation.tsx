import React from 'react';

import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Categories from '../screens/Categories';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import {useSelector} from 'react-redux';
import {darkModeSelector} from '@next/common/selectors';
import {ThemeProvider, useTheme} from 'react-native-elements';

import theme from '@next/common/utils/theme';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const darkMode = useSelector(darkModeSelector);
  const {updateTheme} = useTheme();
  const MyTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      text: '#F8FFF8',
      background: '#3D4A3D',
    },
  };

  console.log('darktheme', DarkTheme);

  return (
    <ThemeProvider theme={theme} useDark={darkMode}>
      <NavigationContainer theme={darkMode ? MyTheme : DefaultTheme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: true,
          }}>
          <Stack.Screen
            name="Home"
            component={Home}
            initialParams={{catId: 1}}
          />
          <Stack.Screen
            name="Category"
            component={Categories}
            initialParams={{catId: 1}} // only to show selected tab
          />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default Navigation;
