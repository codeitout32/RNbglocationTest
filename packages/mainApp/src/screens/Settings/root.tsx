import React, {useState, useRef} from 'react';
import {Linking, Pressable, ScrollView, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Icon, Switch, Text, Card, ListItem} from 'react-native-elements';
import {Picker} from '@react-native-picker/picker';
import SelectDropdown from 'react-native-select-dropdown';

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
  const [selectedLanguage, setSelectedLanguage] = useState();

  const pickerRef = useRef();
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const isDarkMode = useSelector(darkModeSelector);
  const catId = route.params?.catId;

  React.useEffect(() => {
    fetchCategoriesStart();
  }, []);

  const open = () => pickerRef.current.focus();
  const close = () => pickerRef.current.blur();

  const lang = ['English', 'Hindi'];

  const toggleDarkMode = () => {
    dispatch(setDarkMode(!isDarkMode));
  };

  const headerLinks = {
    menu: {
      link: 'Home',
      params: {catId},
      icon: {name: 'home', type: 'font-awesome'},
    },
  };

  return (
    <SafeAreaProvider style={[styles.container]}>
      <Header
        title={'Settings'}
        navigation={navigation}
        headerLinks={headerLinks}
        noSettings
      />
      <ScrollView>
        <View style={[styles.view, {backgroundColor: colors.background}]}>
          <View>
            <View style={styles.borderBottom}>
              <MyCard
                title={'Language'}
                iconName={'language'}
                iconColor={colors.settingText}
                iconType={'entypo'}>
                {/* <Picker
                  style={[styles.pickerStyle, {color: colors.settingText}]}
                  ref={pickerRef}
                  dropdownIconColor={colors.settingText}
                  dropdownIconStyle={{marginLeft: 10}}
                  dropdownIconRippleColor={colors.settingText}
                  mode="dropdown"
                  selectedValue={selectedLanguage}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage(itemValue)
                  }>
                  <Picker.Item label="English" value="en" />
                  <Picker.Item label="Hindi" value="hi" />
                </Picker> */}

                <SelectDropdown
                  data={lang}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem;
                  }}
                  rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item;
                  }}
                  buttonStyle={{
                    backgroundColor: 'transparent',
                    height: 35,
                    paddingHorizontal: 0,
                    width: 100,
                  }}
                  buttonTextStyle={{}}
                  defaultValueByIndex={0}
                  renderDropdownIcon={() => (
                    <Icon name={'chevron-down'} type={'entypo'} />
                  )}
                  dropdownStyle={{
                    height: 100,
                  }}
                />
              </MyCard>
            </View>
            <View style={styles.borderBottom}>
              <MyCard
                title={'Notifications'}
                iconName={'notifications'}
                iconColor={colors.settingText}
                iconType={'ionicon'}>
                <Switch disabled />
              </MyCard>
            </View>
            <View style={[styles.borderBottom]}>
              <MyCard
                title={'Personalize Your Feed'}
                iconName={'questioncircleo'}
                iconColor={colors.settingText}
                iconType={'ant-design'}></MyCard>
            </View>
            <View style={styles.borderBottom}>
              <MyCard
                title={'Dark Mode'}
                iconName={'theme-light-dark'}
                iconColor={colors.settingText}
                iconType={'material-community'}>
                <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
              </MyCard>
            </View>
          </View>
          <View>
            <MyCard
              title={'Share This App'}
              iconName={'share'}
              iconColor={colors.settingText}
              iconType={'fa'}
              onPress={() => Linking.openURL('https://playstore.com')}
            />
            <MyCard
              title={'Rate this App'}
              iconName={'star-rate'}
              iconColor={colors.settingText}
              iconType={'material-icons'}
              onPress={() => Linking.openURL('https://playstore.com')}
            />
            <MyCard
              title={'Give Feedback'}
              iconName={'feedback'}
              iconColor={colors.settingText}
              iconType={'material-icons'}
              onPress={() => Linking.openURL('https://playstore.com')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
};
export default Settings;
