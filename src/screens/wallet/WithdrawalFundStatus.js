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
import {POST_LOGIN_BG, DATE_FORMAT} from '../../config/Constants';
import LoaderIndicator from '../../components/LoaderIndicator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../config/Colors';
import Styles from '../../css/Styles';
import {ScrollView} from 'react-native-gesture-handler';
import BreadcrumbBlock from '../../components/BreadcrumbBlock';
import LinearGradient from 'react-native-linear-gradient';
import {Divider} from 'react-native-paper';
import moment from 'moment';
import QRCode from 'react-native-qrcode-svg';
import Clipboard from '@react-native-clipboard/clipboard';
import Toast from 'react-native-simple-toast';
const WithdrawalFundStatus = props => {
  const {loading} = props;
  const [showDataDetails] = useState(props.route.params.showData);
  console.log('showDataDetailsshowDataDetailsshowDataDetails', showDataDetails);
  // const copyToClipboard = pay_address => {
  //   Clipboard.setString(pay_address);
  //   Toast.show('Address copied to clipboard.', Toast.LONG);
  // };

  return loading ? (
    <LoaderIndicator />
  ) : (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <ImageBackground
        source={POST_LOGIN_BG}
        resizeMode="stretch"
        style={styles.image}>
        <View style={{...Styles.secondContainerView}}>
          <BreadcrumbBlock first={'Profile'} second={props.route.name} />
          <LinearGradient
            start={{x: 0.0, y: 0.25}}
            end={{x: 0, y: 1.0}}
            colors={['#bf8606', '#604303']}
            style={{
              position: 'relative',
              alignItems: 'center',
              height: hp('29%'),
            }}></LinearGradient>
          <View
            style={{
              backgroundColor: Colors.containerBg1,
              paddingHorizontal: 14,
              position: 'absolute',
              height: hp('72%'),
              width: wp('86%'),
              top: '30%',
              borderRadius: 8,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 24,
                color: '#d2ccb4',
                textAlign: 'center',
                marginTop: 20,
              }}>
              Withdrawal Status
            </Text>

            <View style={{marginTop: 10}}>
              <View style={{paddingVertical: 20}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: '#b9822f',
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    Currency
                  </Text>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    {showDataDetails.currency}
                  </Text>
                </View>
              </View>
              <Divider style={styles.dividerLine} />
              <View style={{paddingVertical: 20}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: '#b9822f',
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    Amount In USD
                  </Text>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    {showDataDetails.amount_in_fiat}
                  </Text>
                </View>
              </View>
              <Divider style={styles.dividerLine} />
              <View style={{paddingVertical: 20}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: '#b9822f',
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    Amount In Crypto
                  </Text>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    {showDataDetails.amount_in_crypto}
                  </Text>
                </View>
              </View>
              <Divider style={styles.dividerLine} />
              <View style={{paddingVertical: 20, flexWrap: 'wrap'}}>
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: '#b9822f',
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    Address to Pay
                  </Text>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    {showDataDetails.address_to_pay}
                  </Text>
                </View>
              </View>
              <Divider style={styles.dividerLine} />
              <View style={{paddingVertical: 20, flexWrap: 'wrap'}}>
                <View>
                  <Text
                    style={{
                      color: '#b9822f',
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    Transaction ID
                  </Text>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    {showDataDetails.txn_id}
                  </Text>
                </View>
              </View>
            </View>
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
  dividerLine: {
    borderColor: '#393838',
    borderWidth: 0.5,
    width: '100%',
    alignSelf: 'center',
  },
});

export default WithdrawalFundStatus;
