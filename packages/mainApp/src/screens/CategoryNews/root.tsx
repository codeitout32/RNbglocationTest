import React, {useEffect, useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Header from '../../components/Header';
import CategoryList from '../../components/CategoryList';
import styles from './style';

const CategoryNews: React.FC<any> = props => {
  const {navigation, route, fetchCategoryNewsStart} = props;
  const {catId, isReload} = route.params;
  useEffect(() => {
    fetchCategoryNewsStart({
      sort_type: 'DESC',
      order_by: 'created_at',
      category_id: catId,
    });
    navigation.navigate('CategoryNews', {catId, isReload: false});
  }, [catId, isReload]);

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
    <SafeAreaProvider style={styles.view}>
      <Header
        title={'News by category'}
        navigation={navigation}
        headerLinks={headerLinks}
        noSettings={false}
      />
      <CategoryList />
    </SafeAreaProvider>
  );
};

export default CategoryNews;
