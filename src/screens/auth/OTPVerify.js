import React, {useState, useRef} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Alert,
} from 'react-native';

import {Divider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import OTPTextInput from 'react-native-otp-textinput';

const OTPVerify = props => {
  const otpInput = useRef(null);

  const clearText = () => {
    otpInput.current.clear();
  };

  const setText = () => {
    otpInput.current.setValue('1234');
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 10,
      }}>
      {/* Steps Block */}

      <View style={{marginTop: 10}}>
        <Text
          style={{fontSize: 18, fontFamily: 'Poppins-Medium', color: '#000'}}>
          Verify Your Mobile Number:
        </Text>
        <Divider
          style={{
            borderWidth: 0.2,
            width: '100%',
          }}
        />
        <Text
          style={{
            //fontFamily: 'Poppins-Medium',
            fontSize: 14,
            color: '#575757',
            marginTop: 10,
          }}>
          An OTP will be sent on your registered mobile number.
        </Text>
      </View>

      {/*  */}
      <View style={{paddingVertical: 20, paddingHorizontal: 10}}>
        {/*  */}

        {/* <OTPTextInput ref={otpInput} /> */}
        <OTPTextInput
          handleTextChange={e => {}}
          containerStyle={localStyle.textInputContainer}
          textInputStyle={localStyle.roundedTextInput}
          inputCount={4}
          inputCellLength={1}
        />
        <Pressable onPress={() => Alert.alert('OTP sent successfully.')}>
          <Text
            style={{
              fontSize: 18,
              //fontFamily: 'Poppins-Medium',
              color: '#4f3cb2',
              textAlign: 'center',
            }}>
            Resend OTP
          </Text>
        </Pressable>

        {/* <Button title="clear" onClick={clearText}></Button> */}

        <View
          style={{
            marginTop: 20,
            alignItems: 'center',
            paddingHorizontal: 80,
          }}>
          {/* <TouchableOpacity
            onPress={() => props.navigation.goBack(null)}
            style={{
              backgroundColor: '#DF4D53',
              borderRadius: 5,
              paddingHorizontal: 22,
              paddingVertical: 10,
            }}>
            <Text
              style={{
                fontSize: 'Poppins-Regular',
                fontSize: 14,
                color: '#FFFFFF',
              }}>
              Cancel
            </Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            onPress={clearText}
            style={{
              backgroundColor: '#FC9D2E',
              borderRadius: 5,
              paddingHorizontal: 22,
              paddingVertical: 10,
            }}>
            <Text
              style={{
                fontSize: 'Poppins-Regular',
                fontSize: 14,
                color: '#FFFFFF',
              }}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const localStyle = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },
  textInputContainer: {
    marginBottom: 20,
    marginTop: 30,
  },
  roundedTextInput: {
    borderRadius: 10,
    borderWidth: 2,
  },
});

export default OTPVerify;
