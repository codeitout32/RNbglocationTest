import React from 'react';
import {StyleSheet, View, Linking, Pressable} from 'react-native';
import {Header as HeaderRNE, Icon, Image} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

type HeaderComponentProps = {
  title: string;
  view?: string;
  headerLinks: object;
  noSettings: boolean;
};

const Header: React.FunctionComponent<HeaderComponentProps> = props => {
  const navigation = useNavigation();
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
  return (
    <HeaderRNE
      containerStyle={styles.headerContainer}
      leftComponent={
        <>
          <Pressable onPress={menuNavigate}>
            {/* <Icon
              name={headerLinks.menu.icon.name}
              type={headerLinks.menu.icon.type}
              size={30}
              color="white"
            /> */}
            <Image
              source={require('../../assets/logo-light.png')}
              style={{width: 30, height: 30}}
            />
          </Pressable>
        </>
      }
      rightComponent={
        <View style={styles.headerRight}>
          {props.noSettings ? (
            <Pressable onPress={() => navigation.goBack()}>
              <Icon name="back" color="white" type="antdesign" />
            </Pressable>
          ) : (
            <>
              <Pressable style={styles.refreshIcon} onPress={handleRefresh}>
                <Icon
                  name={headerLinks.menu.reloadIcon.name}
                  type={headerLinks.menu.reloadIcon.type}
                  color="white"
                />
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
    />
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    // paddingTop: -20,
    // flexGrow: 0,
    // flexShrink: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#34CF54',
    width: '100%',
    // paddingVertical: 10,
    position: 'absolute',
    // top: 40,
    zIndex: 10000,
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
