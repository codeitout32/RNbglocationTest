import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import Header from '../../components/Header';
import CategoryList from '../../components/CategoryList';
import styles from './style';
import AppBar from '../../components/AppBar';
import {View} from 'react-native';
import {fetchAdvertStart} from '@next/common/slices/adverts.slice';
import {useDispatch} from 'react-redux';

const CategoryNews: React.FC<any> = props => {
  const {navigation, route, fetchCategoryNewsStart} = props;
  const {catId, isReload} = route.params;
  useEffect(() => {
    fetchCategoryNewsStart({
      sort_type: 'DESC',
      order_by: 'created_at',
      category_id: catId === 0 ? '' : catId,
    });
    navigation.navigate('CategoryNews', {catId, isReload: false});
  }, [catId, isReload]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdvertStart());
  }, []);

  console.log('hello from category list');
  const headerLinks = {
    menu: {
      link: 'Category',
      params: {catId},
      icon: {name: 'category', type: 'material'},
      reloadIcon: {name: 'refresh', type: 'material'},
    },
    relaod: {
      link: 'CategoryNews',
      params: {catId, isReload},
    },
  };

  return (
    <View style={styles.view}>
      <AppBar headerLinks={headerLinks} title={'News By Category'} />
      <CategoryList />
    </View>
  );
};

export default CategoryNews;
