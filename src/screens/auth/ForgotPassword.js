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
  processForgotPassword,
  setInitialStateNullForgot,
} from '../../store/actions';
import LoaderIndicator from '../../components/LoaderIndicator';
import Colors from '../../config/Colors';
import Styles from '../../css/Styles';
import Toast from 'react-native-simple-toast';
const ForgotPassword = props => {
  const {
    loading,
    submitData,
    status_success,
    status_message,
    set_initialStateNull,
  } = props;
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = () => {
    if (username != '' && email != '') {
      setUsernameError('');
      setEmailError('');

      submitData(email, username);
    } else {
      username == '' ? setUsernameError('Username is required') : null;
      email == '' ? setEmailError('Email is required') : null;
    }
  };

  useEffect(() => {
    if (status_success === true) {
      set_initialStateNull();
      setEmail('');
      setUsername('');
      Toast.show(status_message, Toast.LONG);
    } else if (status_success === false) {
      set_initialStateNull();
      Toast.show(status_message, Toast.LONG);
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
          <Text style={Styles.title1}>Forgot Password</Text>
          <View style={{marginTop: 40}}>
            <TextInput
              keyboardType="email-address"
              placeholder="Enter your email"
              style={Styles.inputBox}
              placeholderTextColor={Colors.inputPlaceholder}
              // right={<TextInput.Icon name="eye" />}
              onChangeText={value => setEmail(value)}
              value={email}
            />
            {emailError ? (
              <Text style={Styles.errorText}>{emailError}</Text>
            ) : null}
            <TextInput
              placeholder="Enter your username"
              style={Styles.inputBox}
              placeholderTextColor={Colors.inputPlaceholder}
              // right={<TextInput.Icon name="eye" />}
              onChangeText={value => setUsername(value)}
              value={username}
            />
            {usernameError ? (
              <Text style={Styles.errorText}>{usernameError}</Text>
            ) : null}
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
                SEND PASSWORD
              </Text>
            </Pressable>
          </View>
          <View style={{alignItems: 'center', marginBottom: 40}}>
            <Pressable onPress={() => props.navigation.navigate('Login')}>
              <Text style={{color: '#F2D097', fontSize: hp('2%')}}>
                Login Now
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
  set_initialStateNull: () => dispatch(setInitialStateNullForgot()),
  submitData: (email, username) =>
    dispatch(processForgotPassword(email, username)),
});

const mapStateToProps = state => {
  console.log('here is on forgot pass', state);
  return {
    loading: state.forgotpassword.loading,
    status_success: state.forgotpassword.success,
    status_message: state.forgotpassword.forgot_pass,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
