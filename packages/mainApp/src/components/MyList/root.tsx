import React, {useState, useEffect, useRef} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  ActivityIndicator,
  ToastAndroid,
  Pressable,
} from 'react-native';
import ListItem from '../ListItem';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

const MyList = props => {
  const {
    isLoading,
    isNewNewsLoading,
    newsList,
    updateNewsStateToRead,
    handleTouched,
    hendleScroll,
  } = props;
  const [selectedId, setSelectedId] = useState(null);
  const [windowHeight, setWindowHeight] = useState(0);

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

  const onLayout = event => {
    const {height} = event.nativeEvent.layout;
    setWindowHeight(height);
  };

  const renderItem = ({item}) => {
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
          windowHeight={windowHeight}
        />
      </Pressable>
    );
  };

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

  return (
    <SafeAreaView style={styles.container} collapsable={false}>
      {isLoading || isNewNewsLoading ? (
        <ActivityIndicator
          style={styles.indicatorMarginTop}
          size="large"
          color="#00ff00"
        />
      ) : (
        <FlatList
          data={newsList?.res?.rows || []}
          decelerationRate={'fast'}
          onLayout={onLayout}
          snapToStart={false}
          showsVerticalScrollIndicator={false}
          pagingEnabled
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
          style={{flex: 1}}
          windowSize={10}
          viewabilityConfigCallbackPairs={
            viewabilityConfigCallbackPairs.current
          }
          // onResponderReject={e => console.log('respondergrant', e)}
          // onResponderRelease={e => console.log('responderrelease')}
          onScroll={e => {
            if (e?.nativeEvent?.velocity?.y > 0 ?? false) hendleScroll();
          }}
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
    marginTop: 20,
    paddingTop: 20,
  },
});

export default MyList;
