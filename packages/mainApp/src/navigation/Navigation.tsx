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
  DefaultTheme.colors['title'] = '#000';
  DefaultTheme.colors['settingText'] = '#000';

  const {theme} = useTheme();
  const MyTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      title: '#c3c3c3',
      text: '#828282',
      background: '#2c2c2c',
      card: '#556C4D',
      settingText:'#fff'
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
  }, [darkMode]);

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
