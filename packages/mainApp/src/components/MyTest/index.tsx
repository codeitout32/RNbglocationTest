import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Geolocation from 'react-native-geolocation-service';
import {
  check,
  checkMultiple,
  PERMISSIONS,
  requestMultiple,
  RESULTS,
} from 'react-native-permissions';
import getLocation from './getLocation';
import {State} from 'react-native-gesture-handler';
import {bgtask, bgtaskstop, initBackgroundFetch} from './bgtask';

const MyTest = () => {
  const [myLocation, setMyLocation] = React.useState([0]);

  const updateLocation = params => {
    setMyLocation(state => [...state, params?.coords?.latitude]);
  };
  useEffect(() => {
    checkMultiple([
      PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION,
    ]).then(result => {
      console.log('permission', result);
      if (
        result[PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION] !=
        RESULTS.GRANTED
      ) {
        requestMultiple([
          PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION,
          PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        ]).then(() => bgtask(updateLocation));
      } else {
        console.log('granted');
        bgtask(updateLocation);
      }
    });
    return bgtaskstop;
  }, []);

  useEffect(() => {
    console.log('state', myLocation);
  }, [myLocation]);

  return (
    <ScrollView style={{flex: 1}}>
      <Text>MyTest Location</Text>
      <Button
        onPress={() => getLocation(updateLocation)}
        title="tap for location"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />

      {myLocation.map((item, index) => (
        <Text key={item + index}>
          {index} &nbsp;{item}
        </Text>
      ))}
    </ScrollView>
  );
};

export default MyTest;

const styles = StyleSheet.create({});
