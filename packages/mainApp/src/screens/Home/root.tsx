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
    setIsToched(state => !state);
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

<<<<<<< HEAD

  return (
    <SafeAreaProvider style={styles.view}>
      <View style={styles.header} collapsable={false}>
        {isTouched && (
=======
  const tap = Gesture.Tap().onStart(() => {
    console.log('tap gesture');
    handleTouched();
  });

  return (
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
>>>>>>> 1deada7ffee9870f0783b806db167b3954a93962
          <Header
            title={''}
            navigation={navigation}
            headerLinks={headerLinks}
            noSettings={false}
          />
<<<<<<< HEAD
        )}
      </View>
      {/* <Header
        title={''}
        navigation={navigation}
        headerLinks={headerLinks}
        noSettings={false}
      /> */}

      <MyList handleTouched={handleTouched} />
    </SafeAreaProvider>
=======
        </View> */}
      <MyList handleTouched={handleTouched} hendleScroll={hendleScroll} />
    </SafeAreaView>
>>>>>>> 1deada7ffee9870f0783b806db167b3954a93962
  );
};

export default Home;
