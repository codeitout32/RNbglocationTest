/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useCallback, memo, useRef} from 'react';
import {StyleSheet, ToastAndroid} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

import NoNews from '../../components/NoNews';
import ListItem from '../ListItem';

import {dimensions} from '../../res/dimensions';
import LoadingNews from '../LoadingNews';
import pushAdsToNewsList from './utils/pushAdsToNewsList';

const {window} = dimensions;

const MyList = props => {
  const {
    isLoading,
    isNewNewsLoading,
    newsList,
    setIsAppBarVisibleAction,
    updateNewsStateToRead,
    setShowTopIcon,
    goToTop,
    setGoToTop,
    advertListStore,
  } = props;

  const [index, setIndex] = useState(0);
  const snapRef = useRef<React.LegacyRef<any>>();

  useEffect(() => {
    if (newsList?.res?.newNewsCount > 0) {
      ToastAndroid.show(
        `${newsList?.res?.newNewsCount} new shorts`,
        ToastAndroid.SHORT,
      );
    }
    if (newsList?.res?.unreadNewsCount > 0) {
      ToastAndroid.show(
        `${newsList?.res?.unreadNewsCount} unread shorts below`,
        ToastAndroid.SHORT,
      );
    }
  }, [isLoading, isNewNewsLoading, newsList]);

  useEffect(() => {
    if (goToTop && snapRef.current) {
      snapRef.current?.snapToItem(0);
    }
  }, [goToTop]);

  const handleSnapToItem = useCallback(
    (idx: number) => {
      setIndex(idx);
      if (idx === 0) {
        setGoToTop(false);
      }

      if (idx > 0) {
        setShowTopIcon(true);
      } else {
        setShowTopIcon(false);
      }

      if (idx < index) {
        setIsAppBarVisibleAction(true);
      } else {
        setIsAppBarVisibleAction(false);
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
  console.log('length: ', newsList?.res?.rows);

  const newsListRaw = newsList?.res?.rows;

  const finalNewsList =
    pushAdsToNewsList(newsListRaw, advertListStore?.rows) ?? [];

  const keyExtractor = useCallback((item: any, idx: number) => {
    return 'news_' + item?.id + '_' + idx;
  }, []);

  const viewabilityConfig = {
    waitForInteraction: true,
    viewAreaCoveragePercentThreshold: 95,
  };

  const onViewableItemsChanged = useCallback(({viewableItems, changed}) => {
    const readNewsId: number | null = changed[0]?.item?.id ?? null;
    if (
      !changed[0]?.item?.isRead &&
      viewableItems[0]?.item?.id === readNewsId &&
      changed[0]?.isViewable
    ) {
      updateNewsStateToRead({readNewsId, isRead: true});
    }
  }, []);

  const viewabilityConfigCallbackPairs = useRef([
    {viewabilityConfig, onViewableItemsChanged},
  ]);

  return (
    <SafeAreaView style={styles.container} collapsable={false}>
      {isLoading && isNewNewsLoading ? (
        <LoadingNews />
      ) : newsListRaw?.length > 0 ? (
        <Carousel
          data={finalNewsList || []}
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
          getItemLayout={getItemLayout}
          viewabilityConfigCallbackPairs={
            viewabilityConfigCallbackPairs.current
          }
          alwaysBounceVertical
          
        />
      ) : (
        <NoNews />
      )}
    </SafeAreaView>
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
    marginTop: 30,
    paddingTop: 30,
  },
  carousel: {
    flex: 1,
    transform: [{scaleY: -1}],
  },
});

export default memo(MyList);
