import {
  Image,
  Linking,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {Card} from 'react-native-elements';
import {useTheme} from '@react-navigation/native';
import {color} from 'react-native-reanimated';
import config from '../../res/config';
import {useDispatch, useSelector} from 'react-redux';
import {updateAdvertClickedStart} from '@next/common/slices/adverts.slice';
import {userIdSelector} from '@next/common/selectors';

const AdItem = ({item}) => {
  const userIdState = useSelector(userIdSelector);
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const openLink = () => {
    try {
      Linking.openURL(item.url).then(() =>
        dispatch(
          updateAdvertClickedStart({
            user_id: userIdState.device_id,
            advertise_id: item.id,
          }),
        ),
      );
    } catch (err) {
      console.log('failed linking', err);
    }
  };
  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Text style={{color: colors.text}}>AdItem</Text>
      <Pressable style={{flex: 1}} onPress={openLink}>
        <Image
          style={styles.image}
          source={{uri: config.imgUrl + item?.image}}
        />
      </Pressable>
    </View>
  );
};

export default AdItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexGrow: 0,
    // marginTop: StatusBar.currentHeight || 0,
    paddingHorizontal: 10,
  },
  image: {
    flex: 1,
    // width: '100%',
    resizeMode: 'contain',
    // height: 58,
  },
  shadowContainerStyle: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
  },
});
