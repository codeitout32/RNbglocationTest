import {userIdSelector} from '@next/common/selectors';
import React, {useEffect, memo} from 'react';
import {useState} from 'react';
import {Button, Platform, Pressable, SafeAreaView, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import messaging from '@react-native-firebase/messaging';

import AppBar from '../../components/AppBar';
import MyList from '../../components/MyList';
import styles from './style';
import getUserToken from './utils/getUserToken';

const Home: React.FC<any> = props => {
  const {
    navigation,
    route,
    fetchNewsStart,
    fetchNewNewsStart,
    fetchAdvertStart,
    lastRefreshTime,
    allNews,
  } = props;

  const [fetchStart, setFetchStart] = useState(false);

  const dispatch = useDispatch();

  const {catId, isReload} = route?.params || {};

  useEffect(() => {
    allNews.length > 0
      ? fetchNewsStart({
          sort_type: 'DESC',
          order_by: 'created_at',
        })
      : fetchNewNewsStart({
          sort_type: 'DESC',
          order_by: 'created_at',
          last_refresh_time: lastRefreshTime,
        });

    setFetchStart(true);

    navigation.navigate('Home', {isReload: false});
  }, [catId, isReload]);

  useEffect(() => {
    dispatch(fetchAdvertStart());
  }, []);

  // user id register

  const userIdState = useSelector(userIdSelector);

  React.useEffect(() => {
    if (!userIdState?.id) {
      getUserToken(dispatch);
    }
  }, []);

  const headerLinks = {
    menu: {
      link: 'Category',
      params: {catId},
      icon: {name: 'category', type: 'material'},
      reloadIcon: {name: 'refresh', type: 'material'},
    },
    relaod: {
      link: 'Home',
      params: {catId, isReload},
    },
  };

  // const tap = Gesture.Tap().onStart(() => {
  //   console.log('tap gesture');
  //   handleTouched();
  // });

  console.log('hellor from home');

  return (
    <SafeAreaView style={styles.view} collapsable={false}>
      <AppBar headerLinks={headerLinks} title={'Latest News'} />
      <MyList headerLinks={headerLinks} fetchingStarted={fetchStart} />
    </SafeAreaView>
  );
};

export default memo(Home);
