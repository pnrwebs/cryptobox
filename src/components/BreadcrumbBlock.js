import React from 'react';
import {StyleSheet, View, Text, Platform} from 'react-native';
import Colors from '../config/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const BreadcrumbBlock = props => {
  return (
    <View style={styles.breadcrumbContainer}>
      <View
        style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 10}}>
        <Text style={{color: Colors.fontColor1, fontFamily: 'Poppins-Regular'}}>
          {props.first}
        </Text>
        <Icon name="chevron-double-right" color={Colors.icons} size={18} />
        <Text style={{color: Colors.fontColor1, fontFamily: 'Poppins-Regular'}}>
          {props.second}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  breadcrumbContainer: {
    width: wp('98%'),
    height: hp('3.75%'),
    backgroundColor: 'rgba(0,0,0,0.74)',
    // alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,

    shadowColor: 'yellow',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 1 : 2,
    },
    shadowOpacity: Platform.OS === 'ios' ? 0.2 : 2,
    shadowRadius: 2,
    elevation: 0.4,
  },
});

export default BreadcrumbBlock;
