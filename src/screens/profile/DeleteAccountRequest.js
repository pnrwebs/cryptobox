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
const DeleteAccountRequest = props => {
  const [loading, setLoading] = useState(true);
  const delay = 2;

  useEffect(() => {
    setTimeout(() => setLoading(false), delay * 1000);
  }, []);

  return loading ? (
    <LoaderIndicator />
  ) : (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <ImageBackground
        source={POST_LOGIN_BG}
        resizeMode="stretch"
        style={styles.image}>
        <View style={{...Styles.secondContainerView, marginVertical: 0}}>
          <BreadcrumbBlock first={'Profile'} second={'Delete Request'} />

          <View
            style={{
              backgroundColor: Colors.containerBg1,
              paddingHorizontal: 10,
              paddingTop: 20,
              height: hp('30%'),
              borderRadius: 5,
              alignItems: 'center',

              // justifyContent: 'center',
            }}>
            <Icon
              name="vector-square-remove"
              color={'rgba(83,76,76,0.6901960784313725 )'}
              size={70}
            />
            <Text
              style={{
                color: '#d2ccb4',
                fontFamily: 'Poppins-Medium',
                fontSize: 18,
                textAlign: 'center',
              }}>
              Your account deletion request has been sent successfully.
            </Text>
            <Text
              style={{
                color: Colors.fontColor1,
                fontFamily: 'Poppins-Medium',
                fontSize: 14,
                textAlign: 'center',
                marginTop: 10,
              }}>
              It may take 2 Working days to process your request. Incase of any
              query please visit{' '}
              <Text
                style={{
                  color: Colors.icons,
                  fontFamily: 'Poppins-Medium',
                  fontSize: 14,
                  marginLeft: 5,
                }}>
                admin@cryptobox.world
              </Text>
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

export default DeleteAccountRequest;
