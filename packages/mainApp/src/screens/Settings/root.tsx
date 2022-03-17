import React from 'react';
import {Linking, Pressable, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Icon, Switch, Text, Card} from 'react-native-elements';

import Header from '../../components/Header';
import styles from './style';
import {useDispatch, useSelector} from 'react-redux';
import {darkModeSelector} from '@next/common/selectors';
import {setDarkMode} from '@next/common/slices/assets.slice';

import {useTheme} from '@react-navigation/native';
import {color} from 'react-native-elements/dist/helpers';
import MyCard from './MyCard';

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

  const headerLinks = {
    menu: {
      link: 'Home',
      params: {catId},
      icon: {name: 'home', type: 'font-awesome'},
    },
  };
  console.log('color', colors);

  // styles.itemBar.backgroundColor = colors.card;
  return (
    <SafeAreaProvider style={[styles.container]}>
      <Header
        title={'Settings'}
        navigation={navigation}
        headerLinks={headerLinks}
        noSettings
      />
      <View style={styles.view}>
        <Card
          wrapperStyle={[styles.itemBar]}
          containerStyle={{width: '90%', backgroundColor: colors.card}}>
          <Text h4 h4Style={[styles.h4Style, {color: colors.text}]}>
            Dark Mode
          </Text>
          <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
        </Card>
        <MyCard title={'Notifications'}>
          <Switch disabled />
        </MyCard>
        <MyCard title={'Share This App'}>
          <Icon
            name="open-outline"
            type="ionicon"
            color={'#2E92FA'}
            onPress={() => {
              Linking.openURL('https://playstore.com');
            }}
          />
        </MyCard>
        <MyCard title={'Rate this App'}>
          <Icon
            name="open-outline"
            type="ionicon"
            color={'#2E92FA'}
            onPress={() => {
              Linking.openURL('https://playstore.com');
            }}
          />
        </MyCard>
        <MyCard title={'Give Feedback'}>
          <Icon
            name="open-outline"
            type="ionicon"
            color={'#2E92FA'}
            onPress={() => {
              Linking.openURL('https://playstore.com');
            }}
          />
        </MyCard>
      </View>
    </SafeAreaProvider>
  );
};
export default Settings;
