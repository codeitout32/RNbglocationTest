import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Header from '../../components/Header';
import MyList from '../../components/MyList';
import Colors from '@next/common/utils/theme';
import {
  fetchNewsStart,
  fetchSingleNewsStart,
} from '@next/common/slices/news.slice';

const MyApp = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {catId} = route.params;

  React.useEffect(() => {
    dispatch(fetchNewsStart({category_id: catId || ''}));
    console.log('home', catId || '');
  }, [catId]);

  return (
    <SafeAreaProvider style={styles.view}>
      {/* <StatusBar backgroundColor="aquamarine" /> */}
      <Header title={''} navigation={navigation} />
      {/* <Text>Hello {Colors.primary}</Text> */}
      <MyList />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    // height: 100,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default MyApp;
