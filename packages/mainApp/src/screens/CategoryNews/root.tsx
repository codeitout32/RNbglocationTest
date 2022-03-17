import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Header from '../../components/Header';
import CategoryList from '../../components/CategoryList';
import styles from './style';

const CategoryNews: React.FC<any> = props => {
  const {navigation, route, fetchCategoryNewsStart} = props;
  const {catId} = route.params;
  useEffect(() => {
    fetchCategoryNewsStart({
      sort_type: 'DESC',
      order_by: 'created_at',
      category_id: catId,
    });
  }, [catId]);

  const headerLinks = {
    menu: {
      link: 'Category',
      params: {catId},
      icon: {name: 'category', type: 'material'},
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
