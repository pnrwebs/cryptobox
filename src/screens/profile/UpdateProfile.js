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
import {connect} from 'react-redux';
import {
  submitUpdateProfile,
  setInitialStateNullProfile,
} from '../../store/actions';
import {POST_LOGIN_BG} from '../../config/Constants';
import LoaderIndicator from '../../components/LoaderIndicator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../config/Colors';
import Styles from '../../css/Styles';
import {ScrollView} from 'react-native-gesture-handler';
import BreadcrumbBlock from '../../components/BreadcrumbBlock';
import DropDownPicker from 'react-native-dropdown-picker';
import Toast from 'react-native-simple-toast';
import {Countries as cntryLst} from '../../config/Countries';
const UpdateProfile = props => {
  const {
    loading,
    submitData,
    status_success,
    status_message,
    user_data,
    set_initialStateNull,
  } = props;
  const [firstname, setFirstname] = useState(
    user_data.member_first_name ? user_data.member_first_name : '',
  );
  const [lastname, setLastname] = useState(
    user_data.member_last_name ? user_data.member_last_name : '',
  );
  const [email, setEmail] = useState(
    user_data.member_email ? user_data.member_email : '',
  );
  const [mobile, setMobile] = useState(
    user_data.member_contact ? user_data.member_contact : '',
  );
  const [country, setCountry] = useState(
    user_data.member_country ? user_data.member_country : '',
  );
  const [usdtAddress, setUsdtAddress] = useState(
    user_data.member_bitcoin_address ? user_data.member_bitcoin_address : '',
  );
  const [mdtxAddress, setMdtxAddress] = useState(
    user_data.mdt_wallet_address ? user_data.mdt_wallet_address : '',
  );
  const [walletPassword, setWalletPassword] = useState('');

  const [firstnameError, setFirstnameError] = useState('');
  const [lastnameError, setLastnameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [countryError, setCountryError] = useState('');
  const [usdtAddressError, setUsdtAddressError] = useState('');
  const [mdtxAddressError, setMdtxAddressError] = useState('');
  const [walletPasswordError, setWalletPasswordError] = useState('');

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(cntryLst);
  const handleSubmit = () => {
    if (
      firstname != '' &&
      lastname != '' &&
      mobile != '' &&
      email != ' ' &&
      country != '' &&
      usdtAddress != '' &&
      mdtxAddress != '' &&
      walletPassword != ''
    ) {
      submitData(
        firstname,
        lastname,
        mobile,
        email,
        walletPassword,
        mdtxAddress,
        usdtAddress,
        country,
      );
    } else {
      firstname == '' ? setFirstnameError('First name is required.') : null;
      lastname == '' ? setLastnameError('Last name is required.') : null;
      mobile == '' ? setMobileError('Mobile is required.') : null;
      email == '' ? setEmailError('Email address is required.') : null;
      country == '' ? setCountryError('Country is required.') : null;
      usdtAddress == ''
        ? setUsdtAddressError('USDT address is required.')
        : null;
      mdtxAddress == ''
        ? setMdtxAddressError('MDTX Address is required.')
        : null;
      walletPassword == ''
        ? setWalletPasswordError('Wallet password is required.')
        : null;
    }
  };

  useEffect(() => {
    if (status_success === true) {
      set_initialStateNull();
      props.navigation.navigate('StatusScreen', {
        msg: 'Profile information has been updated successfully!!!',
      });
    } else if (status_success === false) {
      set_initialStateNull();
      Toast.show(status_message, Toast.LONG);
    }
  }, [status_success, status_message]);
  return loading ? (
    <LoaderIndicator />
  ) : (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <ImageBackground
        source={POST_LOGIN_BG}
        resizeMode="stretch"
        style={styles.image}>
        <View style={Styles.secondContainerView}>
          <View
            style={{
              backgroundColor: Colors.containerBg1,
              width: wp('98%'),
              height: hp('8%'),
              marginBottom: 3,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 30,
            }}>
            <Icon name="account-circle" color={Colors.icons} size={48} />
            <Text
              style={{
                color: '#b8b8b8',
                fontSize: 25,
                fontFamily: 'Poppins-Medium',
              }}>
              Profile Update
            </Text>
            <Icon name="drag-vertical" color={'#b8b8b8'} size={68} />
          </View>
          <BreadcrumbBlock first={'Profile'} second={props.route.name} />
          <View
            style={{
              backgroundColor: Colors.containerBg1,
              paddingHorizontal: 14,
              paddingVertical: 10,
            }}>
            <View>
              <Text style={Styles.inputBoxLabel}>First Name*</Text>
              <TextInput
                style={Styles.inputBox}
                mode="outlined"
                onChangeText={value => setFirstname(value)}
                value={firstname}
              />
              {firstnameError ? (
                <Text style={Styles.errorText}>{firstnameError}</Text>
              ) : null}
            </View>
            <View>
              <Text style={Styles.inputBoxLabel}>Last Name*</Text>
              <TextInput
                style={Styles.inputBox}
                mode="outlined"
                onChangeText={value => setLastname(value)}
                value={lastname}
              />
              {lastnameError ? (
                <Text style={Styles.errorText}>{lastnameError}</Text>
              ) : null}
            </View>
            <View>
              <Text style={Styles.inputBoxLabel}>Email ID*</Text>
              <TextInput
                style={{
                  ...Styles.inputBox,
                  backgroundColor: Colors.disabled,
                  color: '#000',
                }}
                mode="outlined"
                onChangeText={value => setEmail(value)}
                value={email}
                editable={false}
              />
              {emailError ? (
                <Text style={Styles.errorText}>{emailError}</Text>
              ) : null}
            </View>
            <View>
              <Text style={Styles.inputBoxLabel}>Mobile Number*</Text>
              <TextInput
                keyboardType="number-pad"
                style={Styles.inputBox}
                mode="outlined"
                onChangeText={value => setMobile(value)}
                value={mobile}
              />
              {mobileError ? (
                <Text style={Styles.errorText}>{mobileError}</Text>
              ) : null}
            </View>
            <View>
              <Text style={Styles.inputBoxLabel}>Country*</Text>
              {/* <TextInput
                style={Styles.inputBox}
                mode="outlined"
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
                value={country}
                items={
                  cntryLst
                    ? cntryLst.map(ctry => ({
                        label: ctry.value,
                        value: ctry.value,
                      }))
                    : []
                }
                defaultValue={country}
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
            </View>
            <View>
              <Text style={Styles.inputBoxLabel}>USDT TRC20 Address*</Text>
              <TextInput
                style={Styles.inputBox}
                mode="outlined"
                onChangeText={value => setUsdtAddress(value)}
                value={usdtAddress}
              />
              {usdtAddressError ? (
                <Text style={Styles.errorText}>{usdtAddressError}</Text>
              ) : null}
            </View>
            <View>
              <Text style={Styles.inputBoxLabel}>
                MDTX (BEP20) Wallet Address*
              </Text>
              <TextInput
                style={Styles.inputBox}
                mode="outlined"
                onChangeText={value => setMdtxAddress(value)}
                value={mdtxAddress}
              />
              {mdtxAddressError ? (
                <Text style={Styles.errorText}>{mdtxAddressError}</Text>
              ) : null}
            </View>
            <View>
              <Text style={Styles.inputBoxLabel}>Enter wallet password*</Text>
              <TextInput
                secureTextEntry={true}
                style={Styles.inputBox}
                mode="outlined"
                onChangeText={value => setWalletPassword(value)}
                value={walletPassword}
              />
              {walletPasswordError ? (
                <Text style={Styles.errorText}>{walletPasswordError}</Text>
              ) : null}
            </View>

            <Pressable onPress={() => handleSubmit()} style={Styles.ctaButton}>
              <Text style={Styles.ctaButtonText}>Submit</Text>
            </Pressable>
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
});
const mapDispatchToProps = dispatch => ({
  set_initialStateNull: () => dispatch(setInitialStateNullProfile()),
  submitData: (
    firstname,
    lastname,
    mobile,
    email,
    walletPassword,
    mdtxAddress,
    usdtAddress,
    country,
  ) =>
    dispatch(
      submitUpdateProfile(
        firstname,
        lastname,
        mobile,
        email,
        walletPassword,
        mdtxAddress,
        usdtAddress,
        country,
      ),
    ),
});

const mapStateToProps = state => {
  console.log('here is on update profile', state);
  return {
    status: state.auth.status,
    loading: state.auth.loading,
    status_success: state.auth.success,
    status_message: state.auth.message,
    user_data: state.auth.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);
