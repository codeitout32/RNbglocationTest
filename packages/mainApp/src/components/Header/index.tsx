import React from 'react';
import {StyleSheet, View, Linking, Pressable} from 'react-native';
import {Header as HeaderRNE, Icon, Image} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import VectorIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector, useDispatch} from 'react-redux';

import {appBarActions} from '@next/common/slices/appBar.slice';
import {selectShowUpArrow} from '@next/common/selectors';

type HeaderComponentProps = {
  title: string;
  view?: string;
  headerLinks: object;
  noSettings: boolean;
};

const Header: React.FunctionComponent<HeaderComponentProps> = props => {
  const {setGoToTop} = appBarActions;

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const showUpArrow = useSelector(selectShowUpArrow);

  const docsNavigate = () => {
    console.log('hello');
    Linking.openURL(`https://reactnativeelements.com/docs/${props.view}`);
  };
  const headerLinks = props.headerLinks;
  const menuNavigate = () => {
    navigation.navigate(headerLinks.menu.link, headerLinks.menu.params);
  };
  const settingsNavigate = () => {
    navigation.navigate('Settings', headerLinks.menu.params);
  };

  const handleRefresh = () => {
    navigation.navigate(headerLinks.relaod.link, {isReload: true});
  };

  const onTopClick = () => {
    console.log('onTopClick');
    dispatch(setGoToTop(true));
  };

  return (
    <HeaderRNE
      containerStyle={styles.headerContainer}
      leftComponent={
        <>
          {!props.noSettings && (
            <Pressable onPress={menuNavigate}>
              <Image
                source={require('../../assets/logo-light.png')}
                style={{width: 30, height: 30}}
              />
            </Pressable>
          )}
        </>
      }
      rightComponent={
        <View style={styles.headerRight}>
          {props.noSettings ? (
            <Pressable onPress={() => navigation.goBack()}>
              <Icon name="cancel" color="white" type="MaterialIcons" />
            </Pressable>
          ) : (
            <>
              <Pressable
                style={styles.refreshIcon}
                onPress={!showUpArrow ? handleRefresh : onTopClick}>
                {!showUpArrow ? (
                  <Icon
                    name={headerLinks.menu.reloadIcon.name}
                    type={headerLinks.menu.reloadIcon.type}
                    color="white"
                  />
                ) : (
                  <VectorIcons
                    name="arrow-collapse-up"
                    size={24}
                    color="white"
                  />
                )}
              </Pressable>
              <Pressable onPress={settingsNavigate}>
                <Icon name="settings" color="white" />
              </Pressable>
            </>
          )}
        </View>
      }
      centerComponent={{
        text: props.title || 'SolShorts',
        style: styles.heading,
      }}
      statusBarProps={{translucent: true, backgroundColor: 'black'}}
      elevated
    />
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#34CF54',
    width: '100%',
    // paddingVertical: 10,
    position: 'absolute',
    // top: 40,
    zIndex: 100000,
  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    // marginTop: 5,
  },
  subheaderText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  refreshIcon: {
    marginRight: 16,
    // marginBottom: -10,
  },
});

export default Header;
