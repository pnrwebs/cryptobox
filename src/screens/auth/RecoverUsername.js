import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

import {ScrollView} from 'react-native-gesture-handler';
import {TextInput, Divider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const RecoverUsername = props => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 10,
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 30,
        }}>
        <Text
          style={{
            fontSize: 20,
            color: '#272727',
            fontFamily: 'Poppins-Bold',
          }}>
          Send Username or Recover Account
        </Text>
      </View>
      {/* Steps Block */}

      <View style={{marginTop: 10}}>
        <Text
          style={{fontSize: 18, 
          //fontFamily: 'Poppins-Medium',
          color: '#000'}}>
          Send Username:
        </Text>
        <Divider
          style={{
            borderWidth: 0.2,
            width: '100%',
          }}
        />
      </View>

      {/*  */}
      <View style={{paddingVertical: 20, paddingHorizontal: 10}}>
        {/*  */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              //fontFamily: 'Poppins-Medium',
              fontSize: 14,
              color: '#575757',
              flex: 0.9,
              textAlign: 'justify',
            }}>
            If you forgot your Username, then please enter your email/phone
            number in the field below, we will send you your username in an
            email.
          </Text>
        </View>

        <View style={{marginBottom: 10}}>
          <TextInput
            placeholder="Please enter your email/phone number"
            placeholderTextColor="#575757"
            style={{
              width: '100%',
              backgroundColor: 'transparent',
            }}
            mode="outlined"
            errorStyle={{color: '#FF0000'}}
            // errorMessage='Enter a valid user id'
            errorProps={false}
          />
        </View>
        {/* <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: 14,
              color: '#575757',
            }}>
            If you already have your credentials, then
          </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 14,
                color: '#3c8dbc',

                marginLeft: 3,
                marginRight: 3,
              }}>
              click here
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: 14,
              color: '#575757',
            }}>
            to Login
          </Text>
        </View> */}

        {/*  */}

        <View
          style={{
            marginTop: 20,
            alignItems: 'center',
            // flexDirection: 'row',
            justifyContent: 'space-between',
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
              Send
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 70}}>
          <Text
            style={{fontSize: 18, fontFamily: 'Poppins-Medium', color: '#000'}}>
            Recover My Account with Security Questions:
          </Text>
          <Divider
            style={{
              borderWidth: 0.2,
              width: '100%',
            }}
          />
        </View>
        <View
          style={{
            marginTop: 20,
            alignItems: 'center',
            paddingHorizontal: 80,
          }}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('RecoverAccount')}
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
              Recover
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          top: '40%',
          alignItems: 'center',
          paddingHorizontal: 80,
        }}>
        <TouchableOpacity
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
        </TouchableOpacity>
      </View>
    </View>
  );
};

const localStyle = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },
});

export default RecoverUsername;
