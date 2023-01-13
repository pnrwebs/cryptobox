import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, TextInput, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Styles from '../css/Styles';
import Colors from '../config/Colors';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';
import {sendEmailOTP} from '../store/actions';

const ValidateOTPModal = props => {
  const {
    modalStatus,
    handleUSDTValidation,
    handleCancel,
    loading,
    send_otp_on_email,
    sentotp,
    screenName,
    setIsEditable,
  } = props;
  const navigation = useNavigation();
  const [hasOTP, setOTP] = useState('');
  const [hasOTPError, setOTPError] = useState('');

  const [isModalVisible, setModalVisible] = useState(false);
  const handleSubmit = () => {
    // setTimeout(console.log('here is navigation', navigation), 6000);
    console.log('hasOTP', hasOTP, sentotp);
    if (hasOTP !== '') {
      console.log('hasOTP1', hasOTP, sentotp);
      if (hasOTP == parseInt(sentotp)) {
        console.log('hasOTP2', hasOTP, sentotp);
        handleUSDTValidation();
        console.log('hasOTP', hasOTP);
        setOTPError('');
        setOTP('');
        if (screenName !== null) {
          navigation.navigate(screenName);
        } else {
          setIsEditable(true);
        }
      } else {
        setOTPError('Wrong OTP, Please enter again.');
      }
    } else {
      setOTPError('Please enter a valid OTP.');
    }
  };

  useEffect(() => {
    console.log('modalStatus', modalStatus);
    modalStatus ? send_otp_on_email() : null;
  }, [modalStatus]);

  return (
    <Modal
      isVisible={modalStatus}
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
          <Text
            style={{...Styles.inputBoxLabel, fontSize: 12, marginBottom: 10}}>
            Please enter OTP sent on your email*
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
            onChangeText={value => setOTP(value)}
            value={hasOTP}
          />
          {hasOTPError ? (
            <Text style={Styles.errorText}>{hasOTPError}</Text>
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
              onPress={() => handleCancel()}
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
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 'auto',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

const mapDispatchToProps = dispatch => ({
  // set_initialStateNull: () => dispatch(setInitialStateNullReward()),
  send_otp_on_email: () => dispatch(sendEmailOTP()),
});
const mapStateToProps = state => {
  console.log('on send otp popup fund', state);
  return {
    status: state.verifyotp.status,
    loading: state.verifyotp.loading,
    sentotp: state.verifyotp.sendotpstatus,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ValidateOTPModal);
