/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useCallback, memo, useRef} from 'react';
import {Pressable, StyleSheet, ToastAndroid, View} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

import NoNews from '../../components/NoNews';
import ListItem from '../ListItem';

import {dimensions} from '../../res/dimensions';
import {updateNewsStateToRead} from '@next/common/slices/news.slice';
import LoadingNews from '../LoadingNews';
import pushAdsToNewsList from './utils/pushAdsToNewsList';

const {window} = dimensions;

interface IRenderItem {
  item: any;
  selectedId?: string;
  handleTouched: any;
  setSelectedId?: any;
}

const RenderItem: React.FC<IRenderItem> = memo(({item, handleTouched}) => {
  return (
    <ListItem
      item={item}
      // onPress={() => {
      //   setSelectedId(item.id);
      //   console.log('pressed');
      // }}
    />
  );
});

const MyList = props => {
  const {
    isLoading,
    isNewNewsLoading,
    newsList,
    toggleAppBarAction,
    setIsAppBarVisibleAction,
    updateNewsStateToRead,
    advertListStore,
  } = props;

  // const [selectedId, setSelectedId] = useState('');
  const [index, setIndex] = useState(0);

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

  const handleSnapToItem = useCallback(
    (idx: number) => {
      setIndex(idx);
      if (idx < index) {
        setIsAppBarVisibleAction(true);
      } else {
        setIsAppBarVisibleAction(false);
      }

      // if (idx + (1 % 5) && idx > index) {
      //   ToastAndroid.show(
      //     `${newsList?.res?.unreadNewsCount} unread shorts below`,
      //     ToastAndroid.SHORT,
      //   );
      // }
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

  const newsListRaw = newsList?.res?.rows;

  console.log('ads store', advertListStore);

  const finalNewsList =
    pushAdsToNewsList(newsListRaw, advertListStore?.rows) ?? [];

  console.log('finalNewsList', finalNewsList);

  // Add adds to news

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

  console.log(newsList?.res?.rows.length > 0);

  return (
    <SafeAreaView style={styles.container} collapsable={false}>
      {isLoading || isNewNewsLoading ? (
        <LoadingNews />
      ) : newsListRaw?.length > 0 ? (
        <Carousel
          data={finalNewsList || []}
          renderItem={({item}) => {
            return (
              <RenderItem
                item={item}
                handleTouched={toggleAppBarAction}
                // setSelectedId={setSelectedId}
              />
            );
          }}
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
