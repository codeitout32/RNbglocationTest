import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import MyWebView from '../screens/MyWebView/MyWebView';

const HomeTabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeTab" component={Home} />
      <Tab.Screen name="WebTab" component={MyWebView} />
    </Tab.Navigator>
  );
};

export default HomeTabs;

const styles = StyleSheet.create({});
