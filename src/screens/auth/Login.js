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
  Platform,
  Linking,
} from 'react-native';
import {connect} from 'react-redux';
import {
  initLogin,
  setInitialStateNullAuth,
  getAppVersion,
} from '../../store/actions/Auth';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LoaderIndicator from '../../components/LoaderIndicator';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DeviceInfo from 'react-native-device-info';
import Modal from 'react-native-modal';
import Colors from '../../config/Colors';
import Styles from '../../css/Styles';
import Toast from 'react-native-simple-toast';

const Login = props => {
  const {
    loading,
    get_AppVersion,
    status_success,
    authenticate,
    success,
    set_initialStateNull,
    appVersion,
    user,
  } = props;

  const [userid, setUserId] = useState('');
  const [password, setPassword] = useState('');
  // const [userid, setUserId] = useState('Kamlesh');
  // const [password, setPassword] = useState('Abcd@12345');
  const [auth, setAuth] = useState(false);
  const [useridError, setUseridError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showVersionUpdate, setShowVersionUpdate] = useState(false);

  const toggleModelUpdateCart = title => {
    setUpdateCart(!isUpdateCart);
  };

  const handleLogin = () => {
    if (userid != '' && password != '') {
      authenticate(userid, password);
    } else {
      userid == '' ? setUseridError('Please enter username') : null;
      password == '' ? setPasswordError('Please enter password') : null;
    }
  };

  useEffect(() => {
    console.log('success', success);
    if (status_success === true) {
      set_initialStateNull();
      if (user && user.auth_type == 'email') {
        props.navigation.navigate('VerifyEmailOTP');
      } else {
        props.navigation.navigate('Dashboard');
      }
      // props.navigation.navigate('Dashboard');
      // props.navigation.navigate('VerifyEmailOTP');
    } else if (status_success === false) {
      set_initialStateNull();
      Toast.show('Wrong username or password !!!', Toast.LONG);
    }
  }, [status_success]);

  const onUserIdChange = value => {
    // console.log(value);
    setUseridError('');
    setUserId(value);
  };

  const onPasswordChange = value => {
    setPasswordError('');
    setPassword(value);
  };

  useEffect(() => {
    get_AppVersion();
  }, []);

  useEffect(() => {
    let local_app_version = DeviceInfo.getVersion();
    let local_build_version = DeviceInfo.getBuildNumber();

    if (appVersion !== null) {
      if (Platform.OS === 'android') {
        let server_app_version = appVersion.android_version;

        if (local_app_version < server_app_version) {
          setShowVersionUpdate(true);
        }
      } else {
        let server_app_version = appVersion.ios_version;
      }
    }
  }, [appVersion]);

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
          <Text style={Styles.title1}>Trading Sign In</Text>
          <View style={{marginTop: 40}}>
            <TextInput
              placeholder="Username*"
              style={Styles.inputBox}
              placeholderTextColor={Colors.inputPlaceholder}
              onChangeText={value => onUserIdChange(value)}
              value={userid}
            />
            {useridError ? (
              <Text style={Styles.errorText}>{useridError}</Text>
            ) : null}
            <TextInput
              placeholder="Password*"
              style={Styles.inputBox}
              secureTextEntry={true}
              placeholderTextColor={Colors.inputPlaceholder}
              value={password}
              onChangeText={value => onPasswordChange(value)}
              // right={<TextInput.Icon name="eye" />}
            />
            {passwordError ? (
              <Text style={Styles.errorText}>{passwordError}</Text>
            ) : null}
            <Pressable
              onPress={() => handleLogin()}
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
                SIGN IN
              </Text>
            </Pressable>
          </View>
          <View style={{alignItems: 'center', marginBottom: 40}}>
            <Pressable
              onPress={() => props.navigation.navigate('ForgotPassword')}>
              <Text
                style={{
                  color: '#F2D097',
                  fontSize: hp('2%'),
                  fontFamily: 'Poppins-Regular',
                }}>
                Forgot Password?
              </Text>
            </Pressable>
          </View>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Text
              style={{
                color: '#F2D097',
                fontSize: hp('2%'),
                marginRight: 6,
                fontFamily: 'Poppins-Regular',
              }}>
              Don't have an account?
            </Text>
            <Pressable onPress={() => props.navigation.navigate('Register')}>
              <Text
                style={{
                  color: '#F2D097',
                  fontSize: hp('2%'),
                  fontFamily: 'Poppins-Regular',
                }}>
                Register here
              </Text>
            </Pressable>
          </View>
        </View>
        <Modal
          isVisible={showVersionUpdate}
          animationIn={'fadeIn'}
          animationOut={'fadeOut'}
          animationInTiming={300}
          animationOutTiming={300}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                marginHorizontal: 20,
                backgroundColor: Colors.containerBg1,
                borderWidth: 1,
                borderColor: Colors.textInputBorder,
                borderRadius: 5,
                padding: 15,
                // alignItems: 'flex-start',
                shadowColor: '#fff',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
                width: wp('90%'),
                height: hp('30%'),
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: 16,
                  color: Colors.inputTextLabel,
                  marginBottom: 5,
                  fontSize: 20,
                  textAlign: 'center',
                  color: 'red',
                }}>
                Alert!
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: 16,
                  color: Colors.inputTextLabel,
                  marginBottom: 5,
                  fontSize: 18,
                  textAlign: 'center',
                }}>
                Cryptobox has a new update, please visit app store and update
                your app.
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  marginTop: 20,
                }}>
                <Pressable
                  onPress={() =>
                    Linking.openURL('market://details?id=com.cryptobox').catch(
                      err => console.error('Error', err),
                    )
                  }
                  style={{
                    ...Styles.ctaButton,
                    paddingVertical: 8,
                    paddingHorizontal: 30,
                    alignSelf: 'center',
                    marginLeft: 20,
                  }}>
                  <Text style={Styles.ctaButtonText}>Update</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
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
  get_AppVersion: () => dispatch(getAppVersion()),
  set_initialStateNull: () => dispatch(setInitialStateNullAuth()),
  authenticate: (userid, password) => dispatch(initLogin(userid, password)),
  // getDetails: () => dispatch(getUserDetail()),
});

const mapStateToProps = state => {
  console.log('here is login state', state.auth);
  return {
    status: state.auth.status,
    user: state.auth.user,
    loading: state.auth.loading,
    status_success: state.auth.success,
    status_message: state.auth.error,
    appVersion: state.auth.app_version,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
