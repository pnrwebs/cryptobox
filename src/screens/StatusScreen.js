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
import LoaderIndicator from '../components/LoaderIndicator';
import Colors from '../config/Colors';

const RegistrationSuccessfull = props => {
  const {loading} = props;
  const [msg] = useState(props.route.params.msg);

  return loading ? (
    <LoaderIndicator />
  ) : (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/img/without-login-screen-bg.png')}
        resizeMode="stretch"
        style={styles.image}>
        <View
          style={{
            // height: hp('40%'),
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
            <Text style={{color: '#e8e7e1', fontSize: 14}}>Successful</Text>
          </View>
          <Text style={{color: '#e8e7e1', fontSize: wp('4%'), marginTop: 20}}>
            Dear Member,
          </Text>
          <Text style={{color: '#e8e7e1', fontSize: wp('4%'), marginTop: 20}}>
            {msg}
          </Text>
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
    // height: hp('3.5%'),
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
