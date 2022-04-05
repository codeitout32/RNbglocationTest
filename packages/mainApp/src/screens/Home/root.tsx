import React, {useEffect, memo} from 'react';
import {Button, Pressable, SafeAreaView, Text} from 'react-native';
import {useDispatch} from 'react-redux';

import AppBar from '../../components/AppBar';
import MyList from '../../components/MyList';
import styles from './style';

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

  const dispatch = useDispatch();

  const {catId, isReload} = route.params;

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

    dispatch(fetchAdvertStart());
    navigation.navigate('Home', {isReload: false});
  }, [catId, isReload]);

  const startad = () => {};

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
      <AppBar headerLinks={headerLinks} />
      <MyList headerLinks={headerLinks} />
    </SafeAreaView>
  );
};

export default memo(Home);
