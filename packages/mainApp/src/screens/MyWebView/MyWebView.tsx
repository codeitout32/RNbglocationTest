import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {dimensions} from '../../res';
import {WebView} from 'react-native-webview';

const {height, width} = dimensions.window;

const MyWebView = ({url}) => {
  return (
    <View style={[styles.container, {height: height, width: width}]}>
      <WebView source={{uri: 'https://reactnative.dev/'}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexGrow: 0,
    backgroundColor: 'blue',
  },
  contentContainer: {
    paddingVertical: 0,
  },
  item: {
    flex: 0,
    borderRadius: 20,
  },
  title: {
    fontSize: 32,
    // transform:
  },
});

export default MyWebView;
