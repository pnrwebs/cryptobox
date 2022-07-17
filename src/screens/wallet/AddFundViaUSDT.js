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
  addFundToWalletViaUSDT,
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
const AddFundViaUSDT = props => {
  const {
    loading,
    submitData,
    status_success,
    status_message,
    usdtData_resp,
    set_initialStateNull,
    walletbalance_resp,
  } = props;
  const [topUpAmount, setTopUpAmount] = useState('');
  const [topUpAmountError, setTopUpAmountError] = useState('');

  const handleSubmit = () => {
    if (topUpAmount != '') {
      submitData(topUpAmount);
    } else {
      topUpAmount == ''
        ? setTopUpAmountError('Topup amount is required.')
        : null;
    }
  };
  useEffect(() => {
    if (status_success === true) {
      set_initialStateNull();
      props.navigation.navigate('AddFundStatus', {
        showData: usdtData_resp,
      });
    } else if (status_success === false) {
      set_initialStateNull();
      Toast.show(usdtData_resp, Toast.LONG);
    }
  }, [status_success, usdtData_resp]);
  return loading ? (
    <LoaderIndicator />
  ) : (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <ImageBackground
        source={POST_LOGIN_BG}
        resizeMode="stretch"
        style={styles.image}>
        <View style={Styles.secondContainerView}>
          <BreadcrumbBlock first={'Wallet'} second={'Add Fund Via USDT'} />
          <View style={{marginTop: 10, marginBottom: 10}}>
            <Text style={{...Styles.title1, color: Colors.appHeaderTitleMain}}>
              Deposit funds to Investment Wallet (USDT)
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
              Only one wallet address can be used for one transaction. If you
              want to deposit multiple times then you have to generate multiple
              address. If you generate only one address and do multiple payment
              then only one payment will be credit in your wallet and rest
              payment you will loose and company will not liable to pay it.
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
              Kindly pay the exact amount which will show in your screen. If our
              payment gateway received less payment due to price fluctuation it
              may take some time to credit in your Top-up wallet. We suggest you
              to add some minor extra amount to avoid delay.
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
              Total Available Fund: {CUR_SYMB}
              {walletbalance_resp?.investment_wallet_balance}
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
                Enter Topup Amount (In USD)*
              </Text>
              <TextInput
                keyboardType="decimal-pad"
                style={Styles.inputBox}
                mode="outlined"
                onChangeText={value => setTopUpAmount(value)}
                value={topUpAmount}
              />
              {topUpAmountError ? (
                <Text style={Styles.errorText}>{topUpAmountError}</Text>
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
  submitData: topUpAmount => dispatch(addFundToWalletViaUSDT(topUpAmount)),
});

const mapStateToProps = state => {
  console.log('here is on my my add fund via mdtx', state);
  return {
    status: state.wallet.status,
    loading: state.wallet.loading,
    status_success: state.wallet.success,
    status_message: state.wallet.message,
    usdtData_resp: state.wallet.usdtData,
    walletbalance_resp: state.wallet.investmentWB,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddFundViaUSDT);
