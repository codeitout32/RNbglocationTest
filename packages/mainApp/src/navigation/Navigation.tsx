import React from 'react';

import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Categories from '../screens/Categories';
import CategoryNews from '../screens/CategoryNews';
import Settings from '../screens/Settings';
import {useSelector} from 'react-redux';
import {darkModeSelector} from '@next/common/selectors';
import {ThemeProvider, useTheme, withTheme} from 'react-native-elements';

const Stack = createNativeStackNavigator();

const Navigation = (props: {updateTheme: any; replaceTheme: any}) => {
  const darkMode = useSelector(darkModeSelector);
  const {updateTheme, replaceTheme} = props;

  const {theme} = useTheme();
  const MyTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      text: '#F8FFF8',
      background: '#3D4A3D',
      card: '#556C4D',
    },
  };

  const theme1 = {
    colors: {
      primary: 'pink',
    },
  };

  React.useEffect(() => {
    if (darkMode) {
      updateTheme({colors: {background: 'red'}});
    }
    console.log('hello from dark', theme);
  }, [darkMode]);

  // console.log('darktheme', DarkTheme);

  return (
    <NavigationContainer theme={darkMode ? MyTheme : DefaultTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
        }}>
        <Stack.Screen
          name='Home'
          component={Home}
          initialParams={{catId: 0, isReload: false}}
        />
        <Stack.Screen
          name='Category'
          component={Categories}
          initialParams={{catId: 0}} // only to show selected tab
        />
        <Stack.Screen
          name='CategoryNews'
          component={CategoryNews}
          initialParams={{catId: 0, isReload: false}} // only to show selected tab
        />
        <Stack.Screen name='Settings' component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default withTheme(Navigation);
