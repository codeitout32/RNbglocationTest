import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Linking,
  StyleProp,
  TextStyle,
  ViewStyle,
  Pressable,
} from 'react-native';
import {Header as HeaderRNE, HeaderProps, Icon} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

type HeaderComponentProps = {
  title: string;
  view?: string;
  navigation: object;
  headerLinks: object;
  noSettings: boolean;
};

type ParamList = {
  Detail: {
    openDrawer: void;
  };
};

// navigation.navigate('Home', {catId: item.id});

const Header: React.FunctionComponent<HeaderComponentProps> = props => {
  const docsNavigate = () => {
    console.log('hello');
    Linking.openURL(`https://reactnativeelements.com/docs/${props.view}`);
  };
  const headerLinks = props.headerLinks;
  const playgroundNavigate = () => {
    console.log('hello');
    // Linking.openURL(`https://react-native-elements.js.org/#/${props.view}`);
  };
  const menuNavigate = () => {
    props.navigation.navigate(headerLinks.menu.link, headerLinks.menu.params);
  };
  const settingsNavigate = () => {
    props.navigation.navigate('Settings', headerLinks.menu.params);
  };
  console.log('hello from header');
  return (
    <HeaderRNE
      containerStyle={styles.headerContainer}
      leftComponent={
        <Pressable onPress={menuNavigate}>
          <Icon
            name={headerLinks.menu.icon.name}
            type={headerLinks.menu.icon.type}
            size={30}
            color="white"
          />
        </Pressable>
      }
      rightComponent={
        <View style={styles.headerRight}>
          {props.noSettings ? (
            <Pressable onPress={() => props.navigation.goBack()}>
              <Icon name="back" color="white" type="antdesign" />
            </Pressable>
          ) : (
            <Pressable onPress={settingsNavigate}>
              <Icon name="settings" color="white" />
            </Pressable>
          )}
          {/* <Pressable style={{marginLeft: 10}} onPress={playgroundNavigate}>
            <Icon type="antdesign" name="rocket1" color="white" />
          </Pressable> */}
        </View>
      }
      centerComponent={{
        text: props.title || 'SolShorts',
        style: styles.heading,
      }}
    />
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexGrow: 0,
    flexShrink: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // height: 50,
    backgroundColor: '#34CF54',
    // marginBottom: 20,
    width: '100%',
    paddingVertical: 15,
  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
  },
  subheaderText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Header;
