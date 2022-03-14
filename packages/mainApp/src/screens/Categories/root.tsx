import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Icon} from 'react-native-elements';

import Header from '../../components/Header';
import styles from './style';

const icons = [
  {name: 'compass', type: 'entypo'},
  {name: 'laptop', type: 'entypo'},
  {name: 'shopping-cart', type: 'entypo'},
  {name: 'tv', type: 'entypo'},
  {name: 'trophy', type: 'evilicon'},
  {name: 'headphones', type: 'feather'},
];

const Categories: React.FC<any> = props => {
  const {navigation, categoriesList, fetchCategoriesStart, route} = props;
  React.useEffect(() => {
    fetchCategoriesStart();
  }, []);

  const catId = route.params?.catId;

  const isSelected = (itemId: any) => ({
    color: itemId == catId ? '#00BAFF' : 'darkgrey',
    borderColor: itemId == catId ? '#00BAFF' : 'darkgrey',
  });
  return (
    <SafeAreaProvider style={styles.container}>
      <Header title={'Categories'} navigation={Categories} />
      <View style={styles.view}>
        {(categoriesList?.rows || []).map((item: any, index: number) => (
          <Pressable
            onPress={() => {
              console.log(item.id, item.title);
              navigation.navigate('Home', {catId: item.id});
            }}
            key={item.id}
            style={[styles.categoriesItem, isSelected(item.id)]}>
            <Icon
              name={icons[index].name}
              type={icons[index].type}
              color={isSelected(item.id).color}
              size={40}
            />
            <Text style={[styles.categoriesText, isSelected(item.id)]}>
              {item.category_name}
            </Text>
          </Pressable>
        ))}
      </View>
    </SafeAreaProvider>
  );
};
export default Categories;
