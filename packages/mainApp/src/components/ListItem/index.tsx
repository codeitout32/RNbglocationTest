import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {FAB} from 'react-native-elements';
import ItemBody from './ItemBody';
import shareFunc from './shareFunc';

const HEIGHT = Dimensions.get('window').height;
let height1 = HEIGHT;
const ListItem = ({
  item,
  onPress,
  textColor,
  windowHeight,
}) => {
  const imgProps = {
    resizeMode: 'cover',
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.item, {height: windowHeight}]}>
      <Image
        style={[styles.img, {height: windowHeight / 2.5}]}
        source={{uri: 'https://picsum.photos/400/300'}}
        defaultSource={{uri: 'https://picsum.photos/400/300'}}
        {...imgProps}
        // containerStyle={styles.imgContainer}
        // PlaceholderContent={<ActivityIndicator />}
      />
      <FAB
        visible={true}
        icon={{name: 'share-android', color: 'white', type: 'octicon'}}
        color="gold"
        style={styles.fab}
        onPress={shareFunc}
      />
      <ItemBody item={item} />
      {/* <Text style={[styles.title, textColor]}>
        {item.title} Height: {windowHeight} {HEIGHT}
      </Text> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: 20,
    top: '35%',
  },
  img: {
    flex:1.5,
  },
  container: {
    flex: 1,
    flexGrow: 0,
    marginTop: StatusBar.currentHeight || 0,
  },
  contentContainer: {
    paddingVertical: 0,
  },
  item: {
    flex: 1,
  },
  title: {
    fontSize: 32,
  },
});

export default ListItem;
