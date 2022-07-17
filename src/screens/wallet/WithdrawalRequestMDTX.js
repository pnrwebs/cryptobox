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
  withdrawalRequestMDTX,
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
const WithdrawalRequestMDTX = props => {
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
  const [mdtxAddress, setMdtxAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [walletPassword, setWalletPassword] = useState('');

  const [mdtxAddressError, setMdtxAddressError] = useState('');
  const [amountError, setAmountError] = useState('');
  const [walletPasswordError, setWalletPasswordError] = useState('');

  const handleSubmit = () => {
    if (mdtxAddress != '' && amount != '' && walletPassword != '') {
      setMdtxAddressError('');
      setAmountError('');
      setWalletPasswordError('');
      submitData(mdtxAddress, amount, walletPassword);
    } else {
      mdtxAddress == ''
        ? setMdtxAddressError('Withdrawal address is required.')
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
      setMdtxAddress('');
      setAmount('');
      setWalletPassword('');
      props.navigation.navigate('WithdrawalFundStatus', {
        showData: withdrawalRequestMdtx_resp,
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
            second={'Withdrawal Request MDTX'}
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
              Maximum withdrawal amount is {CUR_SYMB}30
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
              Dear community members, please choose your withdrawal wallet
              properly before you proceed to next level. If you input any wrong
              wallet address, we cannot revert your withdrawal from blockchain
              and it will consider as permanently loss. Thank you.
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
              Available Wallet Balance: {CUR_SYMB}
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
              <Text style={Styles.inputBoxLabel}>
                Enter MDTX (BEP20) wallet address*
              </Text>
              <TextInput
                keyboardType="decimal-pad"
                style={Styles.inputBox}
                mode="outlined"
                onChangeText={value => setMdtxAddress(value)}
                value={mdtxAddress}
              />
              {mdtxAddressError ? (
                <Text style={Styles.errorText}>{mdtxAddressError}</Text>
              ) : null}
            </View>
            <View>
              <Text style={Styles.inputBoxLabel}>
                Enter amount to withdraw*
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
  submitData: (mdtxAddress, amount, walletPassword) =>
    dispatch(withdrawalRequestMDTX(mdtxAddress, amount, walletPassword)),
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
)(WithdrawalRequestMDTX);
