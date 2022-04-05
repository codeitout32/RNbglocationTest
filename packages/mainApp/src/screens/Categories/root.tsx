import React, {useEffect, memo} from 'react';
import {Pressable, View, ScrollView} from 'react-native';
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
    <SafeAreaProvider
      style={[styles.container, {backgroundColor: colors?.transparentBg}]}>
      <ScrollView>
        <View style={styles.headerBar}>
          <Text h4 style={{color: colors.text}}>
            Categories
          </Text>
          <Pressable onPress={() => props.navigation.goBack()}>
            <Icon
              name="closecircleo"
              color={colors.text}
              type="antdesign"
              size={30}
            />
          </Pressable>
        </View>

        <View style={styles.view}>
          <View style={styles.categoryContainer}>
            {(categoriesList?.rows || []).map((item: any) => (
              <SingleCategory
                key={'category_' + item?.id}
                item={item}
                catId={catId}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
};
export default memo(Categories);
