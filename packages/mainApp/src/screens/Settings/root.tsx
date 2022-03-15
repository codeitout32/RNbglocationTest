import React from 'react';
import {Pressable, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Icon, Switch, Text} from 'react-native-elements';

import Header from '../../components/Header';
import styles from './style';
import {useDispatch, useSelector} from 'react-redux';
import {darkModeSelector} from '@next/common/selectors';
import {setDarkMode} from '@next/common/slices/assets.slice';

import {useTheme} from '@react-navigation/native';
import {color} from 'react-native-elements/dist/helpers';

const icons = [
  {name: 'compass', type: 'entypo'},
  {name: 'laptop', type: 'entypo'},
  {name: 'shopping-cart', type: 'entypo'},
  {name: 'tv', type: 'entypo'},
  {name: 'trophy', type: 'evilicon'},
  {name: 'headphones', type: 'feather'},
];

const Settings: React.FC<any> = props => {
  const {navigation, categoriesList, fetchCategoriesStart, route} = props;
  React.useEffect(() => {
    fetchCategoriesStart();
  }, []);

  const {colors} = useTheme();

  const dispatch = useDispatch();

  const isDarkMode = useSelector(darkModeSelector);

  const catId = route.params?.catId;

  const toggleDarkMode = () => {
    console.log('isdark', isDarkMode);
    dispatch(setDarkMode(!isDarkMode));
  };
  const isSelected = (itemId: any) => ({
    color: itemId == catId ? '#00BAFF' : 'darkgrey',
    borderColor: itemId == catId ? '#00BAFF' : 'darkgrey',
  });

  const headerLinks = {
    menu: {
      link: 'Home',
      params: {catId},
      icon: {name: 'home', type: 'font-awesome'},
    },
  };
  console.log('color', colors);
  return (
    <SafeAreaProvider style={[styles.container]}>
      <Header
        title={'Settings'}
        navigation={navigation}
        headerLinks={headerLinks}
        noSettings
      />
      <View style={styles.view}>
        <View style={styles.itemBar}>
          <Text h4 h4Style={[styles.h4Style, {color: colors.text}]}>
            Dark Mode
          </Text>
          <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
        </View>
      </View>
    </SafeAreaProvider>
  );
};
export default Settings;
