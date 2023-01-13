/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  Pressable,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import {
  submitLoginOtpVerify,
  setInitialStateNullAuth,
} from '../../store/actions';
import LoaderIndicator from '../../components/LoaderIndicator';
import Colors from '../../config/Colors';
import Styles from '../../css/Styles';
import Toast from 'react-native-simple-toast';
const VerifyEmailOTP = props => {
  const {
    loading,
    submitData,
    status_success,
    status_message,
    set_initialStateNull,
  } = props;
  const [otp, setOtp] = useState('');

  const [otpError, setOtpError] = useState('');

  const handleSubmit = () => {
    if (otp != '') {
      setOtpError('');
      submitData(otp);
    } else {
      otp == '' ? setOtpError('OTP field cant be blank.') : null;
    }
  };

  useEffect(() => {
    if (status_success === true) {
      setOtp('');
      props.navigation.navigate('Dashboard');
      // Toast.show(status_message, Toast.LONG);
      set_initialStateNull();
    } else if (status_success === false) {
      Toast.show(status_message, Toast.LONG);
      set_initialStateNull();
    }
  }, [status_success, status_message]);

  return loading ? (
    <LoaderIndicator />
  ) : (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/img/without-login-screen-bg.png')}
        resizeMode="stretch"
        style={styles.image}>
        <View
          style={{
            height: wp('90%'),
            padding: 20,
          }}>
          <Text style={Styles.title1}>Verify account with otp</Text>
          <Text
            style={{
              color: '#F2D097',
              fontSize: hp('2%'),
              textAlign: 'center',
            }}>
            An otp has been sent on your registered email address.
          </Text>
          <View style={{marginTop: 40}}>
            <TextInput
              keyboardType="numeric"
              placeholder="Enter OTP"
              style={Styles.inputBox}
              placeholderTextColor={Colors.inputPlaceholder}
              // right={<TextInput.Icon name="eye" />}
              onChangeText={value => setOtp(value)}
              value={otp}
            />
            {otpError ? <Text style={Styles.errorText}>{otpError}</Text> : null}
            <Pressable
              onPress={() => handleSubmit()}
              style={{
                paddingVertical: hp('1.5%'),
                borderRadius: 5,
                borderWidth: 2,
                borderColor: Colors.primaryButtonBorder,
                backgroundColor: Colors.primaryButton,
                marginBottom: 30,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#fff',
                  textAlign: 'center',
                  fontFamily: 'Poppins-Regular',
                  fontSize: 16,
                }}>
                SUBMIT
              </Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});
const mapDispatchToProps = dispatch => ({
  set_initialStateNull: () => dispatch(setInitialStateNullAuth()),
  submitData: otp => dispatch(submitLoginOtpVerify(otp)),
});

const mapStateToProps = state => {
  console.log('here is on login otp verify', state);
  return {
    loading: state.auth.loading,
    status_success: state.auth.success,
    status_message: state.auth.message,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmailOTP);
