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
  } = props;

  const [selectedId, setSelectedId] = useState(null);
  const [windowHeight, setWindowHeight] = useState(0);
  const [news, setNews] = useState([]);
  //   const [currentNews, setCurrentNews] = useState({
  //     id: null,
  //     isRead: false,
  //   } as any);

  useEffect(() => {
    handleNews();
  }, [isLoading, newsList]);

  const handleNews = () => {
    if (!!newsList?.res?.rows) {
      const unreadedNews = newsList?.res?.rows.filter(
        news => news.isRead === false,
      );
      const readedNews = newsList?.res?.rows.filter(
        news => news.isRead === true,
      );
      setNews([...unreadedNews, ...readedNews]);
    }
  };

  const onLayout = event => {
    const {x, y, height, width} = event.nativeEvent.layout;
    setWindowHeight(height);
  };

  const renderItem = ({item}) => {
    // const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <ListItem
        item={item}
        onPress={() => setSelectedId(item.id)}
        // backgroundColor={{backgroundColor}}
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
    console.log(viewableItems, changed);
    const readNewsId: number | null = changed[0]?.item?.id ?? null;
    // setCurrentNews(changed[0]?.item);
    // const isAvailable = newsList?.res?.rows.filter(
    //   item => item.id === readNewsId && changed[0]?.isViewable,
    // );
    // //
    if (viewableItems[0]?.item?.id === readNewsId && changed[0]?.isViewable) {
      console.log('if block');

      //   updateNewsStateToRead({readNewsId, isRead: true});
    } else {
      console.log('else block');
    }
  };

  const viewabilityConfigCallbackPairs = useRef([
    {viewabilityConfig, onViewableItemsChanged},
  ]);

  console.log('-->', news);
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
          data={news || []}
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
