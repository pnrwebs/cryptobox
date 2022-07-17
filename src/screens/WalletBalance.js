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
import {reloadAllWalletBalance} from '../store/actions';
import {CUR_SYMB, POST_LOGIN_BG} from '../config/Constants';
import LoaderIndicator from '../components/LoaderIndicator';
import Icon1 from 'react-native-vector-icons/Fontisto';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../config/Colors';
import Styles from '../css/Styles';
import {ScrollView} from 'react-native-gesture-handler';
import BreadcrumbBlock from '../components/BreadcrumbBlock';

const WalletBalance = props => {
  const {
    loading,
    dash_data,
    get_reloadAllWalletBalance,
    incomeWB_resp,
    investmentWB_resp,
    totalFundWB_resp,
    mdtxWB_resp,
  } = props;

  useEffect(() => {
    get_reloadAllWalletBalance();
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
              source={require('../assets/img/banner.png')}
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
                  fontSize: 35,
                  // top: 95,
                  // left: '50%',
                }}>
                Wallet
              </Text>
            </View>
          </View>
          <BreadcrumbBlock first={'Dashboard'} second={'Wallet Balance'} />
          <View style={{marginTop: 10}}>
            <Pressable style={{...styles.listItem}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View style={{width: '20%'}}>
                  <Icon name="wallet" color={Colors.icons} size={50} />
                </View>

                <View style={{width: '50%', alignItems: 'center'}}>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 16,
                    }}>
                    {CUR_SYMB}
                    {investmentWB_resp?.investment_wallet_balance}
                  </Text>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    Investment Wallet
                  </Text>
                </View>
                <View style={{width: '25%'}}>
                  <Pressable
                    style={{...styles.btnExplore, marginBottom: 5}}
                    onPress={() =>
                      props.navigation.navigate('AddFundToWallet')
                    }>
                    <Text
                      style={{
                        color: Colors.icons,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 12,
                      }}>
                      Deposit
                    </Text>
                  </Pressable>
                  <Pressable
                    style={styles.btnExplore}
                    onPress={() =>
                      props.navigation.navigate('TrasnferFundToOther')
                    }>
                    <Text
                      style={{
                        color: Colors.icons,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 12,
                      }}>
                      Transfer
                    </Text>
                  </Pressable>
                </View>
              </View>
            </Pressable>
            <Pressable style={{...styles.listItem}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View style={{width: '20%'}}>
                  <Icon name="wallet" color={Colors.icons} size={50} />
                </View>

                <View style={{width: '50%', alignItems: 'center'}}>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 16,
                    }}>
                    {CUR_SYMB}
                    {incomeWB_resp?.income_wallet_balance}
                  </Text>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    Income Wallet
                  </Text>
                </View>
                <View style={{width: '25%'}}>
                  <Pressable
                    style={{...styles.btnExplore, marginBottom: 5}}
                    onPress={() => props.navigation.navigate('WithdrawalFund')}>
                    <Text
                      style={{
                        color: Colors.icons,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 12,
                      }}>
                      Withdrawal
                    </Text>
                  </Pressable>
                  {/* <Pressable
                    style={styles.btnExplore}
                    onPress={() =>
                      props.navigation.navigate('TrasnferFundToOther')
                    }>
                    <Text
                      style={{
                        color: Colors.icons,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 12,
                      }}>
                      Transfer
                    </Text>
                  </Pressable> */}
                </View>
              </View>
            </Pressable>
            <Pressable style={{...styles.listItem}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View style={{width: '20%'}}>
                  <Icon name="wallet" color={Colors.icons} size={50} />
                </View>

                <View style={{width: '50%', alignItems: 'center'}}>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 16,
                    }}>
                    {CUR_SYMB}
                    {totalFundWB_resp?.total_withdrawal_balance}
                  </Text>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    Total Fund Withdrawal
                  </Text>
                </View>
                <View style={{width: '25%'}}>
                  <Pressable
                    style={{...styles.btnExplore, marginBottom: 5}}
                    onPress={() =>
                      props.navigation.navigate('WithdrawalHistory')
                    }>
                    <Text
                      style={{
                        color: Colors.icons,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 12,
                      }}>
                      Explore
                    </Text>
                  </Pressable>
                  {/* <Pressable
                    style={styles.btnExplore}
                    onPress={() =>
                      props.navigation.navigate('TrasnferFundToOther')
                    }>
                    <Text
                      style={{
                        color: Colors.icons,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 12,
                      }}>
                      Transfer
                    </Text>
                  </Pressable> */}
                </View>
              </View>
            </Pressable>
            <Pressable style={{...styles.listItem}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View style={{width: '20%'}}>
                  <Icon name="wallet" color={Colors.icons} size={50} />
                </View>

                <View style={{width: '50%', alignItems: 'center'}}>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 16,
                    }}>
                    {CUR_SYMB}
                    {mdtxWB_resp?.mdtx_wallet_balance}
                  </Text>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    MDTX Securitized
                  </Text>
                </View>
                <View style={{width: '25%'}}>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 12,
                    }}>
                    Avail this once your investment reach $1000
                  </Text>
                </View>
              </View>
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
  listItem: {
    // height: hp('10%'),
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: '#707070',
    borderRadius: 5,
    justifyContent: 'center',
    marginBottom: 10,
  },
  btnExplore: {
    // width: 80,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ac7703',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingHorizontal: 10,
    paddingVertical: 5,
    // shadowColor: '#ac7703',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 3,
    // shadowRadius: 2,
    // elevation: 1,
  },
});

const mapDispatchToProps = dispatch => ({
  get_reloadAllWalletBalance: () => dispatch(reloadAllWalletBalance()),
});
const mapStateToProps = state => {
  console.log('here on dashboard wallet', state);
  return {
    status: state.auth.status,
    loading: state.auth.loading,
    users: state.auth.user,
    dash_data: state.auth.dashboard,
    incomeWB_resp: state.wallet.incomeWB,
    investmentWB_resp: state.wallet.investmentWB,
    mdtxWB_resp: state.wallet.mdtxWB,
    totalFundWB_resp: state.wallet.totalFundWB,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletBalance);
