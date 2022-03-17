import React, {useEffect} from 'react';
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
  const {catId} = route.params;
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
  }, [catId]);

  const headerLinks = {
    menu: {
      link: 'Category',
      params: {catId},
      icon: {name: 'category', type: 'material'},
    },
  };

  return (
    <SafeAreaProvider style={styles.view}>
      <Header title={''} navigation={navigation} headerLinks={headerLinks} noSettings={false} />
      <MyList />
    </SafeAreaProvider>
  );
};

export default Home;
