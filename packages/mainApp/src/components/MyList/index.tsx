import React, {useState, useEffect, useRef} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
} from 'react-native';
import ListItem from '../ListItem';
import {v4 as uuidv4} from 'uuid';
import {useSelector} from 'react-redux';

import {newsListSelector} from '@next/common/selectors/';

const HEIGHT = Dimensions.get('window').height;
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    img: 'https://picsum.photos/400/300',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    img: 'https://picsum.photos/400/300',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Third Item',
    img: 'https://picsum.photos/400/300',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    title: '4th Item',
    img: 'https://picsum.photos/400/300',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d76',
    title: '5th Item',
    img: 'https://picsum.photos/400/300',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d77',
    title: '6th Item',
    img: 'https://picsum.photos/400/300',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d78',
    title: '7th Item',
    img: 'https://picsum.photos/400/300',
  },
];

const MyList = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [windowHeight, setWindowHeight] = useState(0);
  const newsList = useSelector(newsListSelector);

  const onLayout = event => {
    const {x, y, height, width} = event.nativeEvent.layout;
    setWindowHeight(height);
  };
  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <ListItem
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
        windowHeight={windowHeight}
      />
    );
  };

  const SeparatorComponent = ({item}) => {
    return <View style={{height: HEIGHT * 0.2}} />;
  };
  // code for items view on change
  const [viewedItems, setViewedItems] = useState([]);
  const viewabilityConfig = {
    waitForInteraction: true,
    viewAreaCoveragePercentThreshold: 95,
  };

  const onViewableItemsChanged = ({viewableItems, changed}) => {
    console.log('items', viewableItems);
    console.log('changed', changed);
  };
  const viewabilityConfigCallbackPairs = useRef([
    {viewabilityConfig, onViewableItemsChanged},
  ]);

  useEffect(() => {
    console.log('newslist', newsList);
  }, [newsList]);
  return (
    <View style={styles.container}>
      <FlatList
        data={newsList.rows || []}
        decelerationRate={'fast'}
        onLayout={onLayout}
        // snapToAlignment={'start'}
        // snapToOffsets={DATA.map((x, i) => i * HEIGHT)}
        snapToStart={false}
        pagingEnabled
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        style={{flex: 1, backgroundColor: 'pink'}}
        // ItemSeparatorComponent={SeparatorComponent}
        // disableIntervalMomentum
        windowSize={10}
        // contentContainerStyle={styles.container}
        // viewabilityConfig={viewabilityConfig}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexGrow: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  contentContainer: {
    paddingVertical: 0,
  },
});

export default MyList;
