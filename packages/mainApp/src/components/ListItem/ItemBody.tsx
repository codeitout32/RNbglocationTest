import React from 'react';
import {StyleSheet, View, Pressable} from 'react-native';
import {Text, Icon} from 'react-native-elements';
import {formatDistance} from 'date-fns';
import {useTheme} from '@react-navigation/native';
import {getStringFromHtml} from '../../util/htmlParser';

import Fonts from '../../res/fonts';

const ItemBody = ({item}) => {
  const placeholderDescription =
    'The Polish government passed a draft bill to create an 8 billion zloty ($1.75 billion) fund to help war refugees from Ukraine. The United Nations estimates more than 1.5 million people have fled Ukraine since Russia attacked its neighbour on Feb. 24. More than 1 million have crossed the border into Poland. Many thousands have been hosted across the country';
  const {colors} = useTheme();

  const newsUploadTime = formatDistance(
    new Date(item?.created_at),
    new Date(),
    {
      addSuffix: true,
    },
  );

  return (
    <View style={{...styles.container}}>
      <Text
        numberOfLines={3}
        h4
        h4Style={styles.h3}
        style={[styles.newsTitle, {color: colors.title}]}>
        {item?.title ||
          'Joe Biden to speak with leaders of France, Germany, Britain on Ukraine crisis'}
      </Text>
      <View style={styles.middleBar}>
        <Pressable style={[styles.middleBarButton, {paddingRight: '5%'}]}>
          <Icon
            name="clock"
            color="darkgrey"
            type="feather"
            size={16}
            tvParallaxProperties={undefined}
          />
          <Text style={styles.middleBarText}>
            {newsUploadTime[0].toUpperCase() + newsUploadTime.slice(1)}
          </Text>
        </Pressable>
        <Pressable style={[styles.middleBarButton]}>
          <Icon
            name="open-outline"
            color="darkgrey"
            type="ionicon"
            size={16}
            tvParallaxProperties={undefined}
          />
          <Text style={styles.middleBarText}>{item?.author}</Text>
        </Pressable>
      </View>
      <View style={styles.description}>
        <Text
          numberOfLines={8}
          style={[styles.descriptionText, {color: colors.text}]}>
          {item.description
            ? getStringFromHtml(item.description)
            : placeholderDescription}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    marginHorizontal: 20,
    marginTop: 20,
  },
  newsTitle: {
    fontFamily: Fonts.robotoRegular,
  },
  middleBar: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'baseline',
    marginTop: 15,
  },
  middleBarButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  middleBarText: {
    flexDirection: 'row',
    color: '#34CF54',
    fontSize: 14,
    marginLeft: 10,
    fontFamily: Fonts.robotoLight,
  },
  h3: {
    fontSize: 24,
    textTransform: 'capitalize',
    fontWeight: '400',
  },
  img: {
    width: '100%',
  },
  text: {
    fontSize: 20,
  },
  contentContainer: {
    paddingVertical: 0,
  },
  item: {
    flex: 1,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  description: {
    marginTop: 15,
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 22,
    fontFamily: Fonts.robotoLight,
  },
});

export default ItemBody;
