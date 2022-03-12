import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Header from '../../components/Header';
import MyList from '../../components/MyList';
import styles from './style';

const Home: React.FC<any> = props => {
  const {navigation, route, fetchNewsStart} = props;
  const {catId} = route.params;
  useEffect(() => {
    fetchNewsStart({category_id: catId || ''});
    console.log('home', catId || '');
  }, [catId]);

  return (
    <SafeAreaProvider style={styles.view}>
      <Header title={''} navigation={navigation} />
      <MyList />
    </SafeAreaProvider>
  );
};

export default Home;
