import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Header from '../../components/Header';
import MyList from '../../components/MyList';
import styles from './style';

const Home: React.FC<any> = props => {
  const {
    navigation,
    route,
    fetchNewsStart,
    fetchNewNewsStart,
    lastRefreshTime,
    allNews,
  } = props;
  const [isTouched, setIsToched] = useState(false);
  const handleTouched = () => {
    setIsToched(state => !state);
  };
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

    navigation.navigate('Home', {isReload: false});
  }, [catId, isReload]);

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

  const tap = Gesture.Tap().onStart(() => {
    console.log('tap');
  });

  return (
    <SafeAreaProvider style={styles.view}>
      <Header
        title={''}
        navigation={navigation}
        headerLinks={headerLinks}
        noSettings={false}
      />

      <GestureDetector gesture={tap}>
        <View>
          <MyList handleTouched={handleTouched} />
        </View>
      </GestureDetector>
    </SafeAreaProvider>
  );
};

export default Home;
