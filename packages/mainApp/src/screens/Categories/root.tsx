import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Header from '../../components/Header';
import styles from './style';

const Categories: React.FC<any> = props => {
  const {navigation, categoriesList, fetchCategoriesStart} = props;
  React.useEffect(() => {
    fetchCategoriesStart();
  }, []);
  return (
    <SafeAreaProvider style={styles.container}>
      <Header title={'Categories'} navigation={Categories} />
      <View style={styles.view}>
        {(categoriesList?.rows || []).map((item: any) => (
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
export default Categories;
