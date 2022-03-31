import React, {useState, useEffect, useRef} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import ListItem from '../ListItem';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';

const MyList = props => {
  const {
    isLoading,
    isNewNewsLoading,
    newsList,
    updateNewsStateToRead,
    navigation,
    handleTouched,
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
      <ListItem
        item={item}
        onPress={() => {
          setSelectedId(item.id);
          console.log('pressed');
        }}
        textColor={{color}}
        windowHeight={windowHeight}
      />
    );
  };

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
    <GestureDetector gesture={tap}>
      <View style={styles.container} collapsable={true}>
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
            onStartShouldSetResponder={e => true}
            onResponderReject={e => console.log('respondergrant', e)}
            onResponderRelease={e => console.log('responderrelease')}
            onScroll={e => console.log('pressed1')}
          />
        )}
      </View>
    </GestureDetector>
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
});

export default MyList;
