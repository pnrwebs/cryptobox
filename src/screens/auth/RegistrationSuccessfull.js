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
  Pressable,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LoaderIndicator from '../../components/LoaderIndicator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../config/Colors';
import Styles from '../../css/Styles';

const RegistrationSuccessfull = props => {
  const {loading} = props;
  console.log('reg success', props);
  const [userdata] = useState(props.route.params.user);

  return loading ? (
    <LoaderIndicator />
  ) : (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/img/without-login-screen-bg.png')}
        resizeMode="stretch"
        style={styles.image}>
        <View
          style={{
            height: hp('40%'),
            width: wp('95%'),
            padding: 20,
            borderWidth: 1,
            borderRadius: 4,
            borderColor: Colors.boxBorder,
            // justifyContent: 'center',
            alignSelf: 'center',
            position: 'relative',
          }}>
          <View
            style={{
              height: hp('4%'),
              width: wp('52%'),
              borderRadius: 3,
              backgroundColor: '#bf8606',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              top: -17,
              left: 20,
            }}>
            <Text style={{color: '#e8e7e1', fontSize: 14}}>
              Registration Successful
            </Text>
          </View>
          <Text style={{color: '#e8e7e1', fontSize: wp('4%'), marginTop: 20}}>
            Dear {userdata.data.member_username},
          </Text>
          <Text style={{color: '#e8e7e1', fontSize: wp('4%'), marginTop: 20}}>
            Thank you, for becoming a member with us!
          </Text>
          <Text style={{color: '#e8e7e1', fontSize: wp('4%'), marginTop: 20}}>
            Kindly check your email we had sent you an email verification kindly
            click on it and get access to your dashboard.
          </Text>
          <View style={{marginTop: 20}}>
            <View style={styles.lineBox}>
              <Text style={styles.lineBoxText}>
                Your username is: {userdata.data.member_username}
              </Text>
              <Icon
                name="checkbox-marked-circle-outline"
                color={'#4da729'}
                size={22}
              />
            </View>
            <View style={styles.lineBox}>
              <Text style={styles.lineBoxText}>
                Your login password is: {userdata.data.member_password}
              </Text>
              <Icon
                name="checkbox-marked-circle-outline"
                color={'#4da729'}
                size={22}
              />
            </View>
            <View style={styles.lineBox}>
              <Text style={styles.lineBoxText}>
                Your wallet password is:{' '}
                {userdata.data.member_transaction_password}
              </Text>
              <Icon
                name="checkbox-marked-circle-outline"
                color={'#4da729'}
                size={22}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  lineBox: {
    height: hp('3.5%'),
    width: wp('85%'),
    borderRadius: 3,
    borderLeftColor: '#b28d42',
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 7,
    borderLeftWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  lineBoxText: {
    fontSize: 16,
    color: '#d2ccb4',
  },
});

export default RegistrationSuccessfull;
