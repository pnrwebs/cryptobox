import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Colors from '../config/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CountDown from 'react-native-countdown-component';
import {DATE_TIME_FORMAT} from '../config/Constants';
import moment from 'moment';

const BreadcrumbBlockDashboard = props => {
  console.log('on breadcrumb', props);
  return (
    <View style={{...styles.breadcrumbContainer, flexDirection: 'row'}}>
      <Text
        style={{
          color: Colors.appHeaderTitleMain,
          fontFamily: 'Poppins-Regular',
        }}>
        Current Server Date/Time :{' '}
      </Text>
      <Text
        style={{
          color: Colors.fontColor1,
          fontFamily: 'Poppins-Regular',
        }}>
        {moment(props.servertime).format(DATE_TIME_FORMAT)}
      </Text>

      {/* <CountDown
      size={13}
      until={86400}
      onFinish={() => alert('Finished')}
      digitStyle={{
        backgroundColor: 'transparent',
      }}
      digitTxtStyle={{color: Colors.fontColor1}}
      timeLabelStyle={{color: Colors.fontColor1, fontWeight: 'bold'}}
      separatorStyle={{color: Colors.fontColor1}}
      timeToShow={['H', 'M', 'S']}
      timeLabels={{m: null, s: null}}
      showSeparator
    /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  breadcrumbContainer: {
    width: '100%',
    height: hp('3.75%'),
    backgroundColor: 'rgba(0,0,0,0.74)',
    alignItems: 'center',
    justifyContent: 'center',
    // borderRadius: 3,
    shadowColor: 'yellow',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 5,
    shadowRadius: 2.22,
    elevation: 2,
  },
  appButtonText: {
    ////fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: '#fff',
    alignSelf: 'center',
  },
});

export default BreadcrumbBlockDashboard;
