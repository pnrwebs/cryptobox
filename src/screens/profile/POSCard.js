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
  submitPosRequest,
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

const POSCard = props => {
  const {
    loading,
    submitData,
    status_success,
    status_message,
    user_data,
    set_initialStateNull,
    investmentWalBal,
  } = props;
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [walletPassword, setWalletPassword] = useState('');

  const [firstnameError, setFirstnameError] = useState('');
  const [lastnameError, setLastnameError] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [walletPasswordError, setWalletPasswordError] = useState('');

  const handleSubmit = () => {
    if (
      firstname != '' &&
      lastname != '' &&
      mobile != '' &&
      email != ' ' &&
      address != '' &&
      walletPassword != ''
    ) {
      setFirstnameError('');
      setLastnameError('');
      setMobileError('');
      setEmailError('');
      setAddressError('');
      setWalletPasswordError('');
      submitData(firstname, lastname, mobile, email, address, walletPassword);
    } else {
      firstname == '' ? setFirstnameError('First name is required.') : null;
      lastname == '' ? setLastnameError('Last name is required.') : null;
      mobile == '' ? setMobileError('Mobile is required.') : null;
      email == '' ? setEmailError('Email address is required.') : null;
      address == '' ? setAddressError('Address is required.') : null;
      walletPassword == ''
        ? setWalletPasswordError('Wallet password is required.')
        : null;
    }
  };

  useEffect(() => {
    if (status_success === true) {
      set_initialStateNull();
      setFirstname('');
      setLastname('');
      setMobile('');
      setEmail('');
      setAddress('');
      setWalletPassword('');
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
          <BreadcrumbBlock first={'Profile'} second={props.route.name} />
          {user_data && user_data.pos_card === '0' ? (
            <>
              <View
                style={{
                  marginTop: 10,
                  marginBottom: 10,
                }}>
                <Text
                  style={{...Styles.title1, color: Colors.appHeaderTitleMain}}>
                  Apply For POS Card
                </Text>
                <Text
                  style={{
                    ...Styles.title1,
                    color: Colors.appHeaderTitleMain,
                    fontSize: hp('2%'),
                  }}>
                  Investment Wallet Balance : {CUR_SYMB}
                  {investmentWalBal?.investment_wallet_balance}
                </Text>
                <Text
                  style={{
                    ...Styles.title1,
                    color: Colors.appHeaderTitleMain,
                    fontSize: hp('2%'),
                  }}>
                  Card Fee : 49 USD (Once Off)
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: Colors.containerBg1,
                  paddingHorizontal: 14,
                  paddingVertical: 10,
                }}>
                <View>
                  <Text style={Styles.inputBoxLabel}>First Name*</Text>
                  <TextInput
                    style={Styles.inputBox}
                    mode="outlined"
                    onChangeText={value => setFirstname(value)}
                    value={firstname}
                  />
                  {firstnameError ? (
                    <Text style={Styles.errorText}>{firstnameError}</Text>
                  ) : null}
                </View>
                <View>
                  <Text style={Styles.inputBoxLabel}>Last Name*</Text>
                  <TextInput
                    style={Styles.inputBox}
                    mode="outlined"
                    onChangeText={value => setLastname(value)}
                    value={lastname}
                  />
                  {lastnameError ? (
                    <Text style={Styles.errorText}>{lastnameError}</Text>
                  ) : null}
                </View>
                <View>
                  <Text style={Styles.inputBoxLabel}>Mobile*</Text>
                  <TextInput
                    keyboardType="number-pad"
                    style={Styles.inputBox}
                    mode="outlined"
                    onChangeText={value => setMobile(value)}
                    value={mobile}
                  />
                  {mobileError ? (
                    <Text style={Styles.errorText}>{mobileError}</Text>
                  ) : null}
                </View>
                <View>
                  <Text style={Styles.inputBoxLabel}>Email*</Text>
                  <TextInput
                    keyboardType="email-address"
                    style={Styles.inputBox}
                    mode="outlined"
                    onChangeText={value => setEmail(value)}
                    value={email}
                  />
                  {emailError ? (
                    <Text style={Styles.errorText}>{emailError}</Text>
                  ) : null}
                </View>
                <View>
                  <Text style={Styles.inputBoxLabel}>
                    Enter Complete Address*
                  </Text>
                  <TextInput
                    style={Styles.inputBoxMultiline}
                    mode="outlined"
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={value => setAddress(value)}
                    value={address}
                  />
                  {addressError ? (
                    <Text style={Styles.errorText}>{addressError}</Text>
                  ) : null}
                </View>
                <View>
                  <Text style={Styles.inputBoxLabel}>
                    Enter Wallet Password*
                  </Text>
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
                  <Text style={Styles.ctaButtonText}>Apply Now</Text>
                </Pressable>
              </View>
            </>
          ) : (
            <View style={{marginTop: 10, marginBottom: 10}}>
              <Text
                style={{...Styles.title1, color: Colors.appHeaderTitleMain}}>
                You have already applied for POS Card.
              </Text>
            </View>
          )}
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
  submitData: (firstname, lastname, mobile, email, address, walletPassword) =>
    dispatch(
      submitPosRequest(
        firstname,
        lastname,
        mobile,
        email,
        address,
        walletPassword,
      ),
    ),
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

export default connect(mapStateToProps, mapDispatchToProps)(POSCard);
