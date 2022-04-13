import {Image, View, Text, StyleSheet} from 'react-native';
import React, {useState, useCallback, memo} from 'react';
import {Placeholder, PlaceholderMedia, ShineOverlay} from 'rn-placeholder';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import config from '../../res/config';

interface IPlaceHolderImage {
  style: any;
  placeholderStyle: any;
  mediaUrl: string;
}

const PlaceHolderImage: React.FC<IPlaceHolderImage> = props => {
  const {style, mediaUrl, placeholderStyle} = props;
  const [loadingState, setLoadingState] = useState({
    loading: true,
    error: false,
  });

  const handleLoading = useCallback(() => {
    setLoadingState({loading: false, error: false});
  }, []);

  const handleError = useCallback(() => {
    setLoadingState({loading: false, error: true});
  }, []);

  return (
    <>
      {loadingState.loading ? (
        <Placeholder
          Animation={ShineOverlay}
          // style={{position: 'absolute'}}
        >
          <PlaceholderMedia
            style={[
              placeholderStyle,
              {
                borderRadius: 0,
              },
            ]}
          />
        </Placeholder>
      ) : (
        <></>
      )}
      {!loadingState.error ? (
        <Image
          style={!loadingState.loading ? [style] : []}
          source={{uri: config.imgUrl + mediaUrl}}
          onLoad={handleLoading}
          onError={handleError}
        />
      ) : (
        <Image
          style={!loadingState.loading ? [style] : []}
          resizeMode="cover"
          resizeMethod="scale"
          source={require('../../assets/image_error.png')}
        />
      )}
    </>
  );
};

export default memo(PlaceHolderImage);

// #E6E6E6;

const styles = StyleSheet.create({
  errorContainer: {
    backgroundColor: ' #E6E6E6',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    marginTop: 10,
  },
});
