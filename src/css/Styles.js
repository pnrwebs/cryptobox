import {StyleSheet, Dimensions, Platform} from 'react-native';
import Colors from '../config/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.containerBg,
  },
  secondContainerView: {
    marginHorizontal: 5,
    marginVertical: 10,
  },
  headline: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#000000',
  },
  errorText: {
    // marginLeft: 20,
    color: 'red',
    marginTop: -10,
    marginBottom: 10,
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
  title1: {
    color: '#F2D097',
    fontSize: hp('2.5%'),
    fontFamily: 'Poppins-Medium',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  inputBoxMultiline: {
    height: hp('14%'),
    paddingLeft: 10,
    borderWidth: 1.5,
    borderRadius: 5,
    borderColor: Colors.textInputBorder,
    fontSize: 18,
    letterSpacing: 0,
    backgroundColor: 'transparent',
    color: Colors.white,
    marginBottom: 20,
    textAlignVertical: 'top',
  },
  inputBox: {
    height: hp('6.2%'),
    paddingLeft: 10,
    borderWidth: 1.5,
    borderRadius: 5,
    borderColor: Colors.textInputBorder,
    fontSize: 18,
    letterSpacing: 0,
    backgroundColor: 'transparent',
    color: Colors.white,
    marginBottom: 20,
  },
  inputBoxLabel: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: Colors.inputTextLabel,
    marginBottom: 5,
  },
  ctaButton: {
    paddingVertical: hp('1.5%'),
    borderRadius: 5,
    borderWidth: 2,
    borderColor: Colors.primaryButtonBorder,
    backgroundColor: Colors.primaryButton,
    marginBottom: 30,
    justifyContent: 'center',
  },
  ctaButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
  dividerLine: {
    color: '#BABFC4',
    borderWidth: 0.2,
    width: '95%',
    alignSelf: 'center',
  },
});
