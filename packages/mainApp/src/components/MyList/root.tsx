/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useCallback, memo, useRef} from 'react';
import {StyleSheet, ToastAndroid} from 'react-native';
import Toast from 'react-native-root-toast';

import {SafeAreaView} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

import NoNews from '../NoNews';
import ListItem from '../ListItem';

import {dimensions} from '../../res/dimensions';
import LoadingNews from '../LoadingNews';
import pushAdsToNewsList from './utils/pushAdsToNewsList';

const {window} = dimensions;

const MyList = props => {
  const {
    isNewsLoading,
    isNewNewsLoading,
    newsList,
    setIsAppBarVisibleAction,
    updateNewsStateToRead,
    setShowTopIcon,
    goToTop,
    setGoToTop,
    advertListStore,
    isAppBarVisible,
    showUpArrow,
    newsReadCount,
    fetchingStarted,
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
    // if (newsList?.res?.unreadNewsCount > 0) {
    //   ToastAndroid.show(
    //     `${newsList?.res?.unreadNewsCount} unread shorts below`,
    //     ToastAndroid.SHORT,
    //   );
    // }
  }, [isNewsLoading, isNewNewsLoading, newsList]);

  useEffect(() => {
    if (goToTop && snapRef.current) {
      snapRef.current?.snapToItem(0);
    }
  }, [goToTop]);

  // console.log('length: ', newsList?.res?.rows);

  const newsListRaw = newsList?.res?.rows;

  const finalNewsList =
    pushAdsToNewsList(newsListRaw, advertListStore?.rows) ?? [];

  const keyExtractor = useCallback((item: any, idx: number) => {
    return 'news_' + item?.id + '_' + idx;
  }, []);

  const handleSnapToItem = useCallback(
    (idx: number) => {
      setIndex(idx);
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

      if (
        finalNewsList?.length > 0 &&
        finalNewsList[0].hasOwnProperty('isRead') &&
        !finalNewsList[0]?.isRead
      ) {
        const readNewsId = finalNewsList[0]?.id;
        updateNewsStateToRead({readNewsId, isRead: true});
      }

      if (
        idx > 0 &&
        finalNewsList?.length > idx &&
        finalNewsList[idx].hasOwnProperty('isRead') &&
        !finalNewsList[idx]?.isRead
      ) {
        const readNewsId = finalNewsList[idx]?.id;
        updateNewsStateToRead({readNewsId, isRead: true});
      }

      const {totalCount, leftToRead} = newsReadCount;

      if (idx % 5 === 0) {
        Toast.show(`${totalCount - leftToRead} unread shorts below`, {
          duration: Toast.durations.LONG,
          position: Toast.positions.BOTTOM,
          shadow: true,
          animation: true,
          hideOnPress: true,
        });
      }

      const readItem = finalNewsList[idx];
      if (!readItem?.isRead) {
        updateNewsStateToRead({readNewsId: readItem.id, isRead: true});
      }
    },
    [index, isAppBarVisible, showUpArrow, finalNewsList, newsReadCount],
  );

  const getItemLayout = useCallback((data: any, idx: number) => {
    return {
      length: window.height,
      offset: window.height * idx,
      index: idx,
    };
  }, []);

  return (
    <SafeAreaView style={styles.container} collapsable={false}>
      {isNewsLoading || isNewNewsLoading || !fetchingStarted ? (
        <LoadingNews />
      ) : newsListRaw?.length > 0 ? (
        <Carousel
          data={finalNewsList.reverse() || []}
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
          alwaysBounceVertical
          on
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
