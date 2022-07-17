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
  Linking,
  Image,
  Pressable,
} from 'react-native';
import {connect} from 'react-redux';
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
import Clipboard from '@react-native-clipboard/clipboard';
import Toast from 'react-native-simple-toast';
const ReferToFriends = props => {
  const {loading, user_data} = props;

  const copyToClipboard = url => {
    Clipboard.setString(url);
    Toast.show('URL copied to clipboard.', Toast.LONG);
  };

  return loading ? (
    <LoaderIndicator />
  ) : (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <ImageBackground
        source={POST_LOGIN_BG}
        resizeMode="stretch"
        style={styles.image}>
        <View style={{...Styles.secondContainerView, marginVertical: 0}}>
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
                top: 70,
                paddingHorizontal: 68,
              }}>
              <Icon name="share-variant" color={Colors.icons} size={50} />
              <Text
                style={{
                  color: '#FFF',
                  fontFamily: 'Poppins-Bold',
                  fontSize: 35,
                  // top: 95,
                  // left: '50%',
                }}>
                Invite {'\n'}Friends
              </Text>
            </View>
          </View>
          <BreadcrumbBlock first={'Profile'} second={'Invite Friends'} />

          <View
            style={{
              backgroundColor: Colors.containerBg1,
              paddingHorizontal: 10,
              height: hp('30%'),
              borderRadius: 5,
              alignItems: 'center',
              // justifyContent: 'center',
            }}>
            <Icon
              name="account-group"
              color={'rgba(83,76,76,0.6901960784313725 )'}
              size={70}
            />
            <Text
              style={{
                color: Colors.fontColor1,
                fontFamily: 'Poppins-Medium',
                fontSize: 14,
              }}>
              Help to grow the CryptoBox and earn money.
            </Text>
            <Text
              style={{
                color: '#d2ccb4',
                fontFamily: 'Poppins-Medium',
                fontSize: 18,
              }}>
              Invite friends and earn cash
            </Text>
            <View
              style={{
                paddingHorizontal: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: 200,
              }}>
              <Icon name="message" color={'#d2ccb4'} size={38} />
              <Icon name="forum" color={'#d2ccb4'} size={38} />
              <Icon name="bullhorn" color={'#d2ccb4'} size={38} />
              <Icon name="bitcoin" color={'#d2ccb4'} size={38} />
            </View>
            {/* <Text
              style={{
                color: Colors.fontColor1,
                fontFamily: 'Poppins-Medium',
                fontSize: 14,
              }}>
              You have referred{' '}
              <Text
                style={{
                  color: Colors.icons,
                }}>
                9 friends{' '}
              </Text>
              to CryptoBox, and earned{' '}
              <Text
                style={{
                  color: Colors.icons,
                }}>
                $277
              </Text>
            </Text> */}
            <View
              style={{
                paddingHorizontal: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                marginTop: 10,
              }}>
              <Pressable
                onPress={() =>
                  Linking.openURL(
                    'https://api.whatsapp.com/send?phone=+6598002931&text=Hii%20cryptobox',
                  ).catch(err => console.error('Error', err))
                }
                style={{
                  ...styles.btnExplore,
                  marginBottom: 5,
                  flexDirection: 'row',
                }}>
                <Icon name="whatsapp" color={'#d2ccb4'} size={24} />
                <Text
                  style={{
                    color: Colors.icons,
                    fontFamily: 'Poppins-Medium',
                    fontSize: 12,
                    marginLeft: 5,
                  }}>
                  Whatsapp
                </Text>
              </Pressable>
              <Pressable
                onPress={() =>
                  Linking.openURL(
                    'https://www.facebook.com/cryptobox.world/',
                  ).catch(err => console.error('Error', err))
                }
                style={{
                  ...styles.btnExplore,
                  marginBottom: 5,
                  flexDirection: 'row',
                }}>
                <Icon name="facebook" color={'#d2ccb4'} size={24} />
                <Text
                  style={{
                    color: Colors.icons,
                    fontFamily: 'Poppins-Medium',
                    fontSize: 12,
                    marginLeft: 5,
                  }}>
                  Facebook
                </Text>
              </Pressable>
              <Pressable
                onPress={() =>
                  Linking.openURL('https://twitter.com/cryptoboxlife').catch(
                    err => console.error('Error', err),
                  )
                }
                style={{
                  ...styles.btnExplore,
                  marginBottom: 5,
                  flexDirection: 'row',
                }}>
                <Icon name="twitter" color={'#d2ccb4'} size={24} />
                <Text
                  style={{
                    color: Colors.icons,
                    fontFamily: 'Poppins-Medium',
                    fontSize: 12,
                    marginLeft: 5,
                  }}>
                  Twitter
                </Text>
              </Pressable>
            </View>
          </View>
          <View
            style={{
              backgroundColor: Colors.containerBg1,
              paddingHorizontal: 10,
              height: hp('25%'),
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon name="link-variant" color={Colors.icons} size={74} />
              <View
                style={{
                  padding: 5,
                  borderTopWidth: 2,
                  borderBottomWidth: 2,
                  borderTopColor: Colors.icons,
                  borderBottomColor: Colors.icons,
                  marginLeft: 30,
                }}>
                <Text
                  style={{
                    color: '#d2ccb4',
                    fontFamily: 'Poppins-Medium',
                    fontSize: 20,
                  }}>
                  Share your link
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 30,
              }}>
              <View
                style={{
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  borderWidth: 0.5,
                  borderColor: Colors.fontColor1,
                  backgroundColor: '#333738',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: '#d2ccb4',
                    fontFamily: 'Poppins-Medium',
                    fontSize: 12,
                  }}>
                  https://cryptobox.world/referral.php?id=
                  {user_data?.member_username}
                </Text>
              </View>
              <Pressable
                onPress={() =>
                  copyToClipboard(
                    `https://cryptobox.world/referral.php?id=${user_data?.member_username}`,
                  )
                }
                style={{
                  paddingVertical: 1.8,
                  paddingHorizontal: 6,
                  borderWidth: 0.5,
                  borderColor: Colors.fontColor1,
                  backgroundColor: '#333738',
                  alignItems: 'center',
                }}>
                <Icon name="content-copy" color={'#d2ccb4'} size={24} />
              </Pressable>
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
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  btnExplore: {
    // width: 80,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ac7703',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
});
const mapStateToProps = state => {
  console.log('here is on refer', state);
  return {
    status: state.auth.status,
    loading: state.auth.loading,
    user_data: state.auth.user,
  };
};

export default connect(mapStateToProps, null)(ReferToFriends);
