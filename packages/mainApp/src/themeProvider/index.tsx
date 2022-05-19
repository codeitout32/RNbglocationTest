import React from 'react';
import {ThemeProvider} from 'react-native-elements';
import {darkModeSelector} from '@next/common/selectors';

import theme from '@next/common/utils/theme';
import {useSelector} from 'react-redux';
import Navigation from '../navigation/Navigation';
import {SafeAreaView, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MyTest from '../components/MyTest';

const ThemeProviderMain = () => {
  const darkMode = useSelector(darkModeSelector);
  console.log('hellor from theme');
  return (
    <ThemeProvider theme={theme} useDark={darkMode}>
      <View style={{flex: 1}}>
        {/* <Navigation /> */}
        <MyTest />
      </View>
    </ThemeProvider>
  );
};

export default ThemeProviderMain;
