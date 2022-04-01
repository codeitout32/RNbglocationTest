import React, {useState, useEffect, useRef, memo} from 'react';
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

const {window} = dimensions;

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
      <Pressable
        onPress={handleTouched}
        // style={{flex: 1, transform: [{scaleY: -1}]}}
        >
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
    // updateNewsStateToRead,
    handleTouched,
    // hendleScroll,
  } = props;
  const [selectedId, setSelectedId] = useState('');
  const [windowHeight, setWindowHeight] = useState(0);

  console.log("newList", newsList)

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

  // const onLayout = event => {
  //   const {height} = event.nativeEvent.layout;
  //   setWindowHeight(height);
  // };

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

  // const viewabilityConfigCallbackPairs = useRef([
  //   {viewabilityConfig, onViewableItemsChanged},
  // ]);

  return (
    <SafeAreaView style={styles.container} collapsable={false}>
      {isLoading || isNewNewsLoading ? (
        <ActivityIndicator
          style={styles.indicatorMarginTop}
          size="large"
          color="#00ff00"
        />
      ) : (
        // <View style={styles.carousel}>
          <Carousel
            data={newsList?.res?.rows || [{}]}
            renderItem={({item}) => {
              return (
                <RenderItem
                  item={item}
                  handleTouched={handleTouched}
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
            activeAnimationType="spring"
            decelerationRate={8}
            // swipeThreshold={-20}
            // scrollEnabled={false}
            // lockScrollWhileSnapping
            // activeSlideOffset={0}
          />
        // </View>
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
    // flex: 1,
    // transform: [{scaleY: -1}],
  },
});

export default MyList;

{
  /* <FlatList
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
        /> */
}
