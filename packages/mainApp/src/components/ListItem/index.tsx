import React, {useEffect, useState} from 'react';
import {Image, StatusBar, StyleSheet, View} from 'react-native';
import {FAB, Text} from 'react-native-elements';
import ViewShot from 'react-native-view-shot';
import {useTheme} from '@react-navigation/native';
import {delay} from 'lodash';

import ItemBody from './ItemBody';
import shareFunc from './shareFunc';
import ViewShotFooter from './ViewShotFooter';

const ListItem = ({item, onPress, textColor, windowHeight}) => {
  const [isCapturing, setIsCapturing] = useState(false);
  const imgProps = {
    resizeMode: 'cover',
  };

  const {colors} = useTheme();

  const viewShot = React.useRef();

  const captureAndShareScreenshot = () => {
    setIsCapturing(true);
  };

  useEffect(() => {
    if (!isCapturing) return;
    console.log('starting shot share');
    const shotstart = viewShot.current
      .capture()
      .then((uri: any) => {
        shareFunc(uri);
      })
      .then(() => setIsCapturing(false));

    delay(() => shotstart, 300);
  }, [isCapturing]);

  return (
    <>
      <ViewShot ref={viewShot} options={{format: 'jpg', quality: 0.9}}>
        <View
          onPress={onPress}
          style={[
            styles.item,
            {height: windowHeight, backgroundColor: colors.background},
          ]}>
          <Image
            style={[styles.img, {height: windowHeight / 2.5}]}
            source={{uri: 'https://picsum.photos/400/300'}}
            defaultSource={{uri: 'https://picsum.photos/400/300'}}
            {...imgProps}
          />

          <ItemBody item={item} />
          <View style={{display: isCapturing ? 'flex' : 'none'}}>
            <ViewShotFooter />
          </View>
        </View>
      </ViewShot>
      <FAB
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
  snapFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    paddingHorizontal: 10,
  },
  snapFooterItem: {
    flexDirection: 'row',
  },
});

export default ListItem;
