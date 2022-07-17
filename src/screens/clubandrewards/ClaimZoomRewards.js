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
import {connect} from 'react-redux';
import {
  claimMDTXReward,
  setInitialStateNullReward,
  getROIOnOff,
} from '../../store/actions';
import {POST_LOGIN_BG} from '../../config/Constants';
import LoaderIndicator from '../../components/LoaderIndicator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../config/Colors';
import Styles from '../../css/Styles';
import {ScrollView} from 'react-native-gesture-handler';
import BreadcrumbBlock from '../../components/BreadcrumbBlock';
import Toast from 'react-native-simple-toast';
const ClaimZoomRewards = props => {
  const {
    loading,
    submitData,
    status_success,
    status_message,
    claimData_resp,
    set_initialStateNull,
    dash_data,
    get_ROIOnOff,
    on_off_status,
  } = props;
  const [currentDate] = useState('2022-07-06 08:57:25');
  const [selection] = useState({start: 0, end: 0});

  const [zoomUsername, setZoomUsername] = useState('');
  const [sixDigitZoomFlashCode, setSixDigitZoomFlashCode] = useState('');
  const [mdtxWalletAddress, setMdtxWalletAddress] = useState(
    '0xBa27944738BcE91ADCe1449055e867Ab52DCaBec',
  );
  const [walletPassword, setWalletPassword] = useState('');

  const [zoomUsernameError, setZoomUsernameError] = useState('');
  const [sixDigitZoomFlashCodeError, setSixDigitZoomFlashCodeError] =
    useState('');
  const [mdtxWalletAddressError, setMdtxWalletAddressError] = useState('');
  const [walletPasswordError, setWalletPasswordError] = useState('');

  const handleSubmit = () => {
    if (
      zoomUsername != '' &&
      sixDigitZoomFlashCode != '' &&
      mdtxWalletAddress != '' &&
      walletPassword != ''
    ) {
      submitData(
        zoomUsername,
        sixDigitZoomFlashCode,
        mdtxWalletAddress,
        walletPassword,
      );
    } else {
      zoomUsername == ''
        ? setZoomUsernameError('Zoom username is required.')
        : null;
      sixDigitZoomFlashCode == ''
        ? setSixDigitZoomFlashCodeError(
            'Six digit zoom flash code is required.',
          )
        : null;
      mdtxWalletAddress == ''
        ? setMdtxWalletAddressError('MDTX wallet address is required.')
        : null;
      walletPassword == ''
        ? setWalletPasswordError('Wallet password is required.')
        : null;
    }
  };
  useEffect(() => {
    if (status_success === true) {
      set_initialStateNull();
      props.navigation.navigate('AddFundStatus', {
        showData: claimData_resp,
      });
    } else if (status_success === false) {
      set_initialStateNull();
      Toast.show(claimData_resp, Toast.LONG);
    }
  }, [status_success, claimData_resp]);

  useEffect(() => {
    get_ROIOnOff();
  }, []);
  return loading ? (
    <LoaderIndicator />
  ) : (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <ImageBackground
        source={POST_LOGIN_BG}
        resizeMode="stretch"
        style={styles.image}>
        <View style={Styles.secondContainerView}>
          <BreadcrumbBlock first={'Club & Rewards'} second={props.route.name} />
          <View style={{marginTop: 10, marginBottom: 10}}>
            <Text style={{...Styles.title1, color: Colors.appHeaderTitleMain}}>
              Claim MDTX Reward
            </Text>
          </View>
          {on_off_status && on_off_status.current_status === 1 ? (
            <View
              style={{
                backgroundColor: Colors.containerBg1,
                paddingHorizontal: 14,
                paddingVertical: 10,
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Light',
                  fontSize: 16,
                  color: '#b8b8b8',
                  textAlign: 'center',
                  marginBottom: 10,
                  marginTop: 10,
                }}>
                {dash_data && dash_data.timer ? dash_data.timer : new Date()}
              </Text>
              <View>
                <Text style={Styles.inputBoxLabel}>
                  Enter Your Zoom Username*
                </Text>
                <TextInput
                  style={Styles.inputBox}
                  mode="outlined"
                  onChangeText={value => setZoomUsername(value)}
                  value={zoomUsername}
                />
                {zoomUsernameError ? (
                  <Text style={Styles.errorText}>{zoomUsernameError}</Text>
                ) : null}
              </View>
              <View>
                <Text style={Styles.inputBoxLabel}>
                  Enter Six Digit Zoom Flash Code*
                </Text>
                <TextInput
                  keyboardType="number-pad"
                  style={Styles.inputBox}
                  mode="outlined"
                  onChangeText={value => setSixDigitZoomFlashCode(value)}
                  value={sixDigitZoomFlashCode}
                />
                {sixDigitZoomFlashCodeError ? (
                  <Text style={Styles.errorText}>
                    {sixDigitZoomFlashCodeError}
                  </Text>
                ) : null}
              </View>
              <View>
                <Text style={Styles.inputBoxLabel}>
                  Enter MDTX Wallet Address*
                </Text>
                <TextInput
                  style={Styles.inputBox}
                  mode="outlined"
                  // value="0xBa27944738BcE91ADCe1449055e867Ab52DCaBec"
                  selection={selection}
                  onChangeText={value => setMdtxWalletAddress(value)}
                  value={mdtxWalletAddress}
                />
                {mdtxWalletAddressError ? (
                  <Text style={Styles.errorText}>{mdtxWalletAddressError}</Text>
                ) : null}
              </View>
              <View>
                <Text style={Styles.inputBoxLabel}>Enter Wallet Password*</Text>
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

              <Pressable
                onPress={() => handleSubmit()}
                style={Styles.ctaButton}>
                <Text style={Styles.ctaButtonText}>Claim</Text>
              </Pressable>
            </View>
          ) : (
            <View style={{marginTop: 10, marginBottom: 10}}>
              <Text
                style={{
                  ...Styles.title1,
                  color: Colors.appHeaderTitleMain,
                  textTransform: 'capitalize',
                }}>
                Zoom reward claim time expired. Kindly try in next zoom meeting.
              </Text>
            </View>
          )}
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
});
const mapDispatchToProps = dispatch => ({
  set_initialStateNull: () => dispatch(setInitialStateNullReward()),
  get_ROIOnOff: () => dispatch(getROIOnOff()),
  submitData: (
    zoomUsername,
    sixDigitZoomFlashCode,
    mdtxWalletAddress,
    walletPassword,
  ) =>
    dispatch(
      claimMDTXReward(
        zoomUsername,
        sixDigitZoomFlashCode,
        mdtxWalletAddress,
        walletPassword,
      ),
    ),
});

const mapStateToProps = state => {
  console.log('here is on claim reward', state);
  return {
    dash_data: state.auth.dashboard,
    loading: state.rewards.loading,
    status_success: state.rewards.success,
    status_message: state.rewards.message,
    claimData_resp: state.rewards.claimRewardResp,
    on_off_status: state.rewards.open_status,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClaimZoomRewards);
