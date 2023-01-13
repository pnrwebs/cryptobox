/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import {POST_LOGIN_BG, DATE_FORMAT} from '../../config/Constants';
import LoaderIndicator from '../../components/LoaderIndicator';
import Colors from '../../config/Colors';
import Styles from '../../css/Styles';
import {ScrollView} from 'react-native-gesture-handler';
import BreadcrumbBlock from '../../components/BreadcrumbBlock';
import LinearGradient from 'react-native-linear-gradient';
const WithdrawalFundUSDTStatus = props => {
  const {loading, user_data} = props;
  const [showDataDetails] = useState(props.route.params.showData);

  return loading ? (
    <LoaderIndicator />
  ) : (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <ImageBackground
        source={POST_LOGIN_BG}
        resizeMode="stretch"
        style={styles.image}>
        <View style={{...Styles.secondContainerView}}>
          <BreadcrumbBlock first={'Profile'} second={props.route.name} />
          <LinearGradient
            start={{x: 0.0, y: 0.25}}
            end={{x: 0, y: 1.0}}
            colors={['#bf8606', '#604303']}
            style={{
              position: 'relative',
              alignItems: 'center',
              height: hp('29%'),
            }}></LinearGradient>
          <View
            style={{
              backgroundColor: Colors.containerBg1,
              paddingHorizontal: 14,
              position: 'absolute',
              height: hp('50%'),
              width: wp('86%'),
              top: '30%',
              borderRadius: 8,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 24,
                color: '#d2ccb4',
                textAlign: 'center',
                marginTop: 20,
              }}>
              Withdrawal USDT Status
            </Text>

            <View style={{marginTop: 10}}>
              <Text
                style={{color: '#e8e7e1', fontSize: wp('4%'), marginTop: 20}}>
                Dear{' '}
                {user_data && user_data.member_username
                  ? user_data.member_username
                  : ''}
                ,
              </Text>
              <Text
                style={{
                  color: '#e8e7e1',
                  fontSize: wp('4%'),
                  marginTop: 20,
                }}>
                Your withdrawal request has been created with ID{' '}
                {showDataDetails.txn_id}.
              </Text>
              <Text
                style={{
                  color: '#e8e7e1',
                  fontSize: wp('4%'),
                  marginTop: 20,
                }}>
                {showDataDetails.message}
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  dividerLine: {
    borderColor: '#393838',
    borderWidth: 0.5,
    width: '100%',
    alignSelf: 'center',
  },
});

const mapStateToProps = state => {
  console.log('here udtx statuspassword', state);
  return {
    user_data: state.auth.user,
  };
};

export default connect(mapStateToProps, null)(WithdrawalFundUSDTStatus);
