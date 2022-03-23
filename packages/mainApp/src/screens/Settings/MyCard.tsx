import {View} from 'react-native';
import React from 'react';
import styles from './style';
import {Card, Text, Icon} from 'react-native-elements';

import {useTheme} from '@react-navigation/native';
const MyCard = ({title, children, iconName, iconColor, iconType, onPress}) => {
  const {colors} = useTheme();
  return (
    <View style={styles.itemBar}>
      <View style={{flexDirection: 'row'}}>
        <Icon name={iconName} color={iconColor} type={iconType} />
        <Text
          style={[styles.title, {color: colors.settingText}]}
          onPress={onPress}>
          {title}
        </Text>
      </View>
      {children}
    </View>
  );
};

export default MyCard;
