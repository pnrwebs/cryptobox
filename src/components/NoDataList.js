import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import Colors from '../config/Colors';

import {widthToDP, heightToDP} from '../utils/pixelRatio';

const NoDataList = props => {
  console.log('im aprops', props);
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
      }}>
      <View
        style={{
          backgroundColor: Colors.appHeaderTitleMain,
          width: '100%',
          paddingVertical: 10,
          borderRadius: 5,
        }}>
        <Text
          style={{
            color: Colors.fontColor1,
            fontFamily: 'Poppins-Medium',
            textAlign: 'center',
            fontSize: 14,
          }}>
          {props.message}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#FC9D2E',
    borderRadius: 4,
    paddingVertical: 9,
    width: widthToDP('41.94'),
  },
  appButtonText: {
    //fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: '#fff',
    alignSelf: 'center',
  },
});

export default NoDataList;
