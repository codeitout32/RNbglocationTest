import React, {useEffect, memo} from 'react';
import {Pressable, View, ScrollView, SafeAreaView} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Icon, Text} from 'react-native-elements';
import styles from './style';
import {useTheme} from '@react-navigation/native';

import SingleCategory from './SingleCategory';

const Categories: React.FC<any> = props => {
  const {categoriesList, fetchCategoriesStart, route} = props;

  useEffect(() => {
    fetchCategoriesStart();
  }, []);

  const catId = route.params?.catId;

  const {colors} = useTheme();
  return (
    <SafeAreaView style={[styles.container, {backgroundColor: 'black'}]}>
      <>
        <View style={styles.headerBar}>
          <Text
            h4
            style={{color: 'rgba(255,255, 255, 0.6)'}}
            h4Style={{fontWeight: '400'}}>
            Select Category
          </Text>
          <Pressable onPress={() => props.navigation.goBack()}>
            <Icon
              name="closecircleo"
              color={'rgba(255,255, 255, 0.6)'}
              type="antdesign"
              size={30}
            />
          </Pressable>
        </View>
        <ScrollView>
          <View style={styles.view}>
            <View style={styles.categoryContainer}>
              {(categoriesList?.rows || []).map((item: any) => (
                <SingleCategory
                  key={'category_' + item?.id}
                  item={item}
                  catId={catId}
                />
              ))}
              {/* {(categoriesList?.rows || []).map((item: any) => (
                <SingleCategory
                  key={'category_' + item?.id}
                  item={item}
                  catId={catId}
                />
              ))}
              {(categoriesList?.rows || []).map((item: any) => (
                <SingleCategory
                  key={'category_' + item?.id}
                  item={item}
                  catId={catId}
                />
              ))}
              {(categoriesList?.rows || []).map((item: any) => (
                <SingleCategory
                  key={'category_' + item?.id}
                  item={item}
                  catId={catId}
                />
              ))} */}
            </View>
          </View>
        </ScrollView>
      </>
    </SafeAreaView>
  );
};
export default memo(Categories);
