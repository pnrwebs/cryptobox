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

import {connect} from 'react-redux';
import {set2FAAuth, setInitialStateNullProfile} from '../../store/actions';
import {CUR_SYMB, POST_LOGIN_BG} from '../../config/Constants';
import LoaderIndicator from '../../components/LoaderIndicator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../config/Colors';
import Styles from '../../css/Styles';
import {ScrollView} from 'react-native-gesture-handler';
import BreadcrumbBlock from '../../components/BreadcrumbBlock';
import Toast from 'react-native-simple-toast';
import {RadioButton} from 'react-native-paper';

const TwoFASetting = props => {
  const {
    loading,
    submitData,
    status_success,
    status_message,
    user_data,
    set_initialStateNull,
  } = props;

  const [checked, setChecked] = useState(user_data?.auth_type);
  const [checkedError, setCheckedError] = useState('');

  const handleSubmit = () => {
    if (checked) {
      submitData(checked);
    } else {
      checked == '' ? setCheckedError('Old email is required.') : null;
    }
  };

  useEffect(() => {
    if (status_success === true) {
      set_initialStateNull();
      Toast.show(status_message, Toast.LONG);
      // props.navigation.navigate('StatusScreen', {
      //   msg: status_message,
      // });
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
          <BreadcrumbBlock first={'Profile'} second={`2FA Setting`} />

          <>
            <View
              style={{
                marginTop: 10,
                marginBottom: 10,
              }}>
              <Text
                style={{...Styles.title1, color: Colors.appHeaderTitleMain}}>
                Activate Authentication Type
              </Text>
            </View>
            <View
              style={{
                backgroundColor: Colors.containerBg1,
                paddingHorizontal: 14,
                paddingVertical: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  // justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <RadioButton
                  value="google"
                  status={checked === 'google' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('google')}
                  uncheckedColor="#ffff"
                  color="#bf8606"
                />
                <Text style={{...Styles.inputBoxLabel, marginBottom: 0}}>
                  Google Authenticator (More Secure)
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  // justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <RadioButton
                  value="email"
                  status={checked === 'email' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('email')}
                  uncheckedColor="#ffff"
                  color="#bf8606"
                />
                <Text style={{...Styles.inputBoxLabel, marginBottom: 0}}>
                  OTP on email (More Secure)
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  // justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <RadioButton
                  value="none"
                  status={checked === 'none' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('none')}
                  uncheckedColor="#ffff"
                  color="#bf8606"
                />
                <Text style={{...Styles.inputBoxLabel, marginBottom: 0}}>
                  None (Not Secure)
                </Text>
              </View>
              <Pressable
                onPress={() => handleSubmit()}
                style={{...Styles.ctaButton, marginTop: 20}}>
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
  submitData: checked => dispatch(set2FAAuth(checked)),
});

const mapStateToProps = state => {
  console.log('here is on my my leverage', state);
  return {
    status: state.profile.status,
    loading: state.profile.loading,
    status_success: state.profile.success,
    status_message: state.profile.message,
    investmentWalBal: state.wallet.investmentWB,
    user_data: state.auth.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TwoFASetting);
