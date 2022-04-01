import React, {useState, useEffect, useCallback, memo, useRef} from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  ToastAndroid,
  Pressable,
  View,
} from 'react-native';
import ListItem from '../ListItem';

import {SafeAreaView} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

import {dimensions} from '../../res/dimensions';
import {updateNewsStateToRead} from '@next/common/slices/news.slice';

const {window} = dimensions;

const list = [
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
];
interface IRenderItem {
  item: any;
  selectedId: string;
  handleTouched: any;
  setSelectedId: any;
}

const RenderItem: React.FC<IRenderItem> = memo(
  ({item, selectedId, handleTouched, setSelectedId}) => {
    const color = item.id === selectedId ? 'white' : 'black';
    return (
      <Pressable onPress={handleTouched} style={{flex: 1}}>
        <ListItem
          item={item}
          onPress={() => {
            setSelectedId(item.id);
            console.log('pressed');
          }}
          textColor={{color}}
          windowHeight={window.height}
        />
      </Pressable>
    );
  },
);

const MyList = props => {
  const {
    isLoading,
    isNewNewsLoading,
    newsList,
    toggleAppBarAction,
    setIsAppBarVisibleAction,
  } = props;

  const [selectedId, setSelectedId] = useState('');
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
      if (idx < index) setIsAppBarVisibleAction(true);
      else setIsAppBarVisibleAction(false);
    },
    [index],
  );

  const getItemLayout = useCallback((data: any, idx: number) => {
    return {
      length: window.height,
      offset: window.height * index,
      index: idx,
    };
  }, []);

  const newsListRaw = newsList?.res?.rows;

  // const finalNewsList = pushAdsToNewsList(newsListRaw, adsList)

  //Add adds to news

  const viewabilityConfig = {
    waitForInteraction: true,
    viewAreaCoveragePercentThreshold: 95,
  };

  const onViewableItemsChanged = ({viewableItems, changed}) => {
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

  //animated functions
  const tap = Gesture.Tap().onStart(e => {
    console.log('tap1');
    handleTouched();
  });
  const keyExtractor = useCallback((item: any, idx: number) => {
    return 'news_' + item?.id + '_' + idx;
  }, []);

  return (
    <SafeAreaView style={styles.container} collapsable={false}>
      {isLoading || isNewNewsLoading ? (
        <ActivityIndicator
          style={styles.indicatorMarginTop}
          size="large"
          color="#00ff00"
        />
      ) : (
        <Carousel
          data={newsList?.res?.rows || list.reverse()}
          renderItem={({item}) => {
            return (
              <RenderItem
                item={item}
                handleTouched={toggleAppBarAction}
                selectedId={selectedId}
                setSelectedId={setSelectedId}
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
          // swipeThreshold={-20}
          // scrollEnabled={false}
          // lockScrollWhileSnapping
          // activeSlideOffset={0}
        />
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
