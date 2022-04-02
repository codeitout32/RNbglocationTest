import React, {useState} from 'react';
import {Image, StatusBar, StyleSheet, View} from 'react-native';
import {FAB} from 'react-native-elements';
import ViewShot from 'react-native-view-shot';
import {useTheme} from '@react-navigation/native';

import {dimensions} from '../../res/dimensions';
import config from '../../res/config';

import ItemBody from './ItemBody';
import shareFunc from './shareFunc';

const {height} = dimensions.window;

const ListItem = ({item, onPress}) => {
  const [shareIconVisibility, serShareIconVisibility] = useState(true);
  const imgProps = {
    resizeMode: 'cover',
  };

  const {colors} = useTheme();

  const viewShot = React.useRef();

  const captureAndShareScreenshot = () => {
    serShareIconVisibility(false);
    viewShot.current.capture().then((uri: any) => {
      shareFunc(uri);
    });
    serShareIconVisibility(true);
  };
  // console.log(item);

  return (
    <>
      <ViewShot ref={viewShot} options={{format: 'jpg', quality: 1}}>
        <View
          onPress={onPress}
          style={[
            styles.item,
            {height: height, backgroundColor: colors.background},
          ]}>
          <Image
            style={[styles.img, {height: height / 2.5}]}
            source={{uri: config.imgUrl + item?.image}}
            {...imgProps}
          />

          <ItemBody item={item} />
        </View>
      </ViewShot>
      <FAB
        visible={shareIconVisibility}
        icon={{name: 'share-android', color: 'white', type: 'octicon'}}
        color="gold"
        style={styles.fab}
        onPress={captureAndShareScreenshot}
      />
    </>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: 20,
    top: '37%',
  },
  img: {
    flex: 1.5,
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
    flex: 0,
  },
  title: {
    fontSize: 32,
  },
});

export default ListItem;
