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
import {CUR_SYMB, POST_LOGIN_BG} from '../../config/Constants';
import LoaderIndicator from '../../components/LoaderIndicator';
import Icon1 from 'react-native-vector-icons/Fontisto';
import Colors from '../../config/Colors';
import Styles from '../../css/Styles';
import {ScrollView} from 'react-native-gesture-handler';
import BreadcrumbBlock from '../../components/BreadcrumbBlock';
import {currency, ucword} from '../../utils/UtilityFunctions';

const AddFundToWallet = props => {
  const {loading, walletbalance_resp} = props;

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
                  fontSize: 35,
                  // top: 95,
                  // left: '50%',
                }}>
                Wallet
              </Text>
            </View>
          </View>
          <BreadcrumbBlock first={'Wallet'} second={'Add Fund To Wallet'} />
          <View style={{marginTop: 10, marginBottom: 10}}>
            <Text style={{...Styles.title1, color: Colors.appHeaderTitleMain}}>
              Investment Wallet Balance
            </Text>
            <Text style={{...Styles.title1, color: Colors.appHeaderTitleMain}}>
              {CUR_SYMB}
              {walletbalance_resp?.investment_wallet_balance}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: Colors.containerBg1,
              paddingHorizontal: 14,
              height: hp('30%'),
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Pressable
              onPress={() => props.navigation.navigate('AddFundViaMDTX')}
              style={{
                ...Styles.ctaButton,
                paddingVertical: hp('1%'),
                // paddingHorizontal: wp('2%'),
                width: wp('60%'),
              }}>
              <Text style={Styles.ctaButtonText}>Add Fund Via MDTX</Text>
            </Pressable>
            <Pressable
              onPress={() => props.navigation.navigate('AddFundViaUSDT')}
              style={{
                ...Styles.ctaButton,
                paddingVertical: hp('1%'),
                // paddingHorizontal: wp('2%'),
                width: wp('60%'),
              }}>
              <Text style={Styles.ctaButtonText}>Add Fund Via USDT</Text>
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

const mapStateToProps = state => {
  return {
    status: state.wallet.status,
    loading: state.wallet.loading,
    walletbalance_resp: state.wallet.investmentWB,
  };
};

export default connect(mapStateToProps, null)(AddFundToWallet);
