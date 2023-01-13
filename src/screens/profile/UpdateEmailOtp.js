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
  Image,
  Pressable,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import {verifyEmailOtp, setInitialStateNullProfile} from '../../store/actions';
import {CUR_SYMB, POST_LOGIN_BG} from '../../config/Constants';
import LoaderIndicator from '../../components/LoaderIndicator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../config/Colors';
import Styles from '../../css/Styles';
import {ScrollView} from 'react-native-gesture-handler';
import BreadcrumbBlock from '../../components/BreadcrumbBlock';
import Toast from 'react-native-simple-toast';
import {currency} from '../../utils/UtilityFunctions';

const UpdateEmailOtp = props => {
  const {
    loading,
    submitData,
    status_success,
    status_message,
    user_data,
    set_initialStateNull,
  } = props;
  const [oldEmailOtp, setOldEmailOtp] = useState('');
  const [newEmailOtp, setNewEmailOtp] = useState('');

  const [oldEmailOtpError, setOldEmailOtpError] = useState('');
  const [newEmailOtpError, setNewEmailOtpError] = useState('');

  const handleSubmit = () => {
    if (oldEmailOtp != '' && newEmailOtp != '') {
      setOldEmailOtpError('');
      setNewEmailOtpError('');
      submitData(oldEmailOtp, newEmailOtp);
    } else {
      oldEmailOtp == ''
        ? setOldEmailOtpError('Old email otp is required.')
        : null;
      newEmailOtp == ''
        ? setNewEmailOtpError('New email otp is required.')
        : null;
    }
  };

  useEffect(() => {
    if (status_success === true) {
      set_initialStateNull();
      setOldEmailOtp('');
      setNewEmailOtp('');
      props.navigation.navigate('StatusScreen', {
        msg: status_message,
      });
    } else if (status_success === false) {
      set_initialStateNull();
      Toast.show(status_message, Toast.LONG);
    }
  }, [status_success, status_message]);

  return loading ? (
    <LoaderIndicator />
  ) : (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <ImageBackground
        source={POST_LOGIN_BG}
        resizeMode="stretch"
        style={styles.image}>
        <View style={Styles.secondContainerView}>
          <BreadcrumbBlock first={'Update Email'} second={`OTP`} />

          <>
            <View
              style={{
                marginTop: 10,
                marginBottom: 10,
              }}>
              <Text
                style={{...Styles.title1, color: Colors.appHeaderTitleMain}}>
                Enter OTP
              </Text>
              <Text
                style={{
                  ...Styles.title1,
                  color: Colors.white,
                  fontSize: hp('2%'),
                }}>
                {props.route.params.msg}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: Colors.containerBg1,
                paddingHorizontal: 14,
                paddingVertical: 10,
              }}>
              <View>
                <Text style={Styles.inputBoxLabel}>Enter Old Email OTP*</Text>
                <TextInput
                  keyboardType="number-pad"
                  style={Styles.inputBox}
                  mode="outlined"
                  onChangeText={value => setOldEmailOtp(value)}
                  value={oldEmailOtp}
                />
                {oldEmailOtpError ? (
                  <Text style={Styles.errorText}>{oldEmailOtpError}</Text>
                ) : null}
              </View>
              <View>
                <Text style={Styles.inputBoxLabel}>Enter New Email OTP*</Text>
                <TextInput
                  keyboardType="number-pad"
                  style={Styles.inputBox}
                  mode="outlined"
                  onChangeText={value => setNewEmailOtp(value)}
                  value={newEmailOtp}
                />
                {newEmailOtpError ? (
                  <Text style={Styles.errorText}>{newEmailOtpError}</Text>
                ) : null}
              </View>

              <Pressable
                onPress={() => handleSubmit()}
                style={Styles.ctaButton}>
                <Text style={Styles.ctaButtonText}>Submit</Text>
              </Pressable>
            </View>
          </>
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
  set_initialStateNull: () => dispatch(setInitialStateNullProfile()),
  submitData: (oldEmailOtp, newEmailOtp) =>
    dispatch(verifyEmailOtp(oldEmailOtp, newEmailOtp)),
});

const mapStateToProps = state => {
  console.log('here is on my my email otp', state);
  return {
    status: state.profile.status,
    loading: state.profile.loading,
    status_success: state.profile.success,
    status_message: state.profile.message,
    investmentWalBal: state.wallet.investmentWB,
    user_data: state.auth.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateEmailOtp);
