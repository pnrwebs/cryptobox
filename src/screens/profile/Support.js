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
  submitSupportRequest,
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
import {color} from 'react-native-reanimated';
import Toast from 'react-native-simple-toast';
const Support = props => {
  const {
    loading,
    submitData,
    status_success,
    status_message,
    set_initialStateNull,
  } = props;
  const [subject, setSubject] = useState('');
  const [query, setQuery] = useState('');

  const [subjectError, setSubjectError] = useState('');
  const [queryError, setQueryError] = useState('');
  const [valueError, setValueError] = useState('');

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'General', value: 'General'},
    {label: 'Technical', value: 'Technical'},
    {label: 'Accounts', value: 'Accounts'},
    {label: 'Deposit', value: 'Deposit'},
    {label: 'Withdrawal', value: 'Withdrawal'},
    {label: 'Bonus', value: 'Bonus'},
    {label: 'Income Plan', value: 'Income Plan'},
  ]);

  const handleSubmit = () => {
    if (value != '' && subject != '' && query != '') {
      submitData(value, subject, query);
    } else {
      value == null ? setValueError('Category is required.') : null;
      subject == '' ? setSubjectError('Subject is required.') : null;
      query == '' ? setQueryError('Query is required.') : null;
    }
  };

  useEffect(() => {
    if (status_success === true) {
      set_initialStateNull();
      setSubject('');
      setQuery('');
      props.navigation.navigate('MyTicketHistory');
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
              position: 'relative',
              alignItems: 'center',
              height: hp('29%'),
            }}>
            <Image
              source={require('../../assets/img/support-title-bg.png')}
              style={{
                width: wp('97%'),
                position: 'absolute',
              }}
            />
            <Text
              style={{
                color: '#FFF',
                fontFamily: 'Poppins-Bold',
                fontSize: 35,
                top: 95,
                left: '50%',
                position: 'absolute',
              }}>
              Support
            </Text>
          </View>
          <BreadcrumbBlock first={'Profile'} second={props.route.name} />
          <View style={{marginTop: 10, marginBottom: 10}}>
            <Text style={{...Styles.title1, color: Colors.appHeaderTitleMain}}>
              CREATE SUPPORT REQUEST
            </Text>
          </View>
          <View
            style={{
              backgroundColor: Colors.containerBg1,
              paddingHorizontal: 14,
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
              Generate support request
            </Text>
            <View>
              <Text style={Styles.inputBoxLabel}>Select Request category*</Text>
              <DropDownPicker
                placeholder="Select an item"
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
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                style={Styles.inputBox}
              />
              {valueError ? (
                <Text style={Styles.errorText}>{valueError}</Text>
              ) : null}
            </View>
            <View>
              <Text style={Styles.inputBoxLabel}>Enter Subject*</Text>
              <TextInput
                style={Styles.inputBox}
                mode="outlined"
                onChangeText={value => setSubject(value)}
                value={subject}
              />
              {subjectError ? (
                <Text style={Styles.errorText}>{subjectError}</Text>
              ) : null}
            </View>
            <View>
              <Text style={Styles.inputBoxLabel}>Enter Query*</Text>
              <TextInput
                style={Styles.inputBoxMultiline}
                mode="outlined"
                multiline={true}
                numberOfLines={4}
                onChangeText={value => setQuery(value)}
                value={query}
              />
              {queryError ? (
                <Text style={Styles.errorText}>{queryError}</Text>
              ) : null}
            </View>
            <Pressable onPress={() => handleSubmit()} style={Styles.ctaButton}>
              <Text style={Styles.ctaButtonText}>Generate Request</Text>
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
  set_initialStateNull: () => dispatch(setInitialStateNullProfile()),
  submitData: (value, subject, query) =>
    dispatch(submitSupportRequest(value, subject, query)),
});

const mapStateToProps = state => {
  console.log('here is on my support', state);
  return {
    status: state.profile.status,
    loading: state.profile.loading,
    status_success: state.profile.success,
    status_message: state.profile.message,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Support);
