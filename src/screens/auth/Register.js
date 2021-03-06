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
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import {
  initSignUP,
  setInitialStateNullAuth,
  getCountryList,
} from '../../store/actions/Auth';
import LoaderIndicator from '../../components/LoaderIndicator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../config/Colors';
import Styles from '../../css/Styles';
import CheckBox from '@react-native-community/checkbox';
import Toast from 'react-native-simple-toast';
import DropDownPicker from 'react-native-dropdown-picker';
import {Countries as cntryLst} from '../../config/Countries';

const Register = props => {
  const {
    loading,
    status,
    process_signup,
    status_success,
    status_message,
    set_initialStateNull,
    user_data,
    get_CountryList,
    countryList_resp,
  } = props;

  const [sponsor, setSponsor] = useState('');
  const [username, setUsername] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loginpass, setLoginPass] = useState('');
  const [walletpass, setWalletPass] = useState('');
  const [country, setCountry] = useState('');

  const [sponsorError, setSponsorError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [firstnameError, setFirstnameError] = useState('');
  const [lastnameError, setLastnameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [loginpassError, setLoginPassError] = useState('');
  const [walletpassError, setWalletPassError] = useState('');
  const [countryError, setCountryError] = useState('');
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(cntryLst);

  const handleSignup = () => {
    console.log(
      'hello',
      sponsor,
      username,
      firstname,
      lastname,
      email,
      phone,
      loginpass,
      walletpass,
      country,
    );
    if (
      sponsor != '' &&
      username != '' &&
      firstname != '' &&
      lastname != '' &&
      email != '' &&
      phone != '' &&
      loginpass != '' &&
      walletpass != '' &&
      country != ''
    ) {
      setSponsorError('');
      setUsernameError('');
      setFirstnameError('');
      setLastnameError('');
      setEmailError('');
      setPhoneError('');
      setLoginPassError('');
      setWalletPassError('');
      setCountryError('');

      process_signup(
        sponsor,
        username,
        firstname,
        lastname,
        email,
        phone,
        loginpass,
        walletpass,
        country,
      );
    } else {
      sponsor == '' ? setSponsorError('Sponsor field is required.') : null;
      username == '' ? setUsernameError('Username field is required.') : null;
      firstname == ''
        ? setFirstnameError('Firstname field is required.')
        : null;
      lastname == '' ? setLastnameError('Lastname field is required.') : null;
      email == '' ? setEmailError('Email field is required.') : null;
      phone == '' ? setPhoneError('Phone field is required.') : null;
      loginpass == ''
        ? setLoginPassError('Login Password field is required.')
        : null;
      walletpass == ''
        ? setWalletPassError('Wallet Password field is required.')
        : null;
      country == '' ? setCountryError('Country field is required.') : null;
    }
  };

  useEffect(() => {
    if (status_success === true) {
      set_initialStateNull();
      props.navigation.navigate('RegistrationSuccessfull', {user: user_data});
    } else if (status_success === false) {
      set_initialStateNull();
      Toast.show(status_message, Toast.LONG);
    }
  }, [status_success, status_message]);

  return loading ? (
    <LoaderIndicator />
  ) : (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/img/register-bg.png')}
        resizeMode="stretch"
        style={styles.image}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              marginTop: 20,
              padding: 20,
              marginBottom: 20,
            }}>
            <Text style={Styles.title1}>Registration</Text>
            <View style={{marginTop: 40}}>
              <TextInput
                placeholder="Sponsor*"
                style={Styles.inputBox}
                placeholderTextColor={Colors.inputPlaceholder}
                onChangeText={value => setSponsor(value)}
                value={sponsor}
              />
              {sponsorError ? (
                <Text style={Styles.errorText}>{sponsorError}</Text>
              ) : null}
              <TextInput
                placeholder="User Name*"
                style={Styles.inputBox}
                placeholderTextColor={Colors.inputPlaceholder}
                onChangeText={value => setUsername(value)}
                value={username}
              />
              {usernameError ? (
                <Text style={Styles.errorText}>{usernameError}</Text>
              ) : null}
              <TextInput
                placeholder="First Name*"
                style={Styles.inputBox}
                placeholderTextColor={Colors.inputPlaceholder}
                onChangeText={value => setFirstname(value)}
                value={firstname}
              />
              {firstnameError ? (
                <Text style={Styles.errorText}>{firstnameError}</Text>
              ) : null}
              <TextInput
                placeholder="Last Name*"
                style={Styles.inputBox}
                placeholderTextColor={Colors.inputPlaceholder}
                onChangeText={value => setLastname(value)}
                value={lastname}
              />
              {lastnameError ? (
                <Text style={Styles.errorText}>{lastnameError}</Text>
              ) : null}
              <TextInput
                keyboardType="email-address"
                placeholder="Email Address*"
                style={Styles.inputBox}
                placeholderTextColor={Colors.inputPlaceholder}
                onChangeText={value => setEmail(value)}
                value={email}
              />
              {emailError ? (
                <Text style={Styles.errorText}>{emailError}</Text>
              ) : null}
              <TextInput
                keyboardType="number-pad"
                placeholder="Phone Number"
                style={Styles.inputBox}
                placeholderTextColor={Colors.inputPlaceholder}
                onChangeText={value => setPhone(value)}
                value={phone}
              />
              {phoneError ? (
                <Text style={Styles.errorText}>{phoneError}</Text>
              ) : null}
              <TextInput
                placeholder="Create Login Password*"
                style={Styles.inputBox}
                secureTextEntry={true}
                placeholderTextColor={Colors.inputPlaceholder}
                onChangeText={value => setLoginPass(value)}
                value={loginpass}
              />
              {loginpassError ? (
                <Text style={Styles.errorText}>{loginpassError}</Text>
              ) : null}
              <TextInput
                placeholder="Create Wallet Password*"
                style={Styles.inputBox}
                secureTextEntry={true}
                placeholderTextColor={Colors.inputPlaceholder}
                onChangeText={value => setWalletPass(value)}
                value={walletpass}
              />
              {walletpassError ? (
                <Text style={Styles.errorText}>{walletpassError}</Text>
              ) : null}
              {/* <TextInput
                autoCapitalize="words"
                placeholder="Country*"
                style={Styles.inputBox}
                placeholderTextColor={Colors.inputPlaceholder}
                onChangeText={value => setCountry(value)}
                value={country}
              /> */}
              <DropDownPicker
                placeholder="Select Country"
                placeholderStyle={{
                  color: 'white',
                  fontWeight: 'bold',
                }}
                dropDownContainerStyle={{
                  backgroundColor: Colors.primaryBlue,
                  borderWidth: 1,
                  borderColor: Colors.textInputBorder,
                }}
                itemSeparator={true}
                listItemLabelStyle={{
                  color: '#FFF',
                }}
                selectedItemLabelStyle={{fontWeight: 'bold', color: '#FFF'}}
                textStyle={{
                  fontSize: 15,
                  color: '#FFF',
                }}
                open={open}
                value={value}
                items={
                  cntryLst
                    ? cntryLst.map(ctry => ({
                        label: ctry.value,
                        value: ctry.value,
                      }))
                    : []
                }
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                onSelectItem={item => setCountry(item.value)}
                style={Styles.inputBox}
                searchable={true}
                searchPlaceholderTextColor="white"
                searchPlaceholder="Type to search"
                searchTextInputProps={{
                  ...Styles.inputBox,
                  height: 40,
                  marginBottom: 0,
                }}
              />
              {countryError ? (
                <Text style={Styles.errorText}>{countryError}</Text>
              ) : null}
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 10,
                }}>
                <CheckBox
                  disabled={false}
                  value={checked}
                  onValueChange={newValue => setChecked(newValue)}
                />
                <Text
                  style={{
                    color: '#F2D097',
                    fontSize: hp('2%'),
                    marginRight: 6,
                  }}>
                  I agree to the terms and conditions.
                </Text>
              </View>
              <Pressable
                onPress={() => handleSignup()}
                style={{
                  paddingVertical: hp('1.5%'),
                  borderRadius: 5,
                  borderWidth: 2,
                  borderColor: Colors.primaryButtonBorder,
                  backgroundColor: Colors.primaryButton,
                  marginBottom: 30,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: '#fff',
                    textAlign: 'center',
                    fontFamily: 'Poppins-Regular',
                    fontSize: 16,
                  }}>
                  CREATE ACCOUNT
                </Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
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
});
const mapDispatchToProps = dispatch => ({
  get_CountryList: () => dispatch(getCountryList()),
  set_initialStateNull: () => dispatch(setInitialStateNullAuth()),
  process_signup: (
    sponsor,
    username,
    firstname,
    lastname,
    email,
    phone,
    loginpass,
    walletpass,
    country,
  ) =>
    dispatch(
      initSignUP(
        sponsor,
        username,
        firstname,
        lastname,
        email,
        phone,
        loginpass,
        walletpass,
        country,
      ),
    ),
});

const mapStateToProps = state => {
  console.log('here is signup', state.auth);
  return {
    status: state.auth.status,
    user: state.auth.user,
    loading: state.auth.loading,
    status_success: state.auth.success,
    status_message: state.auth.message,
    user_data: state.auth.signupdata,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
