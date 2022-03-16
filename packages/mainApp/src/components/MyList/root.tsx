import React, {useState, useEffect, useRef} from 'react';
import {
  FlatList,
  StyleSheet,
  Dimensions,
  View,
  ActivityIndicator,
} from 'react-native';
import ListItem from '../ListItem';

const HEIGHT = Dimensions.get('window').height;

const MyList = props => {
  const {
    isLoading,
    isNewNewsLoading,
    newsList,
    newNewsList,
    updateNewsStateToRead,
    isNewsUploaded,
    updateNewsAction,
  } = props;
  const [selectedId, setSelectedId] = useState(null);
  const [windowHeight, setWindowHeight] = useState(0);
  // const [news, setNews] = useState(newsList?.res?.rows);
  // const [appState, setAppState] = useState(false);

  useEffect(() => {

    // handleNews();
  }, [isLoading,isNewNewsLoading, newsList]);

  // useEffect(() => {
  //   if (appState) { 
  //     setNews(newsList?.res?.rows);
  //   }
  // }, [appState, newsList]);

  // const handleNews = () => {
  //   if (!!newsList?.res?.rows && !appState) {
  //     const {rows: newsRows} = newsList.res;
  //     const unreadNews = newsRows.filter((item: object) => !item.isRead);
  //     const readNews = newsRows.filter((item: object) => item.isRead);
  //     setNews([...unreadNews, ...readNews]);
  //     setAppState(true);
  //     console.log("called--news->",news);

  //     // updateNewsAction();
  //   }
  // };

  const onLayout = event => {
    const {x, y, height, width} = event.nativeEvent.layout;
    setWindowHeight(height);
  };

  const renderItem = ({item}) => {
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <ListItem
        item={item}
        onPress={() => setSelectedId(item.id)}
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
    if (!changed[0]?.item?.isRead &&  viewableItems[0]?.item?.id === readNewsId && changed[0]?.isViewable) {
      updateNewsStateToRead({readNewsId, isRead: true});
    }
  };

  const viewabilityConfigCallbackPairs = useRef([
    {viewabilityConfig, onViewableItemsChanged},
  ]);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator
          style={styles.indicatorMarginTop}
          size='large'
          color='#00ff00'
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
        />
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
});

export default MyList;
