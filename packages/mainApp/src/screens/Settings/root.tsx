import React, {useState, useRef} from 'react';
import {
  Linking,
  Pressable,
  ScrollView,
  View,
  Platform,
  SafeAreaView,
} from 'react-native';
// import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Icon, Switch, Text, Card, ListItem} from 'react-native-elements';
import {Picker} from '@react-native-picker/picker';
import SelectDropdown from 'react-native-select-dropdown';
import {
  checkNotifications,
  requestNotifications,
} from 'react-native-permissions';
import {getDeviceToken} from 'react-native-device-info';

import Header from '../../components/Header';
import styles from './style';
import {useDispatch, useSelector} from 'react-redux';
import {
  assetsLoadingSelector,
  darkModeSelector,
  userIdSelector,
} from '@next/common/selectors';
import {
  getUserIdStart,
  setDarkMode,
  updateNotificationStart,
} from '@next/common/slices/assets.slice';

import {useTheme} from '@react-navigation/native';
import {color} from 'react-native-elements/dist/helpers';
import MyCard from './MyCard';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

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

  const userIdState = useSelector(userIdSelector);
  const loadingSelector = useSelector(assetsLoadingSelector);

  React.useEffect(() => {
    fetchCategoriesStart();
  }, []);
  React.useEffect(() => {
    if (!userIdState?.id) {
      const device_id = getDeviceToken();
      const device_type = Platform.OS;
      const notification_status = true;
      console.log('userid', device_id, device_type, notification_status);
      dispatch(getUserIdStart({device_id, device_type, notification_status}));
    }
  }, []);

  const open = () => pickerRef.current.focus();
  const close = () => pickerRef.current.blur();

  const lang = ['English', 'Hindi'];

  const toggleDarkMode = () => {
    dispatch(setDarkMode(!isDarkMode));
  };
  const toggleNotification = () => {
    dispatch(
      updateNotificationStart({
        status: !userIdState?.notification_status,
        user_id: userIdState?.id,
      }),
    );
  };

  const headerLinks = {
    menu: {
      link: 'Home',
      params: {catId},
      icon: {name: 'home', type: 'font-awesome'},
    },
  };

  const tap = Gesture.Tap().onStart(e => {
    console.log('tap1');
    // handleTouched();
  });

  return (
    <View style={[styles.container]} collapsable={false}>
      <Header
        title={'Settings'}
        navigation={navigation}
        headerLinks={headerLinks}
        noSettings
      />
      <ScrollView>
        <GestureDetector gesture={tap}>
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
                    buttonTextStyle={{
                      color: colors.text,
                    }}
                    defaultValueByIndex={0}
                    renderDropdownIcon={() => (
                      <Icon
                        name={'chevron-down'}
                        type={'entypo'}
                        color={colors.text}
                      />
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
                  {loadingSelector && (
                    <Text style={{color: colors.text}}>Wait...</Text>
                  )}
                  <Switch
                    value={userIdState?.notification_status}
                    onChange={toggleNotification}
                  />
                </MyCard>
              </View>
              <View style={[styles.borderBottom]}>
                <MyCard
                  title={'Personalize Your Feed'}
                  iconName={'questioncircleo'}
                  iconColor={colors?.settingText}
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
        </GestureDetector>
      </ScrollView>
    </View>
  );
};
export default Settings;
