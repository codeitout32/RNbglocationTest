import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import Header from '../../components/Header';
import CategoryList from '../../components/CategoryList';
import styles from './style';
import AppBar from '../../components/AppBar';
import {View} from 'react-native';
import {fetchAdvertStart} from '@next/common/slices/adverts.slice';
import {useDispatch, useSelector} from 'react-redux';
import {categoriesSelector} from '@next/common/selectors';
import {filter} from 'lodash';

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
    console.log('category id', catId, categoriesState);
  }, [catId, isReload]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdvertStart());
  }, []);

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

  const categoriesState = useSelector(categoriesSelector);
  const categorySelected = filter(categoriesState?.rows, {id: catId});
  return (
    <View style={styles.view}>
      <AppBar
        headerLinks={headerLinks}
        title={categorySelected[0]?.category_name}
      />
      <CategoryList />
    </View>
  );
};

export default CategoryNews;
