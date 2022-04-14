import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {Text} from 'react-native-elements';
import LogoText from './logo_text.svg';

import {useTheme} from '@react-navigation/native';
import gplayimg from '../../assets/playstore.png';

const ViewShotFooter = () => {
  const googleImg = Image.resolveAssetSource(gplayimg).uri;
  const {colors} = useTheme();
  return (
    <View style={styles.snapFooter}>
      <View style={styles.snapFooterItem}>
        <Image
          source={require('../../assets/appstore.png')}
          style={{height: 30, width: 80, resizeMode: 'contain'}}
          resizeMethod="scale"
        />
        <Image
          source={{uri: googleImg}}
          style={{height: 30, width: 80, resizeMode: 'contain'}}
        />
      </View>
      <View style={styles.snapFooterItem}>
        {/* <Image
          source={require('../../assets/logo.png')}
          style={{width: 40, height: 30, resizeMode: 'contain'}}
        />
        <Text h4 style={{color: colors.text}}>
          SolShorts
        </Text> */}
        <LogoText height={30} width={120} color="white" />
      </View>
    </View>
  );
};

export default ViewShotFooter;

const styles = StyleSheet.create({
  snapFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    paddingHorizontal: 10,
  },
  snapFooterItem: {
    flexDirection: 'row',
  },
});
