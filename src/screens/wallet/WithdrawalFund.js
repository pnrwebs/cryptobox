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
import {getWithdrawalOnOff, sendEmailOTP} from '../../store/actions';
import {CUR_SYMB, POST_LOGIN_BG} from '../../config/Constants';
import LoaderIndicator from '../../components/LoaderIndicator';
import Icon1 from 'react-native-vector-icons/Fontisto';
import Colors from '../../config/Colors';
import Styles from '../../css/Styles';
import {ScrollView} from 'react-native-gesture-handler';
import BreadcrumbBlock from '../../components/BreadcrumbBlock';
import {currency, ucword} from '../../utils/UtilityFunctions';
import ValidateOTPModal from '../../components/ValidateOTPModal';
const WithdrawalFund = props => {
  const {loading, walletbalance_resp, get_WithdrawalOnOff, on_off_status} =
    props;

  const [modalStatus, setModalStatus] = useState(false);

  useEffect(() => {
    get_WithdrawalOnOff();
  }, []);

  const handleUSDTValidation = () => {
    // send_otp_on_email();
    setModalStatus(!modalStatus);
  };
  const handlePopupCancel = () => {
    handleUSDTValidation();
  };

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
              <Icon1 name="wallet" color={Colors.icons} size={50} />
              <Text
                style={{
                  color: '#FFF',
                  fontFamily: 'Poppins-Bold',
                  fontSize: 26,
                  // top: 95,
                  // left: '50%',
                }}>
                Withdrawal
              </Text>
            </View>
          </View>
          <BreadcrumbBlock first={'Wallet'} second={'Withdrawal Fund'} />
          <View style={{marginTop: 10, marginBottom: 10}}>
            <Text
              style={{
                ...Styles.title1,
                color: Colors.appHeaderTitleMain,
                fontSize: 18,
              }}>
              Withdrawal fund from income wallet
            </Text>

            <Text
              style={{
                ...Styles.title1,
                color: Colors.appHeaderTitleMain,
                fontSize: 18,
              }}>
              Income Wallet Balance
            </Text>
            <Text
              style={{
                ...Styles.title1,
                color: Colors.appHeaderTitleMain,
                fontSize: 18,
              }}>
              {CUR_SYMB}
              {walletbalance_resp?.income_wallet_balance}
            </Text>
          </View>
          {on_off_status && on_off_status.current_status === 1 ? (
            <View
              style={{
                backgroundColor: Colors.containerBg1,
                paddingHorizontal: 14,
                paddingVertical: 20,
                // height: hp('30%'),
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                flexDirection: 'row',
              }}>
              <Pressable
                onPress={() => handleUSDTValidation()}
                style={{
                  ...Styles.ctaButton,
                  paddingVertical: hp('1%'),
                  // paddingHorizontal: wp('2%'),
                  width: wp('60%'),
                }}>
                <Text style={Styles.ctaButtonText}>
                  Withdraw fund with USDT
                </Text>
              </Pressable>
              <Pressable
                onPress={() =>
                  props.navigation.navigate('WithdrawalRequestMDTX')
                }
                style={{
                  ...Styles.ctaButton,
                  paddingVertical: hp('1%'),
                  // paddingHorizontal: wp('2%'),
                  width: wp('60%'),
                }}>
                <Text style={Styles.ctaButtonText}>
                  Withdraw fund with MDTX
                </Text>
              </Pressable>
              <Pressable
                onPress={() =>
                  props.navigation.navigate('WithdrawInvestInCompounding')
                }
                style={{
                  ...Styles.ctaButton,
                  paddingVertical: hp('1%'),
                  // paddingHorizontal: wp('2%'),
                  width: wp('60%'),
                }}>
                <Text style={Styles.ctaButtonText}>
                  I want to invest in compounding
                </Text>
              </Pressable>
              <Pressable
                onPress={() =>
                  props.navigation.navigate('TransferFundToInvestmentWallet')
                }
                style={{
                  ...Styles.ctaButton,
                  paddingVertical: hp('1%'),
                  // paddingHorizontal: wp('2%'),
                  width: wp('60%'),
                }}>
                <Text style={Styles.ctaButtonText}>
                  Transfer fund to investment wallet
                </Text>
              </Pressable>
            </View>
          ) : (
            <View style={{marginTop: 10, marginBottom: 10}}>
              <Text
                style={{
                  ...Styles.title1,
                  color: Colors.appHeaderTitleMain,
                  textTransform: 'capitalize',
                }}>
                Your cryptobox account scheduled weekly withdrawal is every
                Sunday.
              </Text>
            </View>
          )}
        </View>
      </ImageBackground>
      <ValidateOTPModal
        modalStatus={modalStatus}
        handleUSDTValidation={handleUSDTValidation}
        handleCancel={handlePopupCancel}
        screenName={'WithdrawalRequestUSDT'}
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
  // set_initialStateNull: () => dispatch(setInitialStateNullReward()),
  get_WithdrawalOnOff: () => dispatch(getWithdrawalOnOff()),
  send_otp_on_email: () => dispatch(sendEmailOTP()),
});
const mapStateToProps = state => {
  console.log('on withdrawal fund', state);
  return {
    status: state.wallet.status,
    loading: state.wallet.loading,
    walletbalance_resp: state.wallet.incomeWB,
    on_off_status: state.wallet.open_status,
    sentotp: state.verifyotp.sendotpstatus,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WithdrawalFund);
