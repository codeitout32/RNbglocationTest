import React, {useState} from 'react';
import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import {FAB} from 'react-native-elements';
import ViewShot from 'react-native-view-shot';
import {useTheme} from '@react-navigation/native';

import ItemBody from './ItemBody';
import shareFunc from './shareFunc';

const ListItem = ({item, onPress, textColor, windowHeight}) => {
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
  return (
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
        <FAB
          visible={shareIconVisibility}
          icon={{name: 'share-android', color: 'white', type: 'octicon'}}
          color='gold'
          style={styles.fab}
          onPress={captureAndShareScreenshot}
        />
        <ItemBody item={item} />
      </View>
    </ViewShot>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: 20,
    top: '35%',
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
