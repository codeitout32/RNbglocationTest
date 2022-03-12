import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const dimensions = {
  window: {
    width,
    height,
  },
  spacing: {
    half: 4,
    default: 8,
    double: 16,
  },
};
