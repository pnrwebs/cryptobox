/*  Calculating pixel ratio for height and width dimensions */
import {Dimensions,PixelRatio} from 'react-native';
const {width, height} = Dimensions.get('window');
export const widthToDP = widthPercent => {
  // Convert string input to decimal number
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel(width * elemWidth / 100);
};
export const heightToDP = heightPercent => {
  // Convert string input to decimal number
  const elemHeight = parseFloat(heightPercent);
return PixelRatio.roundToNearestPixel(height * elemHeight / 100);
};