import React, {useState, useEffect, useRef, useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import ListItem from '../ListItem';

import {dimensions} from '../../res/dimensions';
import Carousel from 'react-native-snap-carousel';
import NoNews from '../NoNews';
import LoadingNews from '../LoadingNews';

const {window} = dimensions;

const CategoryList: React.FC<any> = props => {
  const {
    isLoading,
    categoryNewsList,
    updateNewsStateToRead,
    setIsAppBarVisibleAction,
    setShowTopIcon,
    goToTop,
    setGoToTop,
    showUpArrow,
    isAppBarVisible,
  } = props;

  const snapRef = useRef<React.LegacyRef<any>>();

  const [index, setIndex] = useState(0);

  useEffect(() => {}, [isLoading, categoryNewsList]);

  useEffect(() => {
    if (goToTop && snapRef.current) {
      snapRef.current?.snapToItem(0);
    }
  }, [goToTop]);

  const viewabilityConfig = {
    waitForInteraction: true,
    viewAreaCoveragePercentThreshold: 95,
  };

  const onViewableItemsChanged = ({viewableItems, changed}) => {
    console.log({viewableItems});
    const readNewsId: number | null = changed[0]?.item?.id ?? null;
    if (
      !changed[0]?.item?.isRead &&
      viewableItems[0]?.item?.id === readNewsId &&
      changed[0]?.isViewable
    ) {
      updateNewsStateToRead({readNewsId, isRead: true});
    }
  };

  const viewabilityConfigCallbackPairs = useRef([
    {viewabilityConfig, onViewableItemsChanged},
  ]);

  const handleSnapToItem = useCallback(
    (idx: number) => {
      setIndex(idx);
      console.log(idx);
      if (idx === 0) {
        setGoToTop(false);
      }

      if (idx > 0) {
        if (!showUpArrow) setShowTopIcon(true);
      } else {
        if (showUpArrow) setShowTopIcon(false);
      }

      if (idx < index) {
        if (!isAppBarVisible) setIsAppBarVisibleAction(true);
      } else {
        if (isAppBarVisible) setIsAppBarVisibleAction(false);
      }
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
        <LoadingNews />
      ) : categoryNewsList?.res?.rows?.length > 0 ? (
        <Carousel
          data={categoryNewsList?.res?.rows || []}
          renderItem={({item}) => {
            return <ListItem item={item} />;
          }}
          ref={snapRef}
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
          viewabilityConfigCallbackPairs={
            viewabilityConfigCallbackPairs.current
          }
          getItemLayout={getItemLayout}
        />
      ) : (
        <NoNews forCategory />
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
