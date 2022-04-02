import React, {useState} from 'react';
import {Image, StatusBar, StyleSheet, View} from 'react-native';
import {FAB} from 'react-native-elements';
import ViewShot from 'react-native-view-shot';
import {useTheme} from '@react-navigation/native';
import WebView from 'react-native-webview';

import {dimensions} from '../../res/dimensions';
import config from '../../res/config';

import ItemBody from './ItemBody';
import shareFunc from './shareFunc';

const {height, width} = dimensions.window;

const ListItem = ({item}) => {
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
  const videoUrl = item?.video?.replace('watch?v=', 'embed/');
  console.log(
    '\n\n\n>>>>>>>>>>>item:',
    item?.media_type,
    item?.video,
    item?.video?.split(' '),
    videoUrl,
    '\n\n\n',
  );

  return (
    <>
      <ViewShot ref={viewShot} options={{format: 'jpg', quality: 1}}>
        <View
          // onPress={onPress}
          style={[
            styles.item,
            {height: height, backgroundColor: colors.background,},
          ]}>
          {item?.media_type === 'image' ? (
            <Image
              style={[styles.img, {height: height / 2.5}]}
              source={{uri: config.imgUrl + item?.image}}
              {...imgProps}
            />
          ) : (
            <WebView
              // style={[{flex: 1, height: height / 2.5}]}
              source={{
                html: `<iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/5oH9Nr3bKfw"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media"
                    allowfullscreen></iframe>`,
              }}
              javaScriptEnabled={true}
              domStorageEnabled={true}
            />
          )}

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
