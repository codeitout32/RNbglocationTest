import React from 'react';
import {
  Pressable,
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
import {useDispatch, useSelector} from 'react-redux';
import {fetchCategoriesStart} from '@next/common/slices/assets.slice';

import {categoriesSelector, newsListSelector} from '@next/common/selectors/';

const DATA = [
  {
    id: 6,
    title: 'All News',
  },
  {
    id: 1,
    title: 'Sports',
  },
  {
    id: 2,
    title: 'Crypto',
  },
  {
    id: 3,
    title: 'Moview',
  },
  {
    id: 4,
    title: 'Gaming',
  },
  {
    id: 5,
    title: 'Local',
  },
];

const Categories = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#1e1e1e' : '#e2e2e2',
  };
  const categoriesList = useSelector(categoriesSelector);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);
  return (
    <SafeAreaProvider style={{flex: 1}}>
      {/* <StatusBar backgroundColor="aquamarine" /> */}

      <Header title={'Categories'} />
      <View style={styles.view}>
        {(categoriesList?.rows || []).map(item => (
          <Pressable
            onPress={() => {
              console.log(item.id, item.title);
              navigation.navigate('Home', {catId: item.id});
            }}
            style={styles.categoriesItem}>
            <Text style={styles.categoriesText}>{item.category_name}</Text>
          </Pressable>
        ))}
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  categoriesItem: {
    width: '30%',
    height: 100,
    backgroundColor: '#00BAFF',
    margin: '1.5%',
    justifyContent: 'center',
  },
  categoriesText: {
    color: 'white',
    textAlign: 'center',
  },
  view: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
    // justifyContent: 'space-evenly',
    alignItems: 'baseline',
    // alignContent: 'space-around',
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

export default Categories;
