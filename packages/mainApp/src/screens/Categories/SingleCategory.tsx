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
    if (itemId == catId)
      return {
        item: {
          opacity: 1,
          borderColor: 'rgba(255, 255, 255, 0.6)',
          // width: itemId === catId ? 120 : 120,
          // height: itemId === catId ? 120 : 120,
          scale: 1.2,
          borderWidth: 2,
        },
      };
    return {item: {}};
  };

  console.log('single category', {catId, id: item?.id});
  const onSelectStyle = isSelected(item?.id);

  return (
    <Pressable
      onPress={() => {
        navigation.navigate('CategoryNews', {catId: item?.id});
      }}
      style={[styles.categoriesItem, onSelectStyle.item]}>
      <Image
        source={{uri: config.imgUrl + item?.image}}
        style={[styles.categoryImg]}
      />
      <Text
        style={[
          styles.categoriesText,
          //  {color: colors.text}
        ]}>
        {item?.category_name}
      </Text>
    </Pressable>
  );
};

export default memo(SingleCategory);
