import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import {dimensions} from '../../res';
import {WebView} from 'react-native-webview';

const {height, width} = dimensions.window;

const MyWebView = ({url}) => {
  const [loading, setLoading] = useState(true);
  const hideSpinner = () => {
    setLoading(false);
  };
  const LoadingIndicator = () => {
    return (
      <ActivityIndicator
        style={{position: 'absolute', top: height / 2, left: width / 2}}
        size="large"
      />
    );
  };
  return (
    <View style={[styles.container, {height: height, width: width}]}>
      <WebView
        source={{uri: url}}
        onLoad={hideSpinner}
        renderLoading={LoadingIndicator}
      />
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
