import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Pressable, useWindowDimensions} from 'react-native';
import colors from '@next/common/utils/theme';
import {Text, Icon} from 'react-native-elements';
import {formatDistance} from 'date-fns';
import {useTheme} from '@react-navigation/native';
import RenderHtml from 'react-native-render-html';
import {getStringFromHtml} from '../../util/htmlParser';

const ItemBody = ({item}) => {
  const placeholderDescription =
    'The Polish government passed a draft bill to create an 8 billion zloty ($1.75 billion) fund to help war refugees from Ukraine. The United Nations estimates more than 1.5 million people have fled Ukraine since Russia attacked its neighbour on Feb. 24. More than 1 million have crossed the border into Poland. Many thousands have been hosted across the country';
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <Text
        numberOfLines={3}
        h4
        h4Style={styles.h3}
        style={[{color: colors.title}]}>
        {item.title ||
          'Joe Biden to speak with leaders of France, Germany, Britain on Ukraine crisis'}
      </Text>
      {/* <Text style={{color: 'white'}}>
        {item.isRead ? 'Readed' : 'Unreaded'}
      </Text> */}
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
            {formatDistance(new Date(item.created_at), new Date(), {
              addSuffix: true,
            })}
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
          <Text style={styles.middleBarText}>{item.author}</Text>
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
      {/* <View>
        <Text style={{color: 'gray'}}>
          swipe left for more /{' '}
          {formatDistance(new Date(item.created_at), new Date(), {
            addSuffix: true,
          })}
        </Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    marginHorizontal: 20,
    marginTop: 20,
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
    fontSize: 18,
    lineHeight: 25,
  },
});

export default ItemBody;
