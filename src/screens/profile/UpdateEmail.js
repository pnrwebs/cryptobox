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
  updateEmailAddress,
  setInitialStateNullProfile,
} from '../../store/actions';
import {CUR_SYMB, POST_LOGIN_BG} from '../../config/Constants';
import LoaderIndicator from '../../components/LoaderIndicator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../config/Colors';
import Styles from '../../css/Styles';
import {ScrollView} from 'react-native-gesture-handler';
import BreadcrumbBlock from '../../components/BreadcrumbBlock';
import Toast from 'react-native-simple-toast';
import {currency} from '../../utils/UtilityFunctions';

const UpdateEmail = props => {
  const {
    loading,
    submitData,
    status_success,
    status_message,
    user_data,
    set_initialStateNull,
  } = props;
  const [oldEmailId, setOldEmailId] = useState(user_data?.member_email);
  const [newEmailId, setNewEmailId] = useState('');
  const [walletPassword, setWalletPassword] = useState('');

  const [oldEmailError, setOldEmailError] = useState('');
  const [newEmailError, setNewEmailError] = useState('');
  const [walletPasswordError, setWalletPasswordError] = useState('');

  const handleSubmit = () => {
    if (oldEmailId != '' && newEmailId != '' && walletPassword != '') {
      setNewEmailError('');
      setWalletPasswordError('');
      submitData(oldEmailId, newEmailId, walletPassword);
    } else {
      oldEmailId == '' ? setOldEmailError('Old email is required.') : null;
      newEmailId == '' ? setNewEmailError('New email is required.') : null;
      walletPassword == ''
        ? setWalletPasswordError('Wallet password is required.')
        : null;
    }
  };

  useEffect(() => {
    if (status_success === true) {
      set_initialStateNull();
      setNewEmailId('');
      setWalletPassword('');
      props.navigation.navigate('UpdateEmailOtp', {
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
          <BreadcrumbBlock first={'Profile'} second={props.route.name} />

          <>
            <View
              style={{
                marginTop: 10,
                marginBottom: 10,
              }}>
              <Text
                style={{...Styles.title1, color: Colors.appHeaderTitleMain}}>
                Change Email
              </Text>
            </View>
            <View
              style={{
                backgroundColor: Colors.containerBg1,
                paddingHorizontal: 14,
                paddingVertical: 10,
              }}>
              <View>
                <Text style={Styles.inputBoxLabel}>Enter Old Email ID*</Text>
                <TextInput
                  keyboardType="email-address"
                  style={{...Styles.inputBox, backgroundColor: '#a2a2a2'}}
                  mode="outlined"
                  onChangeText={value => setOldEmailId(value)}
                  value={oldEmailId}
                  editable={false}
                />
                {oldEmailError ? (
                  <Text style={Styles.errorText}>{oldEmailError}</Text>
                ) : null}
              </View>
              <View>
                <Text style={Styles.inputBoxLabel}>Enter New Email ID*</Text>
                <TextInput
                  keyboardType="email-address"
                  style={Styles.inputBox}
                  mode="outlined"
                  onChangeText={value => setNewEmailId(value)}
                  value={newEmailId}
                />
                {newEmailError ? (
                  <Text style={Styles.errorText}>{newEmailError}</Text>
                ) : null}
              </View>
              <View>
                <Text style={Styles.inputBoxLabel}>Enter Wallet Password*</Text>
                <TextInput
                  style={Styles.inputBox}
                  mode="outlined"
                  secureTextEntry={true}
                  onChangeText={value => setWalletPassword(value)}
                  value={walletPassword}
                />
                {walletPasswordError ? (
                  <Text style={Styles.errorText}>{walletPasswordError}</Text>
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
  submitData: (oldEmailId, newEmailId, walletPassword) =>
    dispatch(updateEmailAddress(oldEmailId, newEmailId, walletPassword)),
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

export default connect(mapStateToProps, mapDispatchToProps)(UpdateEmail);
