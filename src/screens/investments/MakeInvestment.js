/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState, useRef} from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  FlatList,
  Pressable,
  Button,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import {
  getInvestmentPackage,
  makeInvestment,
  setInitialStateNullInvestment,
} from '../../store/actions';
import {CUR_SYMB, POST_LOGIN_BG} from '../../config/Constants';
import {LoaderIndicator, NoDataList} from '../../components';
import Colors from '../../config/Colors';
import Styles from '../../css/Styles';
import BreadcrumbBlock from '../../components/BreadcrumbBlock';
import Modal from 'react-native-modal';
import Toast from 'react-native-simple-toast';
const MakeInvestment = props => {
  const inputRef = useRef(null);
  const {
    loading,
    get_Packages,
    investment_packages,
    submitData,
    status_success,
    status_message,
    set_initialStateNull,
    user_data,
    investmentWalBal,
  } = props;

  const [currentVisible, setCurrentVisible] = useState(null);
  const [walletType] = useState('Investment Wallet');
  const [packageId, setPackageId] = useState('');
  const [walletPassword, setWalletPassword] = useState('');

  const [walletPasswordError, setWalletPasswordError] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    get_Packages();
  }, []);

  const handleSubmit = () => {
    if (walletPassword != '') {
      toggleModal();
      setWalletPasswordError('');
      // console.log('====', packageId, '=====', walletPassword);
      submitData(packageId, walletPassword);
    } else {
      walletPassword == ''
        ? setWalletPasswordError('Wallet Password is required.')
        : null;
    }
  };

  const onChangePackageId = value => {
    setPackageId(value);
    toggleModal();
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    if (status_success === true) {
      set_initialStateNull();
      setPackageId('');
      setWalletPassword('');
      props.navigation.navigate('StatusScreen', {
        msg: status_message,
      });
    } else if (status_success === false) {
      set_initialStateNull();
      Toast.show(status_message, Toast.LONG);
    }
  }, [status_success, status_message]);

  const Item = ({items, props}) => (
    <View
      style={{
        paddingHorizontal: 14,
        height: hp('40%'),
        width: wp('80%'),
        marginTop: '5%',
        marginBottom: '5%',
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: Colors.containerBg1,
        borderBottomWidth: 10,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomColor:
          items.id === '1'
            ? Colors.package1
            : items.id === '2'
            ? Colors.package2
            : items.id === '3'
            ? Colors.package3
            : items.id === '4'
            ? Colors.package4
            : items.id === '5'
            ? Colors.package5
            : items.id === '6'
            ? Colors.package6
            : items.id === '7'
            ? Colors.package7
            : Colors.package8,
      }}>
      <View
        style={{
          width: wp('80%'),
          height: wp('20%'),
          backgroundColor:
            items.id === '1'
              ? Colors.package1
              : items.id === '2'
              ? Colors.package2
              : items.id === '3'
              ? Colors.package3
              : items.id === '4'
              ? Colors.package4
              : items.id === '5'
              ? Colors.package5
              : items.id === '6'
              ? Colors.package6
              : items.id === '7'
              ? Colors.package7
              : Colors.package8,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontFamily: 'Poppins-SemiBold',
            fontSize: 20,
            color: '#FFF',
          }}>
          {items.package_name} {items.id}
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-SemiBold',
            fontSize: 20,
            color: '#FFF',
          }}>
          {CUR_SYMB}
          {items.package_start_amount}
        </Text>
      </View>
      <View style={{width: '100%', marginTop: 30}}>
        <Text style={{...Styles.inputBoxLabel, fontSize: 12}}>
          Select Wallet*
        </Text>
        <TextInput
          style={{...Styles.inputBox, height: hp('6%'), fontSize: 16}}
          mode="outlined"
          value={walletType}
        />
        <Pressable
          onPress={() => onChangePackageId(items.id)}
          style={{
            ...Styles.ctaButton,
            paddingVertical: hp('1%'),
            marginTop: 10,
          }}>
          <Text style={Styles.ctaButtonText}>Pay Now</Text>
        </Pressable>
      </View>
    </View>
  );
  const renderItem = ({item}) => <Item items={item} props={props} />;
  return loading ? (
    <LoaderIndicator />
  ) : (
    <View style={{flexGrow: 1}}>
      <ImageBackground
        source={POST_LOGIN_BG}
        resizeMode="stretch"
        style={styles.image}>
        <View style={{...Styles.secondContainerView, flex: 1}}>
          <BreadcrumbBlock first={'Investment'} second={'Make Investment'} />
          <Text
            style={{
              ...Styles.title1,
              color: Colors.appHeaderTitleMain,
              fontSize: hp('2%'),
            }}>
            Current Package: {user_data?.member_plan_name}
          </Text>
          <Text
            style={{
              ...Styles.title1,
              color: Colors.appHeaderTitleMain,
              fontSize: hp('2%'),
            }}>
            Available Wallet Balance: {CUR_SYMB}
            {investmentWalBal.investment_wallet_balance}
          </Text>
          {investment_packages && investment_packages.length > 0 ? (
            <FlatList
              contentContainerStyle={{flexGrow: 1}}
              data={investment_packages ? investment_packages : []}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          ) : (
            <NoDataList message={'No data available.'} />
          )}
        </View>
      </ImageBackground>
      <Modal
        isVisible={isModalVisible}
        animationIn={'fadeIn'}
        animationOut={'fadeOut'}
        animationInTiming={300}
        animationOutTiming={300}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <View
            style={{
              marginHorizontal: 20,
              backgroundColor: Colors.containerBg1,
              borderWidth: 1,
              borderColor: Colors.textInputBorder,
              borderRadius: 5,
              padding: 15,
              // alignItems: 'flex-start',
              shadowColor: '#fff',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
              width: wp('90%'),
              height: hp('30%'),
              marginBottom: 40,
              justifyContent: 'center',
            }}>
            <Text style={{...Styles.inputBoxLabel, fontSize: 12}}>
              Wallet Password*
            </Text>
            <TextInput
              secureTextEntry={true}
              style={{
                ...Styles.inputBox,
                // height: hp('4%'),
                // fontSize: 12,
                width: '100%',
              }}
              mode="outlined"
              onChangeText={value => setWalletPassword(value)}
              value={walletPassword}
            />
            {walletPasswordError ? (
              <Text style={Styles.errorText}>{walletPasswordError}</Text>
            ) : null}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
              }}>
              <Pressable
                onPress={() => handleSubmit()}
                style={{
                  ...Styles.ctaButton,
                  paddingVertical: 8,
                  paddingHorizontal: 30,
                  alignSelf: 'center',
                }}>
                <Text style={Styles.ctaButtonText}>Submit</Text>
              </Pressable>
              <Pressable
                onPress={() => toggleModal()}
                style={{
                  ...Styles.ctaButton,
                  paddingVertical: 8,
                  paddingHorizontal: 30,
                  alignSelf: 'center',
                  marginLeft: 20,
                }}>
                <Text style={Styles.ctaButtonText}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  graybox: {
    paddingHorizontal: 14,
    height: hp('100%'),
    width: wp('86%'),
    alignSelf: 'center',
    flexDirection: 'column',
  },
  base: {},
  baseTop: {
    borderBottomWidth: 35,
    borderBottomColor: 'red',
    borderLeftWidth: 50,
    borderLeftColor: 'transparent',
    borderRightWidth: 50,
    borderRightColor: 'transparent',
    height: 0,
    width: 0,
    left: 0,
    // top: -35,
    position: 'absolute',
  },
  baseBottom: {
    backgroundColor: 'red',
    height: 55,
    width: 100,
  },
});
const mapDispatchToProps = dispatch => ({
  set_initialStateNull: () => dispatch(setInitialStateNullInvestment()),
  get_Packages: () => dispatch(getInvestmentPackage()),
  submitData: (packageId, walletPassword) =>
    dispatch(makeInvestment(packageId, walletPassword)),
});

const mapStateToProps = state => {
  console.log('here is on my investments', state);
  return {
    status: state.investments.status,
    loading: state.investments.loading,
    status_success: state.investments.success,
    status_message: state.investments.message,
    investment_packages: state.investments.investmentPackages,
    user_data: state.auth.user,
    investmentWalBal: state.wallet.investmentWB,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MakeInvestment);
