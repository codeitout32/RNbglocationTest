import React, {useState, useEffect, useRef} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import ListItem from '../ListItem';
import {useTheme} from '@react-navigation/native';

const CategoryList: React.FC<any> = props => {
  const {isLoading, categoryNewsList, updateNewsStateToRead} = props;
  const [selectedId, setSelectedId] = useState(null);
  const [windowHeight, setWindowHeight] = useState(0);
  const {colors} = useTheme();
  useEffect(() => {}, [isLoading, categoryNewsList]);

  const onLayout = event => {
    const {height} = event.nativeEvent.layout;
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

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator
          style={styles.indicatorMarginTop}
          size='large'
          color='#00ff00'
        />
      ) : categoryNewsList?.res?.rows.length > 0 ? (
        <FlatList
          data={categoryNewsList?.res?.rows || []}
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
      ) : (
        <View>
          <Text style={[styles.noNewsText, {color: `${colors.text}`}]}>
            We don't have news in this category
          </Text>
        </View>
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
  noNewsText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
});

export default CategoryList;
