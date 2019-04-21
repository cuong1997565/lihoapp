// eslint-disable-next-line import/no-extraneous-dependencies
import { Dimensions, StyleSheet } from 'react-native';
import normalize from './Normalize';

const dimension = {
  // Font size
  miniFont: normalize(10),
  smallFont: normalize(12),
  mediumFont: normalize(13),
  largeFont: normalize(15),
  xlargeFont: normalize(17),
  // Size screen
  widthScreen: Dimensions.get('window').width,
  heightScreen: Dimensions.get('window').height,
  // Some size
  dividerSize_1: StyleSheet.hairlineWidth,
  dividerSize_2: 1.5,
  dividerSize_3: 2,
  dividerSize_4: 2.5,


};

export default dimension;
