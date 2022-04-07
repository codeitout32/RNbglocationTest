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
        width: itemId === catId ? 120 : 120,
        height: itemId === catId ? 120 : 120,
        borderWidth: 2,
      },
    };
  };

  const onSelectStyle = useMemo(() => isSelected(item?.id), []);
  console.log({catId, navigation});
  return (
    <View>
      <Pressable
        onPress={() => {
          return navigation.navigate('CategoryNews', {
            catId: item?.id,
            isReload: false,
          });
        }}
        style={[styles.categoriesItem, onSelectStyle.item]}>
        <Image
          source={{uri: config.imgUrl + item?.image}}
          style={[styles.categoryImg]}
        />
        <Text style={[styles.categoriesText]}>{item?.category_name}</Text>
      </Pressable>
    </View>
  );
};

export default memo(SingleCategory);
