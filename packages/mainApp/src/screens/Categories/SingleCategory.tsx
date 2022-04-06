import React, {useMemo, memo} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {useTheme, useNavigation} from '@react-navigation/native';

import config from '../../res/config';

import styles from './style';

interface ISinlgeCategory {
  item: any;
  catId: string | number;
}

const SingleCategory: React.FC<ISinlgeCategory> = props => {
  const {item, catId} = props;
  const navigation = useNavigation();

  const {colors} = useTheme();
  const isSelected = (itemId: any) => {
    return {
      item: {
        opacity: catId === itemId ? 1 : 0.7,
        borderColor: itemId === catId ? colors.border : colors.border,
        // width: itemId === catId ? 120 : 120,
        // height: itemId === catId ? 120 : 120,
        scale: 1.1,
        borderWidth: 2,
      },
    };
  };

  const onSelectStyle = useMemo(() => isSelected(item?.id), []);

  return (
    <Pressable
      onPress={() => {
        navigation.navigate('CategoryNews', {catId: item?.id});
      }}
      style={[styles.categoriesItem, onSelectStyle.item]}
      key={item?.id}>
      <Image
        source={{uri: config.imgUrl + item?.image}}
        style={[styles.categoryImg]}
      />
      <Text style={[styles.categoriesText]}>{item?.category_name}</Text>
    </Pressable>
  );
};

export default memo(SingleCategory);
