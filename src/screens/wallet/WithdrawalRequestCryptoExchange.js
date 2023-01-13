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
import {
  withdrawalRequestCryptoboxExchange,
  setInitialStateNullWallet,
} from '../../store/actions';
import {CUR_SYMB, POST_LOGIN_BG} from '../../config/Constants';
import LoaderIndicator from '../../components/LoaderIndicator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../config/Colors';
import Styles from '../../css/Styles';
import {ScrollView} from 'react-native-gesture-handler';
import BreadcrumbBlock from '../../components/BreadcrumbBlock';
import Toast from 'react-native-simple-toast';
import {currency, ucword} from '../../utils/UtilityFunctions';
const WithdrawalRequestCryptoExchange = props => {
  const {
    loading,
    submitData,
    status_success,
    status_message,
    withdrawalRequestMdtx_resp,
    _status,
    set_initialStateNull,
    walletbalance_resp,
  } = props;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [exchangeAccountNumber, setExchangeAccountNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [walletPassword, setWalletPassword] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [exchangeAccountNumberError, setExchangeAccountNumberError] =
    useState('');
  const [amountError, setAmountError] = useState('');
  const [walletPasswordError, setWalletPasswordError] = useState('');

  const handleSubmit = () => {
    if (
      name != '' &&
      email != '' &&
      phone != '' &&
      exchangeAccountNumber != '' &&
      amount != '' &&
      walletPassword != ''
    ) {
      setNameError('');
      setEmailError('');
      setPhoneError('');
      setExchangeAccountNumberError('');
      setAmountError('');
      setWalletPasswordError('');
      submitData(
        name,
        email,
        phone,
        exchangeAccountNumber,
        amount,
        walletPassword,
      );
    } else {
      name == '' ? setNameError('Name is required.') : null;
      email == '' ? setEmailError('Email is required.') : null;
      phone == '' ? setPhoneError('Phone number is required.') : null;
      exchangeAccountNumber == ''
        ? setExchangeAccountNumberError('Exchange account number is required.')
        : null;
      amount == '' ? setAmountError('Withdrawal amount is required.') : null;
      walletPassword == ''
        ? setWalletPasswordError('Wallet Password is required.')
        : null;
    }
  };
  useEffect(() => {
    if (status_success === true) {
      set_initialStateNull();
      setName('');
      setEmail('');
      setPhone('');
      setExchangeAccountNumber('');
      setAmount('');
      setWalletPassword('');
      props.navigation.navigate('StatusScreen', {
        msg: status_message,
      });
    } else if (status_success === false) {
      set_initialStateNull();
      Toast.show(status_message, Toast.LONG);
    }
  }, [status_success, withdrawalRequestMdtx_resp, status_message]);

  return loading ? (
    <LoaderIndicator />
  ) : (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <ImageBackground
        source={POST_LOGIN_BG}
        resizeMode="stretch"
        style={styles.image}>
        <View style={Styles.secondContainerView}>
          <BreadcrumbBlock
            first={'Wallet'}
            second={'Transfer to Cryptobox Exchange'}
          />
          <View style={{marginTop: 10, marginBottom: 10}}>
            {/* <Text style={{...Styles.title1, color: Colors.appHeaderTitleMain}}>
              Deposit funds to Investment Wallet (MDTX)
            </Text> */}
            <Text
              style={{
                ...Styles.inputBoxLabel,
                fontSize: 14,
                color: Colors.fontColor1,
              }}>
              <Text
                style={{
                  ...Styles.inputBoxLabel,
                  fontSize: 14,
                  color: Colors.appHeaderTitleMain,
                }}>
                Note:{' '}
              </Text>
              Minimum withdrawal amount is {CUR_SYMB}30
            </Text>
            <Text
              style={{
                ...Styles.inputBoxLabel,
                fontSize: 14,
                color: Colors.fontColor1,
              }}>
              <Text
                style={{
                  ...Styles.inputBoxLabel,
                  fontSize: 14,
                  color: Colors.appHeaderTitleMain,
                }}>
                Note:{' '}
              </Text>
              3% admin fee will be applied.
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              marginBottom: 10,
              borderWidth: 1,
              borderColor: '#191e3a',
              padding: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{...Styles.title1, color: Colors.appHeaderTitleMain}}>
              Income Wallet Balance: {CUR_SYMB}
              {walletbalance_resp?.income_wallet_balance}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: Colors.containerBg1,
              paddingHorizontal: 14,
              paddingVertical: 10,
            }}>
            <View>
              <Text style={Styles.inputBoxLabel}>Enter Name*</Text>
              <TextInput
                keyboardType="default"
                style={Styles.inputBox}
                mode="outlined"
                onChangeText={value => setName(value)}
                value={name}
              />
              {nameError ? (
                <Text style={Styles.errorText}>{nameError}</Text>
              ) : null}
            </View>
            <View>
              <Text style={Styles.inputBoxLabel}>Enter email*</Text>
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
              <Text style={Styles.inputBoxLabel}>Enter Phone Number*</Text>
              <TextInput
                keyboardType="phone-pad"
                style={Styles.inputBox}
                mode="outlined"
                onChangeText={value => setPhone(value)}
                value={phone}
              />
              {phoneError ? (
                <Text style={Styles.errorText}>{phoneError}</Text>
              ) : null}
            </View>
            <View>
              <Text style={Styles.inputBoxLabel}>
                Enter Exchange Account Number*
              </Text>
              <TextInput
                keyboardType="decimal-pad"
                style={Styles.inputBox}
                mode="outlined"
                onChangeText={value => setExchangeAccountNumber(value)}
                value={exchangeAccountNumber}
              />
              {exchangeAccountNumberError ? (
                <Text style={Styles.errorText}>
                  {exchangeAccountNumberError}
                </Text>
              ) : null}
            </View>
            <View>
              <Text style={Styles.inputBoxLabel}>
                Enter Amount to Transfer*
              </Text>
              <TextInput
                keyboardType="decimal-pad"
                style={Styles.inputBox}
                mode="outlined"
                onChangeText={value => setAmount(value)}
                value={amount}
              />
              {amountError ? (
                <Text style={Styles.errorText}>{amountError}</Text>
              ) : null}
            </View>

            <View>
              <Text style={Styles.inputBoxLabel}>Enter wallet password*</Text>
              <TextInput
                secureTextEntry={true}
                style={Styles.inputBox}
                mode="outlined"
                onChangeText={value => setWalletPassword(value)}
                value={walletPassword}
              />
              {walletPasswordError ? (
                <Text style={Styles.errorText}>{walletPasswordError}</Text>
              ) : null}
            </View>

            <Pressable onPress={() => handleSubmit()} style={Styles.ctaButton}>
              <Text style={Styles.ctaButtonText}>Make Request</Text>
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
  set_initialStateNull: () => dispatch(setInitialStateNullWallet()),
  submitData: (
    name,
    email,
    phone,
    exchangeAccountNumber,
    amount,
    walletPassword,
  ) =>
    dispatch(
      withdrawalRequestCryptoboxExchange(
        name,
        email,
        phone,
        exchangeAccountNumber,
        amount,
        walletPassword,
      ),
    ),
});

const mapStateToProps = state => {
  console.log('here is on withdrawalRequestMdtx', state);
  return {
    _status: state.wallet.status,
    loading: state.wallet.loading,
    status_success: state.wallet.success,
    status_message: state.wallet.message,
    withdrawalRequestMdtx_resp: state.wallet.withdrawalRequestMdtxresp,
    walletbalance_resp: state.wallet.incomeWB,
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WithdrawalRequestCryptoExchange);
