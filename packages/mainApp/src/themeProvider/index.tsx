import React from 'react';
import {ThemeProvider} from 'react-native-elements';
import {darkModeSelector} from '@next/common/selectors';

import theme from '@next/common/utils/theme';
import {useSelector} from 'react-redux';
import Navigation from '../navigation/Navigation';
import {SafeAreaView} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
const ThemeProviderMain = () => {
  const darkMode = useSelector(darkModeSelector);
  return (
    <ThemeProvider theme={theme} useDark={darkMode}>
      <Navigation />
    </ThemeProvider>
  );
};

export default ThemeProviderMain;
