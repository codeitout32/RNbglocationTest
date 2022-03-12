import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  View,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import colors from '@next/common/utils/theme';
import {Text, useTheme, Icon} from 'react-native-elements';
import {
  format,
  formatDistance,
  formatRelative,
  parse,
  parseISO,
  subDays,
} from 'date-fns';
// import Icon from 'react-native-vector-icons/Feather';

const ItemBody = ({item}) => {
  return (
    <View style={styles.container}>
      <Text h4 h4Style={styles.h3}>
        {item.title ||
          'Joe Biden to speak with leaders of France, Germany, Britain on Ukraine crisis'}
      </Text>
      <View style={styles.middleBar}>
        <Pressable style={styles.middleBarButton}>
          <Icon name="clock" color="darkgrey" type="feather" />
          <Text style={styles.middleBarText}>
            {format(parseISO(item.created_at), 'MMMM dd, yyyy')}
          </Text>
        </Pressable>

        <Pressable style={styles.middleBarButton}>
          <Icon name="open-outline" color="darkgrey" type="ionicon" />
          <Text style={styles.middleBarText}>{item.author}</Text>
        </Pressable>
      </View>
      <Text style={styles.text}>
        {item.description ||
          'The Polish government passed a draft bill to create an 8 billion zloty ($1.75 billion) fund to help war refugees from Ukraine. The United Nations estimates more than 1.5 million people have fled Ukraine since Russia attacked its neighbour on Feb. 24. More than 1 million have crossed the border into Poland. Many thousands have been hosted across the country'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  middleBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    // textAlignVertical: 'top',
    padding: 10,
  },
  middleBarButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  middleBarText: {
    flexDirection: 'row',
    color: colors.primary,
    fontSize: 20,
    marginHorizontal: 5,
    // alignItems: 'baseline',
    // textAlignVertical: 'center',
  },
  h3: {
    fontWeight: 'bold',
  },
  img: {
    width: '100%',
  },
  text: {
    fontSize: 20,
  },
  container: {
    flex: 2,
  },
  contentContainer: {
    paddingVertical: 0,
  },
  item: {
    // height: windowHeight,
    flex: 1,
    // padding: 20,
    // marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default ItemBody;
