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
  Image,
  TouchableOpacity,
  useColorScheme,
  ActivityIndicator,
  ScrollView,
  Keyboard,
} from 'react-native';

import {TextInput, Button, Divider, Checkbox} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Picker} from '@react-native-community/picker';

import FingerPrintIcon from '../../assets/img/finger-print.svg';

const RecoverAccount = props => {
  const [selectedCategory, setSelectedCategory] = useState('Choose Question');
  const toggleModelUpdateCart = title => {
    setUpdateCart(!isUpdateCart);
  };
  const isDarkMode = useColorScheme() === 'dark';
  const [ischecked1, setIsChecked1] = useState(false);
  const [ischecked2, setIsChecked2] = useState(false);
  const [ischecked3, setIsChecked3] = useState(false);

  const [userid, setUserId] = useState('vikash@gmail.com');
  const [password, setPassword] = useState();
  const [auth, setAuth] = useState(false);
  const [loader, setLoader] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  const [showPassword1, setShowPassword1] = useState(false);
  const [passShown1, setPassShown1] = useState(true);

  const [showPassword2, setShowPassword2] = useState(false);
  const [passShown2, setPassShown2] = useState(true);

  const [showPassword3, setShowPassword3] = useState(false);
  const [passShown3, setPassShown3] = useState(true);

  const [showPassword4, setShowPassword4] = useState(false);
  const [passShown4, setPassShown4] = useState(true);

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    console.log('currentDatecurrentDate', selectedDate);
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setSelectedDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const changeShowPassword1 = () => {
    setShowPassword1(!showPassword1);
    setPassShown1(!passShown1);
  };

  const changeShowPassword2 = () => {
    setShowPassword2(!showPassword2);
    setPassShown2(!passShown2);
  };

  const changeShowPassword3 = () => {
    setShowPassword3(!showPassword3);
    setPassShown3(!passShown3);
  };

  const changeShowPassword4 = () => {
    setShowPassword4(!showPassword4);
    setPassShown4(!passShown4);
  };

  return (
    <ScrollView
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
            fontSize: 24,
            color: '#272727',
            fontFamily: 'Poppins-Bold',
          }}>
          Recover Account
        </Text>
      </View>
      {/* Steps Block */}

      <View style={{marginTop: 10}}>
        <Text style={{fontSize: 18, fontFamily: 'Poppins-Medium'}}>
          Recover Account:
        </Text>
        <Divider
          style={{
            borderWidth: 0.2,
            width: '100%',
          }}
        />
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
        <Text
          style={{
            //fontFamily: 'Poppins-Regular',
            fontSize: 12,
            color: '#000000',
          }}>
          If you forgot you account credentials, then please enter the answer to
          the security questions below to prove your identity, please enter the
          exact answers to the security questions which you provided during the
          registration level 1 process.
        </Text>
      </View>
      <View style={{paddingVertical: 20, paddingHorizontal: 10}}>
        {/*  */}

        <View style={{marginBottom: 10}}>
          <Text
            style={{
              //fontFamily: 'Poppins-Medium',
              fontSize: 12,
              color: '#575757',
            }}>
            Question 1
          </Text>
          {/* <TextInput
            placeholder="Question 1"
            placeholderTextColor="#575757"
            style={{
              width: '100%',
              backgroundColor: 'transparent',
            }}
            mode="outlined"
            errorStyle={{color: '#FF0000'}}
            // errorMessage='Enter a valid user id'
            errorProps={false}
          /> */}
          <View
            style={{
              borderRadius: 5,
              borderWidth: 1,
              borderColor: '#000',
              overflow: 'hidden',
              height: 60,
              paddingTop: 7,
              backgroundColor: 'transparent',
              marginTop: 5,
            }}>
            <Picker
              selectedValue={selectedCategory}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedCategory(itemValue)
              }
              style={{height: 40, borderBottomWidth: 2, color: '#000'}}>
              <Picker.Item label="Choose Question" value="" />
              <Picker.Item
                label="What was your childhood nickname?"
                value="All"
              />
              <Picker.Item
                label="What was your favorite sport in high school?"
                value="Meal"
              />
              <Picker.Item
                label="What was the name of the company where you had your first job?"
                value="Spirits"
              />
            </Picker>
          </View>
        </View>

        <View style={{marginBottom: 10}}>
          <Text
            style={{
              //fontFamily: 'Poppins-Medium',
              fontSize: 12,
              color: '#575757',
            }}>
            Answer
          </Text>
          <TextInput
            placeholder="Answer"
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
        <View style={{marginBottom: 10}}>
          <Text
            style={{
              //fontFamily: 'Poppins-Medium',
              fontSize: 12,
              color: '#575757',
            }}>
            Question 2
          </Text>
          <View
            style={{
              borderRadius: 5,
              borderWidth: 1,
              borderColor: '#000',
              overflow: 'hidden',
              height: 60,
              paddingTop: 7,
              backgroundColor: 'transparent',
              marginTop: 5,
            }}>
            <Picker
              selectedValue={selectedCategory}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedCategory(itemValue)
              }
              style={{height: 40, borderBottomWidth: 2, color: '#000'}}>
              <Picker.Item label="Choose Question" value="" />
              <Picker.Item
                label="What was your childhood nickname?"
                value="All"
              />
              <Picker.Item
                label="What was your favorite sport in high school?"
                value="Meal"
              />
              <Picker.Item
                label="What was the name of the company where you had your first job?"
                value="Spirits"
              />
            </Picker>
          </View>
        </View>
        <View style={{marginBottom: 10}}>
          <Text
            style={{
              //fontFamily: 'Poppins-Medium',
              fontSize: 12,
              color: '#575757',
            }}>
            Answer
          </Text>
          <TextInput
            placeholder="Answer"
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
        <View style={{marginBottom: 10}}>
          <Text
            style={{
              //fontFamily: 'Poppins-Medium',
              fontSize: 12,
              color: '#575757',
            }}>
            Question 3
          </Text>
          <View
            style={{
              borderRadius: 5,
              borderWidth: 1,
              borderColor: '#000',
              overflow: 'hidden',
              height: 60,
              paddingTop: 7,
              backgroundColor: 'transparent',
              marginTop: 5,
            }}>
            <Picker
              selectedValue={selectedCategory}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedCategory(itemValue)
              }
              style={{height: 40, borderBottomWidth: 2, color: '#000'}}>
              <Picker.Item label="Choose Question" value="" />
              <Picker.Item
                label="What was your childhood nickname?"
                value="All"
              />
              <Picker.Item
                label="What was your favorite sport in high school?"
                value="Meal"
              />
              <Picker.Item
                label="What was the name of the company where you had your first job?"
                value="Spirits"
              />
            </Picker>
          </View>
        </View>
        <View style={{marginBottom: 10}}>
          <Text
            style={{
              //fontFamily: 'Poppins-Medium',
              fontSize: 12,
              color: '#575757',
            }}>
            Answer
          </Text>
          <TextInput
            placeholder="Answer"
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

        {/* <View style={{marginBottom: 10}}>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: 12,
              color: '#575757',
            }}>
            Please enter your Wallet PIN to confirm your identity
          </Text>
          <TextInput
            placeholder="Please enter wallet PIN"
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
        </View> */}
        {/*  */}
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
        {/* <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: 14,
              color: '#575757',
            }}>
            If you forgot your password, then
          </Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('ResetPassword')}>
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
            to go to Reset Password form.
          </Text>
        </View> */}
        {/*  */}

        <View
          style={{
            marginTop: 20,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
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
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Login')}
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  recoverAccount: {
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  recoverText: {
    color: '#421D0B',
  },
  line: {
    height: 1,
    borderWidth: 1,
    borderStyle: 'dashed',
    width: '100%',
    borderColor: '#DCDCDC',
    marginBottom: 20,
  },
});

export default RecoverAccount;
