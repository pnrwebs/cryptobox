/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState, useLayoutEffect} from 'react';
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
  transferFundsToOther,
  setInitialStateNullWallet,
} from '../../store/actions';
import {CUR_SYMB, POST_LOGIN_BG} from '../../config/Constants';
import LoaderIndicator from '../../components/LoaderIndicator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/Fontisto';
import Colors from '../../config/Colors';
import Styles from '../../css/Styles';
import {ScrollView} from 'react-native-gesture-handler';
import BreadcrumbBlock from '../../components/BreadcrumbBlock';
import Toast from 'react-native-simple-toast';
import ValidateOTPModal from '../../components/ValidateOTPModal';
const TrasnferFundToOther = props => {
  const {
    loading,
    submitData,
    status_success,
    status_message,
    transfer_resp,
    dash_data,
    set_initialStateNull,
  } = props;
  const [modalStatus, setModalStatus] = useState(false);
  const [amount, setAmount] = useState('');
  const [receiverId, setReceiverId] = useState('');
  const [walletPassword, setWalletPassword] = useState('');

  const [amountError, setAmountError] = useState('');
  const [receiverIdError, setReceiverIdError] = useState('');
  const [walletPasswordError, setWalletPasswordError] = useState('');
  const [isEditable, setIsEditable] = useState(false);
  console.log('this is props', props);

  const handleSubmit = () => {
    if (amount != '' && receiverId != '' && walletPassword != '') {
      submitData(amount, receiverId, walletPassword);
    } else {
      amount == '' ? setAmountError('Topup amount is required.') : null;
      receiverId == '' ? setReceiverIdError('Receiver id is required.') : null;
      walletPassword == ''
        ? setWalletPasswordError('Wallet password is required.')
        : null;
    }
  };
  useLayoutEffect(() => {
    if (status_success === true) {
      set_initialStateNull();
      props.navigation.navigate('StatusScreen', {
        msg: 'Fund to other wallet has been transfered successfully!!',
      });
    } else if (status_success === false) {
      set_initialStateNull();
      console.log(status_message);
      Toast.show(transfer_resp, Toast.LONG);
    }
  }, [status_success, transfer_resp]);

  const handleUSDTValidation = () => {
    // send_otp_on_email();
    setModalStatus(!modalStatus);
  };

  const handlePopupCancel = () => {
    props.navigation.goBack();
  };

  useEffect(() => {
    handleUSDTValidation();
  }, []);

  return loading ? (
    <LoaderIndicator />
  ) : (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <ImageBackground
        source={POST_LOGIN_BG}
        resizeMode="stretch"
        style={styles.image}>
        <View style={Styles.secondContainerView}>
          <View
            style={{
              position: 'relative',
              alignItems: 'center',
              height: hp('29%'),
            }}>
            <Image
              source={require('../../assets/img/banner.png')}
              style={{
                width: wp('97%'),
                position: 'absolute',
              }}
            />
            <View
              style={{
                position: 'absolute',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                top: 90,
                paddingHorizontal: 68,
              }}>
              <Icon name="transfer" color={Colors.icons} size={50} />
              <Text
                style={{
                  color: '#FFF',
                  fontFamily: 'Poppins-Bold',
                  fontSize: 25,
                  // top: 95,
                  // left: '50%',
                }}>
                Transfer Fund
              </Text>
            </View>
          </View>
          <BreadcrumbBlock first={'Wallet'} second={'Transfer Fund'} />

          <View
            style={{
              backgroundColor: Colors.containerBg1,
              paddingHorizontal: 14,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
              paddingVertical: 10,
              marginVertical: 5,
            }}>
            <View style={{width: '50%'}}>
              <Text
                style={{
                  color: '#d2ccb4',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 20,
                  textAlign: 'center',
                }}>
                Investment Wallet Balance
              </Text>
            </View>
            <View style={{width: '50%', alignItems: 'center'}}>
              <Icon1 name="wallet" color={Colors.icons} size={50} />
              <Text
                style={{...Styles.title1, color: Colors.appHeaderTitleMain}}>
                {CUR_SYMB}
                {dash_data.investment_wallet_balance}
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: Colors.containerBg1,
              paddingHorizontal: 14,
              paddingVertical: 10,
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Light',
                fontSize: 20,
                color: '#b8b8b8',
                textAlign: 'center',
                marginBottom: 10,
                marginTop: 10,
              }}>
              Transfer <Text style={{color: Colors.icons}}>Investment</Text>{' '}
              Wallet <Text style={{color: Colors.icons}}>Balance</Text> To
              Others
            </Text>
            <View>
              <Text style={Styles.inputBoxLabel}>
                Enter amount to transfer*
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
              <Text style={Styles.inputBoxLabel}>Enter receiver id*</Text>
              <TextInput
                style={Styles.inputBox}
                mode="outlined"
                onChangeText={value => setReceiverId(value)}
                value={receiverId}
              />
              {receiverIdError ? (
                <Text style={Styles.errorText}>{receiverIdError}</Text>
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
              <Text style={Styles.ctaButtonText}>Transfer</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
      <ValidateOTPModal
        modalStatus={modalStatus}
        handleUSDTValidation={handleUSDTValidation}
        handleCancel={handlePopupCancel}
        screenName={null}
        setIsEditable={setIsEditable}
      />
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
  submitData: (amount, receiverId, walletPassword) =>
    dispatch(transferFundsToOther(amount, receiverId, walletPassword)),
});

const mapStateToProps = state => {
  console.log('here is on my my add fund via mdtx', state);
  return {
    status: state.wallet.status,
    loading: state.wallet.loading,
    status_success: state.wallet.success,
    status_message: state.wallet.message,
    dash_data: state.wallet.investmentWB,
    transfer_resp: state.wallet.transferResp,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TrasnferFundToOther);
