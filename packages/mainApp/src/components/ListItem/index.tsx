import React, {useEffect, useState} from 'react';
import {Image, StatusBar, StyleSheet, View} from 'react-native';
import {FAB} from 'react-native-elements';
import ViewShot from 'react-native-view-shot';
import {useTheme} from '@react-navigation/native';
import WebView from 'react-native-webview';
import YoutubePlayer from 'react-native-youtube-iframe';

import {dimensions} from '../../res/dimensions';
import config from '../../res/config';

import ItemBody from './ItemBody';
import shareFunc from './shareFunc';
import ViewShotFooter from './ViewShotFooter';
import AdItem from './AdItem';
import {delay} from 'lodash';

const {height, width} = dimensions.window;

const ListItem = ({item}) => {
  const [shareIconVisibility, serShareIconVisibility] = useState(true);
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
  const videoUrl = item?.video?.replace('watch?v=', 'embed/');
  console.log(
    '\n\n\n>>>>>>>>>>>item:',
    item?.media_type,
    item?.video,
    item?.video?.split(' '),
    videoUrl,
    '\n\n\n',
  );

  if (item?.title != undefined)
    return (
      <>
        <ViewShot ref={viewShot} options={{format: 'jpg', quality: 1}}>
          <View
            // onPress={onPress}
            style={[
              styles.item,
              {height: height, backgroundColor: colors.background},
            ]}>
            {item?.media_type === 'image' ? (
              <Image
                style={[styles.img, {height: height / 2.5}]}
                source={{uri: config.imgUrl + item?.image}}
                {...imgProps}
              />
            ) : (
              // <WebView
              //   // style={[{flex: 1, height: height / 2.5}]}
              //   source={{
              //     html: `<iframe
              //         width="100%"
              //         height="100%"
              //         src="https://www.youtube.com/embed/5oH9Nr3bKfw"
              //         title="YouTube video player"
              //         frameborder="0"
              //         allow="accelerometer; autoplay; clipboard-write; encrypted-media"
              //         allowfullscreen></iframe>`,
              //   }}
              //   javaScriptEnabled={true}
              //   domStorageEnabled={true}
              // />
              <YoutubePlayer
                height={240}
                play={true}
                videoId={item?.video}
                mute={true}
                webViewStyle={{marginTop: 20}}
              />
            )}

            <ItemBody item={item} />
            <View style={{display: isCapturing ? 'flex' : 'none'}}>
              <ViewShotFooter />
            </View>
          </View>
        </ViewShot>
        <FAB
          icon={{name: 'share-android', color: 'white', type: 'octicon'}}
          color="gold"
          style={[styles.fab, {top: item?.video ? '47%' : '37%'}]}
          onPress={captureAndShareScreenshot}
        />
      </>
    );
  else return <AdItem item={item} />;
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

// <WebView
//   // style={[{flex: 1, height: height / 2.5}]}
//   source={{
//     html: `<iframe
//         width="100%"
//         height="100%"
//         src="https://www.youtube.com/embed/5oH9Nr3bKfw"
//         title="YouTube video player"
//         frameborder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media"
//         allowfullscreen></iframe>`,
//   }}
//   javaScriptEnabled={true}
//   domStorageEnabled={true}
// />
