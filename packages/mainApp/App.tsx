/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-reanimated';
import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
// import {appStore} from '@next/common/store';
import {appStore} from '@next/common/store';

import {PersistGate} from 'redux-persist/integration/react';
import ThemeProviderMain from './src/themeProvider';
import LoadingNews from './src/components/LoadingNews';

const App = () => {
  // const store = useStore();

  //Not usable for now maybe used in future
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  console.log('hellor from app.tsx');

  React.useEffect(() => {
    SplashScreen.hide();
    // getNotifications();
  }, []);

  return (
    <PersistGate loading={<LoadingNews />} persistor={appStore.persistor}>
      <Provider store={appStore}>
        <ThemeProviderMain />
      </Provider>
    </PersistGate>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
