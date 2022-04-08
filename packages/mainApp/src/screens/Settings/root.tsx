import React, {useState, useRef} from 'react';
import {
  Linking,
  Pressable,
  ScrollView,
  View,
  Platform,
  SafeAreaView,
  ActivityIndicator,
  findNodeHandle,
} from 'react-native';
// import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Icon, Switch, Text, Card, ListItem} from 'react-native-elements';
import {Picker} from '@react-native-picker/picker';
import SelectDropdown from 'react-native-select-dropdown';
import messaging from '@react-native-firebase/messaging';

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
import {Gesture} from 'react-native-gesture-handler';

import {BlurView} from '@react-native-community/blur';

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
  const [rendered, setRendered] = useState(false);

  const pickerRef = useRef();
  const messageRef = useRef(null);
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const isDarkMode = useSelector(darkModeSelector);
  const catId = route.params?.catId;

  const loadingSelector = useSelector(assetsLoadingSelector);

  const userIdState = useSelector(userIdSelector);

  //Send token code can be removed as it is implemented in home page, but i'm keeping it for being safe.
  const sendFcmToken = async () => {
    await messaging().registerDeviceForRemoteMessages();
    const token = await messaging().getToken();
    return token;
  };

  // React.useEffect(() => {
  //   fetchCategoriesStart();
  // }, []);
  React.useEffect(() => {
    if (!userIdState?.id) {
      sendFcmToken().then(device_id => {
        const device_type = Platform.OS;
        const notification_status = true;
        console.log('userid', device_id, device_type, notification_status);
        dispatch(getUserIdStart({device_id, device_type, notification_status}));
      });
    }
    console.log('onEffect complete');
  }, []);

  const onLayout = () => {
    setRendered(true);
    setRendered(findNodeHandle(messageRef.current));
    // console.log('onLayout');
  };

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
    <View
      style={[styles.container]}
      collapsable={false}
      ref={containerRef => {
        messageRef.current = containerRef;
      }}>
      <Header
        title={'Settings'}
        navigation={navigation}
        headerLinks={headerLinks}
        noSettings
      />
      <ScrollView>
        <View style={[styles.view, {backgroundColor: colors.transparentBg}]}>
          {/* <View
          style={[styles.view, {backgroundColor: 'transparent'}]}
          onLayout={onLayout}> */}
          {/* {rendered && (
            <BlurView
              style={styles.absolute}
              blurType={isDarkMode ? 'dark' : 'light'}
              blurAmount={25}
              reducedTransparencyFallbackColor="white"
            />
          )} */}
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
                  // <Text style={{color: colors.text}}>Wait...</Text>
                  <ActivityIndicator size="small" color="#0000ff" />
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
      </ScrollView>
    </View>
  );
};
export default Settings;
