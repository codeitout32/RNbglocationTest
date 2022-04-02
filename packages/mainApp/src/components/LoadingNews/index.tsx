import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import fonts from '../../res/fonts';
import {dimensions} from '../../res/dimensions';

const {window} = dimensions;

const LoadingNews = () => {
  return (
    <View style={styles.loadingContainer}>
      <Image
        source={require('../../assets/cloud_laoding.png')}
        style={styles.imageStyle}
      />
      <Icon
        name="chevron-triple-down"
        color="#36D910"
        size={42}
        style={styles.imageStyle}
      />
      <Image
        source={require('../../assets/mobile_loading.png')}
        style={styles.imageStyle}
      />
      <Text style={styles.loadingText}>Loading Shorts...</Text>
    </View>
  );
};

export default LoadingNews;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    height: window.height,
  },
  imageStyle: {
    marginTop: 20,
  },
  loadingText: {
    marginTop: 20,
    fontFamily: fonts.robotoRegular,
    fontSize: 24,
    textAlign: 'center',
  },
});
