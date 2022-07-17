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
import {
  submitChangeLoginPassword,
  submitChangeWalletPassword,
  setInitialStateNullProfile,
} from '../../store/actions';
import {POST_LOGIN_BG} from '../../config/Constants';
import LoaderIndicator from '../../components/LoaderIndicator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../config/Colors';
import Styles from '../../css/Styles';
import {ScrollView} from 'react-native-gesture-handler';
import BreadcrumbBlock from '../../components/BreadcrumbBlock';
import Toast from 'react-native-simple-toast';
const ChangePasswords = props => {
  const {
    loading,
    submitLoginData,
    submitWalletData,
    status_success,
    status_message,
    set_initialStateNull,
  } = props;

  const [oldLoginPass, setOldLoginPass] = useState('');
  const [newLoginPass, setNewLoginPass] = useState('');
  const [newLoginConfPass, setNewLoginConfPass] = useState('');

  const [oldWalletPass, setOldWalletPass] = useState('');
  const [newWalletPass, setNewWalletPass] = useState('');
  const [newWalletConfPass, setNewWalletConfPass] = useState('');

  const [oldLoginPassError, setOldLoginPassError] = useState('');
  const [newLoginPassError, setNewLoginPassError] = useState('');
  const [newLoginConfPassError, setNewLoginConfPassError] = useState('');

  const [oldWalletPassError, setOldWalletPassError] = useState('');
  const [newWalletPassError, setNewWalletPassError] = useState('');
  const [newWalletConfPassError, setNewWalletConfPassError] = useState('');

  const handleLoginSubmit = () => {
    if (oldLoginPass != '' && newLoginPass != '' && newLoginConfPass != '') {
      submitLoginData(oldLoginPass, newLoginPass, newLoginConfPass);
    } else {
      oldLoginPass == ''
        ? setOldLoginPassError('Old login password is required.')
        : null;
      newLoginPass == ''
        ? setNewLoginPassError('New login password is required.')
        : null;
      newLoginConfPass == ''
        ? setNewLoginConfPassError('Confirm login password is required.')
        : null;
    }
  };
  const handleWalletSubmit = () => {
    if (oldWalletPass != '' && newWalletPass != '' && newWalletConfPass != '') {
      submitWalletData(oldWalletPass, newWalletPass, newWalletConfPass);
    } else {
      oldWalletPass == ''
        ? setOldWalletPassError('Old Wallet password is required.')
        : null;
      newWalletPass == ''
        ? setNewWalletPassError('New Wallet password is required.')
        : null;
      newWalletConfPass == ''
        ? setNewWalletConfPassError('Confirm Wallet password is required.')
        : null;
    }
  };

  useEffect(() => {
    if (status_success === true) {
      set_initialStateNull();
      setOldLoginPass('');
      setNewLoginPass('');
      setNewLoginConfPass('');
      setOldWalletPass('');
      setNewWalletPass('');
      setNewWalletConfPass('');
      props.navigation.navigate('StatusScreen', {
        msg: status_message,
      });
    } else if (status_success === false) {
      console.log('status_successstatus_successstatus_success', status_success);
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
          <BreadcrumbBlock first={'Profile'} second={props.route.name} />
          <View style={{marginTop: 10, marginBottom: 10}}>
            <Text style={{...Styles.title1, color: Colors.appHeaderTitleMain}}>
              Change Login Password
            </Text>
          </View>
          <View
            style={{
              backgroundColor: Colors.containerBg1,
              paddingHorizontal: 14,
              paddingVertical: 10,
            }}>
            <View>
              <Text style={Styles.inputBoxLabel}>Enter old password*</Text>
              <TextInput
                secureTextEntry={true}
                style={Styles.inputBox}
                mode="outlined"
                onChangeText={value => setOldLoginPass(value)}
                value={oldLoginPass}
              />
              {oldLoginPassError ? (
                <Text style={Styles.errorText}>{oldLoginPassError}</Text>
              ) : null}
            </View>
            <View>
              <Text style={Styles.inputBoxLabel}>Enter new password*</Text>
              <TextInput
                secureTextEntry={true}
                style={Styles.inputBox}
                mode="outlined"
                onChangeText={value => setNewLoginPass(value)}
                value={newLoginPass}
              />
              {newLoginPassError ? (
                <Text style={Styles.errorText}>{newLoginPassError}</Text>
              ) : null}
            </View>
            <View>
              <Text style={Styles.inputBoxLabel}>Enter confirm password</Text>
              <TextInput
                secureTextEntry={true}
                style={Styles.inputBox}
                mode="outlined"
                onChangeText={value => setNewLoginConfPass(value)}
                value={newLoginConfPass}
              />
              {newLoginConfPassError ? (
                <Text style={Styles.errorText}>{newLoginConfPassError}</Text>
              ) : null}
            </View>

            <Pressable
              onPress={() => handleLoginSubmit()}
              style={Styles.ctaButton}>
              <Text style={Styles.ctaButtonText}>Submit</Text>
            </Pressable>
          </View>
          <View style={{marginTop: 10, marginBottom: 10}}>
            <Text style={{...Styles.title1, color: Colors.appHeaderTitleMain}}>
              Change Wallet Password
            </Text>
          </View>
          <View
            style={{
              backgroundColor: Colors.containerBg1,
              paddingHorizontal: 14,
              paddingVertical: 10,
            }}>
            <View>
              <Text style={Styles.inputBoxLabel}>Enter old password*</Text>
              <TextInput
                secureTextEntry={true}
                style={Styles.inputBox}
                mode="outlined"
                onChangeText={value => setOldWalletPass(value)}
                value={oldWalletPass}
              />
              {oldWalletPassError ? (
                <Text style={Styles.errorText}>{oldWalletPassError}</Text>
              ) : null}
            </View>
            <View>
              <Text style={Styles.inputBoxLabel}>Enter new password*</Text>
              <TextInput
                secureTextEntry={true}
                style={Styles.inputBox}
                mode="outlined"
                onChangeText={value => setNewWalletPass(value)}
                value={newWalletPass}
              />
              {newWalletPassError ? (
                <Text style={Styles.errorText}>{newWalletPassError}</Text>
              ) : null}
            </View>
            <View>
              <Text style={Styles.inputBoxLabel}>Enter confirm password</Text>
              <TextInput
                secureTextEntry={true}
                style={Styles.inputBox}
                mode="outlined"
                onChangeText={value => setNewWalletConfPass(value)}
                value={newWalletConfPass}
              />
              {newWalletConfPassError ? (
                <Text style={Styles.errorText}>{newWalletConfPassError}</Text>
              ) : null}
            </View>

            <Pressable
              onPress={() => handleWalletSubmit()}
              style={Styles.ctaButton}>
              <Text style={Styles.ctaButtonText}>Submit</Text>
            </Pressable>
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
  submitLoginData: (oldLoginPass, newLoginPass, newLoginConfPass) =>
    dispatch(
      submitChangeLoginPassword(oldLoginPass, newLoginPass, newLoginConfPass),
    ),
  submitWalletData: (oldWalletPass, newWalletPass, newWalletConfPass) =>
    dispatch(
      submitChangeWalletPassword(
        oldWalletPass,
        newWalletPass,
        newWalletConfPass,
      ),
    ),
});

const mapStateToProps = state => {
  console.log('here is on my my ChangePasswords', state);
  return {
    status: state.profile.status,
    loading: state.profile.loading,
    status_success: state.profile.success,
    status_message: state.profile.message,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangePasswords);
