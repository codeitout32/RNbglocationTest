import * as React from 'react';

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
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  gestureHandlerRootHOC,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import NewScreen from '../screens/NewScreen';
import HomeTabs from '../navigators/HomeTabs';

const Stack = createNativeStackNavigator();

const Navigation = (props: {updateTheme: any; replaceTheme: any}) => {
  const darkMode = useSelector(darkModeSelector);
  const {updateTheme, replaceTheme} = props;
  DefaultTheme.colors['title'] = 'rgba(0, 0, 0, 0.8)';
  DefaultTheme.colors['settingText'] = 'rgba(0, 0, 0, 0.6)';
  DefaultTheme.colors['green'] = '#34CF54';
  DefaultTheme.colors['background'] = 'rgba(250, 250, 250,1)';
  DefaultTheme.colors['text'] = 'rgba(0, 0, 0, 0.6)';
  DefaultTheme.colors['transparentBg'] = 'rgba(250, 250, 250, 0.95)';
  DefaultTheme.colors['border'] = 'rgba(0, 0, 0, 0.6)';

  const {theme} = useTheme();
  const MyTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      title: 'rgba(255, 255, 255, 0.8)',
      text: 'rgba(255, 255, 255, 0.6)',
      transparentBg: 'rgba(45,45,45,0.95)',
      background: 'rgba(45, 45, 45,1)',
      card: '#444',
      settingText: 'rgba(255, 255, 255, 0.6)',
      green: '#34CF54',
      border: 'rgba(250, 250, 250, 0.5)',
    },
  };

  console.log('DefaultTheme', DefaultTheme);

  console.log('hellor from navigation');

  return (
    <NavigationContainer theme={darkMode ? MyTheme : DefaultTheme}>
      {
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            // gestureEnabled: true,
            // cardOverlayEnabled: true,
            // cardOverlay: true,
            animationEnabled: true,
          }}>
          <Stack.Screen
            name="Home"
            component={Home}
            initialParams={{catId: 0, isReload: false}}
            options={{
              animationEnabled: true,
              cardOverlayEnabled: false,
              cardOverlay: false,
            }}
          />
          <Stack.Screen
            name="Category"
            component={Categories}
            initialParams={{catId: 0}} // only to show selected tab
            options={{
              presentation: 'transparentModal',
              cardOverlayEnabled: false,
              cardOverlay: false,
            }}
          />
          <Stack.Screen
            name="CategoryNews"
            component={CategoryNews}
            initialParams={{catId: 0, isReload: false}} // only to show selected tab
            options={{
              animationEnabled: true,
              cardOverlayEnabled: false,
              cardOverlay: false,
            }}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{
              presentation: 'transparentModal',
              // animationEnabled: false,
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
};

export default Navigation;
