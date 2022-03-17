import {View} from 'react-native';
import React from 'react';
import styles from './style';
import {Card, Text, Icon} from 'react-native-elements';

import {useTheme} from '@react-navigation/native';
const MyCard = ({title, children}) => {
  const {colors} = useTheme();
  return (
    <Card
      wrapperStyle={styles.itemBar}
      containerStyle={{width: '90%', backgroundColor: colors.card}}>
      <Text h4 h4Style={[styles.h4Style, {color: colors.text}]}>
        {title}
      </Text>
      {children}
    </Card>
  );
};

export default MyCard;
