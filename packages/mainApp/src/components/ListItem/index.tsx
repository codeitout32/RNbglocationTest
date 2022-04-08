import React, {useEffect, useState, memo} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {FAB} from 'react-native-elements';
import ViewShot from 'react-native-view-shot';
import {useTheme} from '@react-navigation/native';
import YoutubePlayer from 'react-native-youtube-iframe';
import WebView from 'react-native-webview';

import {dimensions} from '../../res/dimensions';

import ItemBody from './ItemBody';
import shareFunc from './shareFunc';
import ViewShotFooter from './ViewShotFooter';
import AdItem from './AdItem';
import PlaceHolderImage from '../PlaceHolderMedia';
import {delay} from 'lodash';
// import WebView from 'react-native-webview';

const {height} = dimensions.window;

const ListItem = ({item}) => {
  const [isCapturing, setIsCapturing] = useState(false);
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

  console.log('Med', item?.media_type, item?.media_type === 'image');

  if (item?.title !== undefined) {
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
              <PlaceHolderImage
                style={[styles.img, {height: height / 2.5}]}
                mediaUrl={item?.image}
                placeholderStyle={{height: height / 2.5, width: '100%'}}
              />
            ) : (
              <YoutubePlayer
                height={245}
                webViewStyle={{width: '100%', height: '100%', opacity: 0.99}}
                play={true}
                videoId={item?.video}
                mute={true}
                webViewStyle={{
                  opacity: 0.99, // This is important otherwise the app will crash on categories change
                }}
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
          style={[
            styles.fab,
            {top: item?.media_type !== 'image' ? '26%' : '37%'},
            // {top: '37%'},
          ]}
          onPress={captureAndShareScreenshot}
        />
      </>
    );
  } else {
    return <AdItem item={item} />;
  }
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: 20,
    top: '37%',
  },
  img: {
    flex: 1.5,
    resizeMode: 'cover',
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
    borderRadius: 20,
  },
  title: {
    fontSize: 32,
    // transform:
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

export default memo(ListItem);

//<iframe width="853" height="480" src="https://www.youtube.com/embed/lqNpCH-xcGE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
{
  /* 
  <style> embed {
    height: `${height/2.5}`;
    width: "100%"
  }
  <embed src="https://www.youtube.com/embed/lqNpCH-xcGE"></embed>
 </style>
 <WebView
                style={{ width: "100%", height: "100%", opacity: 0.99}}
                // androidHardwareAccelerationDisabled={true}
                source={{uri: 'https://www.youtube.com/embed/-ZZPOXn6_9w'}}
              />


//
//
//
{
  /* <iframe
  width="853"
  height="480"
  src="https://www.youtube.com/embed/lqNpCH-xcGE"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen></iframe>; */
}
