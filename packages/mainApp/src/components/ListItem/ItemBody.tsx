import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Pressable, useWindowDimensions} from 'react-native';
import colors from '@next/common/utils/theme';
import {Text, Icon} from 'react-native-elements';
import {formatDistance} from 'date-fns';
import {useTheme} from '@react-navigation/native';
import RenderHtml from 'react-native-render-html';

const ItemBody = ({item}) => {
  const placeholderDescription =
    'The Polish government passed a draft bill to create an 8 billion zloty ($1.75 billion) fund to help war refugees from Ukraine. The United Nations estimates more than 1.5 million people have fled Ukraine since Russia attacked its neighbour on Feb. 24. More than 1 million have crossed the border into Poland. Many thousands have been hosted across the country';
  const {colors} = useTheme();

  const {width} = useWindowDimensions();
  const source = {
    html: `${item.description ?? placeholderDescription}`,
  };
  const htmlStyles = {
    body: {
      color: `${colors.text}`,
      textAlign: 'justify',
      fontSize: 16,
    },
  };
  return (
    <View style={styles.container}>
      <Text numberOfLines={3} style={[styles.h3, {color: colors.text}]}>
        {item.title ||
          'Joe Biden to speak with leaders of France, Germany, Britain on Ukraine crisis'}
      </Text>
      <Text style={{color: 'white'}}>
        {/* {item.isRead ? 'Readed' : 'Unreaded'} */}
      </Text>
      <View style={styles.middleBar}>
        <Pressable style={styles.middleBarButton}>
          <Icon
            name='clock'
            color='darkgrey'
            type='feather'
            tvParallaxProperties={undefined}
          />
          <Text style={styles.middleBarText}>
            {formatDistance(new Date(item.created_at), new Date(), {
              addSuffix: true,
            })}
          </Text>
        </Pressable>
        <Pressable style={[styles.middleBarButton, {paddingLeft: '15%'}]}>
          <Icon
            name='open-outline'
            color='darkgrey'
            type='ionicon'
            tvParallaxProperties={undefined}
          />
          <Text style={styles.middleBarText}>{item.author}</Text>
        </Pressable>
      </View>
      <View>
        <RenderHtml
          contentWidth={width}
          source={source}
          tagsStyles={htmlStyles}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    marginHorizontal: 20,
    marginTop: 50,
  },
  middleBar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'baseline',
    paddingVertical: 6,
  },
  middleBarButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  middleBarText: {
    flexDirection: 'row',
    color: '#34CF54',
    fontSize: 20,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  h3: {
    fontWeight: 'bold',
    fontSize: 20,
    textTransform: 'capitalize',
    textAlign: 'justify',
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
});

export default ItemBody;
