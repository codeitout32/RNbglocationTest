import React, {useEffect, useState} from 'react';
import {Pressable, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Icon, Text} from 'react-native-elements';
import Header from '../../components/Header';
import styles from './style';
import {useTheme} from '@react-navigation/native';
import {BlurView} from '@react-native-community/blur';
import {color} from 'react-native-elements/dist/helpers';

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
  const [rendered, setrendered] = useState(false);
  React.useEffect(() => {
    fetchCategoriesStart();
  }, []);

  const catId = route.params?.catId;

  const isSelected = (itemId: any) => ({
    color: itemId == catId ? '#00BAFF' : colors.text,
    borderColor: itemId == catId ? '#00BAFF' : colors.text,
  });

  const headerLinks = {
    menu: {
      link: 'Home',
      params: {catId},
      icon: {name: 'home', type: 'font-awesome'},
      reloadIcon: {name: '', type: ''},
    },
  };

  useEffect(() => {
    setrendered(false);
  }, []);

  const handleRendered = () => {
    setrendered(true);
  };

  const {colors} = useTheme();
  return (
    <SafeAreaProvider
      style={[styles.container, {backgroundColor: colors.background}]}>
      {/* <View
        style={[
          {
            height: '100%',
            width: '100%',
            backgroundColor: 'black',
            opacity: 0.7,
          },
          styles.absolute,
        ]}
      /> */}
      {/* <Header
        title={'Categories'}
        navigation={navigation}
        headerLinks={headerLinks}
        noSettings={false}
      /> */}

      <View style={styles.headerBar}>
        <Text h4 style={{color: colors.title}}>
          Categories
        </Text>
        <Pressable onPress={() => props.navigation.goBack()}>
          <Icon
            name="closecircleo"
            color={colors.text}
            type="antdesign"
            size={30}
          />
        </Pressable>
      </View>

      <View style={styles.view} onLayout={handleRendered}>
        <Pressable
          onPress={() => {
            navigation.navigate('CategoryNews', {catId: 0});
          }}
          key={0}
          style={[styles.categoriesItem, isSelected(0)]}>
          <Icon
            name={'book'}
            type={'font-awesome'}
            color={isSelected(0).color}
            size={40}
            tvParallaxProperties={undefined}
          />
          <Text style={[styles.categoriesText, isSelected(0)]}>All News</Text>
        </Pressable>
        {(categoriesList?.rows || []).map((item: any, index: number) => (
          <Pressable
            onPress={() => {
              navigation.navigate('CategoryNews', {catId: item.id});
            }}
            key={item.id}
            style={[styles.categoriesItem, isSelected(item.id)]}>
            <Icon
              name={icons[index].name}
              type={icons[index].type}
              color={isSelected(item.id).color}
              size={42}
              tvParallaxProperties={undefined}
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
