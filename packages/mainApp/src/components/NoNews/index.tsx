import {StyleSheet, Image, Pressable} from 'react-native';
import React, {memo} from 'react';
import {useDispatch} from 'react-redux';
import {Text} from 'react-native-elements';
import {useTheme} from '@react-navigation/native';

import {appBarActions} from '@next/common/slices/appBar.slice';

import fonts from '../../res/fonts';
import {dimensions} from '../../res/dimensions';

const {window} = dimensions;

interface INoNews {
  forCategory?: boolean;
}

const NoNews: React.FC<INoNews> = ({forCategory = false}: INoNews) => {
  const {colors} = useTheme();
  const dispatch = useDispatch();

  console.log('category no news');

  const handleClick = () => {
    console.log('taped');
    dispatch(appBarActions.toggleAppBarAction());
  };

  return (
    <Pressable onPress={handleClick} style={styles.noNewsContainer}>
      <Image source={require('../../assets/no_news.png')} />

      <Text style={[styles.noNewsText, {color: colors?.text}]}>
        {!forCategory ? 'No news found' : 'No news found for selected category'}
      </Text>
    </Pressable>
  );
};

export default memo(NoNews);

const styles = StyleSheet.create({
  noNewsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    height: window.height,
  },
  noNewsText: {
    marginTop: 20,
    fontFamily: fonts.robotoRegular,
    fontSize: 24,
    textAlign: 'center',
  },
});
