import React, {useEffect, useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Header from '../../components/Header';
import CategoryList from '../../components/CategoryList';
import styles from './style';
import AppBar from '../../components/AppBar';
import { View } from 'react-native';

const CategoryNews: React.FC<any> = props => {
  // const {navigation, route, fetchCategoryNewsStart} = props;
  // const {catId, isReload} = route.params;
  // useEffect(() => {
  //   fetchCategoryNewsStart({
  //     sort_type: 'DESC',
  //     order_by: 'created_at',
  //     category_id: catId === 0 ? '' : catId,
  //   });
  //   navigation.navigate('CategoryNews', {catId, isReload: false});
  // }, [catId, isReload]);

  // console.log('Categroy                News');

  // const headerLinks = {
  //   menu: {
  //     link: 'Category',
  //     params: {catId},
  //     icon: {name: 'category', type: 'material'},
  //     reloadIcon: {name: 'refresh', type: 'material'},
  //   },
  //   relaod: {
  //     link: 'CategoryNews',
  //     params: {catId, isReload},
  //   },
  // };

  return (
    <View >
      {/* <AppBar headerLinks={headerLinks} /> */}
      {/* <CategoryList /> */}
    </View>
  );
};

export default CategoryNews;
