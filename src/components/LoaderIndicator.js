import React from 'react';
import {View} from 'react-native';
import {
  //   BallIndicator,
  //   BarIndicator,
  //   DotIndicator,
  //   MaterialIndicator,
  //   PacmanIndicator,
  //   PulseIndicator,
  //   SkypeIndicator,
  UIActivityIndicator,
  //   WaveIndicator,
} from 'react-native-indicators';

import Colors from '../config/Colors';

const LoaderIndicator = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#FFF',
      }}>
      <UIActivityIndicator color={Colors.primaryBlue} />
    </View>
  );
};

export default LoaderIndicator;
