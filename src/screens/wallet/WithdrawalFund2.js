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
import {POST_LOGIN_BG} from '../../config/Constants';
import LoaderIndicator from '../../components/LoaderIndicator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../config/Colors';
import Styles from '../../css/Styles';
import {ScrollView} from 'react-native-gesture-handler';
import BreadcrumbBlock from '../../components/BreadcrumbBlock';

const WithdrawalFund = props => {
  const {loading} = props;

  return loading ? (
    <LoaderIndicator />
  ) : (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <ImageBackground
        source={POST_LOGIN_BG}
        resizeMode="stretch"
        style={styles.image}>
        <View style={Styles.secondContainerView}>
          <BreadcrumbBlock first={'Wallet'} second={'Withdrawal Fund'} />
          <View style={{marginTop: 10, marginBottom: 10}}>
            <Text style={{...Styles.title1, color: Colors.appHeaderTitleMain}}>
              Withdraw funds from Income Wallet
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              marginBottom: 10,
              padding: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                ...Styles.title1,
                color: Colors.appHeaderTitleMain,
                textTransform: 'capitalize',
              }}>
              Income Wallet Balance - $ 28.8360
            </Text>
          </View>

          <View
            style={{
              marginTop: 10,
              marginBottom: 10,
              borderWidth: 2,
              borderColor: '#191e3a',
              padding: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                ...Styles.title1,
                color: '#eace6d',
                textTransform: 'capitalize',
                fontFamily: 'Poppins-SemiBold',
              }}>
              Your cryptobox account scheduled weekly withdrawal is every
              Saturday
            </Text>
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

export default WithdrawalFund;
