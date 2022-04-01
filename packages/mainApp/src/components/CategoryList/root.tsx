import React, {useState, useEffect, useRef, useCallback} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import ListItem from '../ListItem';
import {useTheme} from '@react-navigation/native';

import {dimensions} from '../../res/dimensions';
import Carousel from 'react-native-snap-carousel';

const {window} = dimensions;

const CategoryList: React.FC<any> = props => {
  const {
    isLoading,
    categoryNewsList,
    updateNewsStateToRead,
    toggleAppBarAction,
    setIsAppBarVisibleAction,
  } = props;
  const [selectedId, setSelectedId] = useState(null);
  // const [windowHeight, setWindowHeight] = useState(0);

  const [index, setIndex] = useState(0);
  const {colors} = useTheme();
  useEffect(() => {}, [isLoading, categoryNewsList]);

  // const onLayout = event => {
  //   const {height} = event.nativeEvent.layout;
  //   setWindowHeight(height);
  // };

  const renderItem = ({item}) => {
    const color = item.id === selectedId ? 'white' : 'black';
    return (
      <Pressable onPress={toggleAppBarAction}>
        <ListItem
          item={item}
          onPress={() => {
            setSelectedId(item.id);
          }}
          textColor={{color}}
          windowHeight={window.height}
        />
      </Pressable>
    );
  };

  // const viewabilityConfig = {
  //   waitForInteraction: true,
  //   viewAreaCoveragePercentThreshold: 95,
  // };

  // const onViewableItemsChanged = ({viewableItems, changed}) => {
  //   const readNewsId: number | null = changed[0]?.item?.id ?? null;
  //   if (
  //     !changed[0]?.item?.isRead &&
  //     viewableItems[0]?.item?.id === readNewsId &&
  //     changed[0]?.isViewable
  //   ) {
  //     updateNewsStateToRead({readNewsId, isRead: true});
  //   }
  // };

  const handleSnapToItem = useCallback(
    (idx: number) => {
      setIndex(idx);
      if (idx < index) setIsAppBarVisibleAction(true);
      else setIsAppBarVisibleAction(false);
    },
    [index],
  );

  const getItemLayout = useCallback((data: any, idx: number) => {
    return {
      length: window.height,
      offset: window.height * idx,
      index: idx,
    };
  }, []);

  const keyExtractor = useCallback((item: any, idx: number) => {
    return 'news_' + item?.id + '_' + idx;
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator
          style={styles.indicatorMarginTop}
          size="large"
          color="#00ff00"
        />
      ) : categoryNewsList?.res?.rows.length > 0 ? (
        <Carousel
          data={categoryNewsList?.res?.rows || []}
          renderItem={renderItem}
          sliderHeight={300}
          itemHeight={window.height}
          vertical
          layout={'stack'}
          layoutCardOffset={8}
          activeAnimationType="timing"
          decelerationRate={8}
          onSnapToItem={handleSnapToItem}
          windowSize={5}
          maxToRenderPerBatch={3}
          keyExtractor={keyExtractor}
          getItemLayout={getItemLayout}
        />
      ) : (
        <View>
          <Text style={[styles.noNewsText, {color: `${colors.text}`}]}>
            We don't have news in this category
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingVertical: 0,
  },
  indicatorMarginTop: {
    marginTop: 20,
  },
  noNewsText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
});

export default CategoryList;
