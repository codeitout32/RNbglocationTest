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
      },
      imgContainer: {
        width: itemId === catId ? 110 : 100,
        height: itemId === catId ? 110 : 100,
      },
      img: {
        borderColor: itemId === catId ? '#FFFFFF' : colors.text,
        width: itemId === catId ? 110 : 100,
        height: itemId === catId ? 110 : 100,
        borderWidth: 2,
      },
      text: {
        color: itemId === catId ? '#00BAFF' : colors.text,
      },
    };
  };

  const {} = useMemo(() => isSelected(item?.id), []);

  return (
    <View style={[styles.categoriesItem, isSelected(item?.id)?.item]}>
      <Pressable
        onPress={() => {
          navigation.navigate('CategoryNews', {catId: item?.id});
        }}
        key={item?.id}
        style={[
          styles.categoryImgContainer,
          isSelected(item?.id)?.imgContainer,
        ]}>
        <Image
          source={{uri: config.imgUrl + item?.image}}
          style={[styles.categoryImg, isSelected(item?.id)?.img]}
        />
      </Pressable>
      <Text style={[styles.categoriesText, isSelected(item.id)?.text]}>
        {item?.category_name}
      </Text>
    </View>
  );
};

export default memo(SingleCategory);
