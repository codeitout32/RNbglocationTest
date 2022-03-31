import React, {useEffect, useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
// import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {MotiView} from 'moti';

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
    console.log('tap', 'state', isTouched);
    // setIsToched(state => !state);
  };
  const hendleScroll = () => {
    console.log('scrolled', 'state', isTouched);
    if (isTouched) setIsToched(false);
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
    handleTouched();
  });

  return (
    <GestureDetector gesture={tap}>
      <SafeAreaView style={styles.view} collapsable={false}>
        <MotiView
          from={{opacity: isTouched ? 0 : 1}}
          animate={{opacity: isTouched ? 1 : 0}}
          transition={{type: 'timing', duration: 60}}
          style={{zIndex: 100}}>
          <Header
            title={''}
            navigation={navigation}
            headerLinks={headerLinks}
            noSettings={false}
          />
        </MotiView>

        {/* <View style={styles.header} collapsable={false}>
          <Header
            title={''}
            navigation={navigation}
            headerLinks={headerLinks}
            noSettings={false}
          />
        </View> */}
        <MyList handleTouched={handleTouched} hendleScroll={hendleScroll} />
      </SafeAreaView>
    </GestureDetector>
  );
};

export default Home;
