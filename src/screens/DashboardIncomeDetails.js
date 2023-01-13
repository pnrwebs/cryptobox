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
  Platform,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import {getDashboardIncomeDetail} from '../store/actions';
import LoaderIndicator from '../components/LoaderIndicator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CUR_SYMB, DATE_FORMAT} from '../config/Constants';
import Colors from '../config/Colors';
import Styles from '../css/Styles';
import BreadcrumbBlock from '../components/BreadcrumbBlock';
import {ScrollView} from 'react-native-gesture-handler';
import moment from 'moment';
const DashboardIncomeDetails = props => {
  const {loading, get_DashboardIncomeDetails, dashboard_income} = props;
  useEffect(() => {
    get_DashboardIncomeDetails();
  }, []);
  return loading ? (
    <LoaderIndicator />
  ) : (
    <ScrollView style={styles.container} contentContainerStyle={{flexGrow: 1}}>
      <ImageBackground
        source={require('../assets/img/after-login-bg.png')}
        resizeMode="stretch"
        style={styles.image}>
        <View style={Styles.secondContainerView}>
          <BreadcrumbBlock first={'Dashboard'} second={'Income Details'} />

          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Pressable style={styles.box1}>
              <Text style={{...styles.text, fontSize: 15}}>
                {CUR_SYMB}
                {dashboard_income && dashboard_income.member_total_investment
                  ? dashboard_income.member_total_investment
                  : '0'}
              </Text>
              <Text style={styles.text}>My Total</Text>
              <Text style={{...styles.text, lineHeight: 16}}>investments</Text>
            </Pressable>
            <Pressable style={styles.box1}>
              <Text style={{...styles.text, fontSize: 15}}>
                {' '}
                {CUR_SYMB}
                {dashboard_income &&
                dashboard_income.member_accumulative_earning
                  ? dashboard_income.member_accumulative_earning
                  : '0'}
              </Text>
              <Text style={styles.text}>Accumulative </Text>
              <Text style={{...styles.text, lineHeight: 16}}>earnings</Text>
            </Pressable>
            <Pressable style={styles.box1}>
              <Text style={{...styles.text, fontSize: 15}}>
                {' '}
                {CUR_SYMB}
                {dashboard_income && dashboard_income.member_current_investment
                  ? dashboard_income.member_current_investment
                  : '0'}
              </Text>
              <Text style={styles.text}>my current </Text>
              <Text style={{...styles.text, lineHeight: 16}}>investments</Text>
            </Pressable>
          </View>
          <View
            style={{
              marginTop: 5,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Pressable style={styles.box1}>
              <Text
                style={{
                  ...styles.text,
                  fontSize: 15,
                }}>
                {CUR_SYMB}
                {dashboard_income &&
                dashboard_income.member_current_earning_remaining_count
                  ? dashboard_income.member_current_earning_remaining_count
                  : '0'}
              </Text>
              <Text style={styles.text}>earning </Text>
              <Text style={{...styles.text, lineHeight: 16}}>remaining</Text>
            </Pressable>
            <Pressable style={styles.box1}>
              <Text style={{...styles.text, fontSize: 15}}>
                {CUR_SYMB}
                {dashboard_income &&
                dashboard_income.member_maximum_earning_count
                  ? dashboard_income.member_maximum_earning_count
                  : '0'}
              </Text>
              <Text style={styles.text}>maximum </Text>
              <Text style={{...styles.text, lineHeight: 16}}>earning</Text>
            </Pressable>
            <Pressable style={styles.box1}>
              <Text style={{...styles.text, fontSize: 15}}>
                {CUR_SYMB}
                {dashboard_income &&
                dashboard_income.member_current_earning_count
                  ? dashboard_income.member_current_earning_count
                  : '0'}
              </Text>
              <Text style={styles.text}>my current </Text>
              <Text style={{...styles.text, lineHeight: 16}}>earning</Text>
            </Pressable>
          </View>
          <View style={{marginTop: 10}}>
            <Pressable style={{...styles.listItem}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Icon name="cash-fast" color={Colors.icons} size={60} />

                <View style={{width: '80%', alignItems: 'center'}}>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 16,
                    }}>
                    ROI ( 0.4 - 0.5 %) : - {CUR_SYMB}
                    {dashboard_income && dashboard_income.ROI
                      ? dashboard_income.ROI
                      : '0'}
                  </Text>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    Accumulated ROI Income
                  </Text>
                  <Pressable
                    style={styles.btnExplore}
                    onPress={() => props.navigation.navigate('ROIIncome')}>
                    <Text
                      style={{
                        color: Colors.icons,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      Explore
                    </Text>
                  </Pressable>
                </View>
              </View>
            </Pressable>
            <Pressable style={{...styles.listItem}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Icon name="cash-multiple" color={Colors.icons} size={60} />

                <View style={{width: '80%', alignItems: 'center'}}>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 16,
                    }}>
                    MCUPI ( 0.8 - 3.5 % ) : - {CUR_SYMB}
                    {dashboard_income && dashboard_income.MCUPI
                      ? dashboard_income.MCUPI
                      : '0'}
                  </Text>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    Monthly Corporate Unit{'\n'} Performance Income
                  </Text>
                  <Pressable
                    style={styles.btnExplore}
                    onPress={() =>
                      props.navigation.navigate('CorporatePerformanceIncome')
                    }>
                    <Text
                      style={{
                        color: Colors.icons,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      Explore
                    </Text>
                  </Pressable>
                </View>
              </View>
            </Pressable>
            <Pressable style={{...styles.listItem}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Icon name="currency-usd" color={Colors.icons} size={60} />

                <View style={{width: '80%', alignItems: 'center'}}>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 16,
                    }}>
                    WMPI ( 0.5 - 3.5 %) : - {CUR_SYMB}
                    {dashboard_income && dashboard_income.WMPI
                      ? dashboard_income.WMPI
                      : '0'}
                  </Text>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    Weekly Management {'\n'}Performance Income
                  </Text>
                  <Pressable
                    style={styles.btnExplore}
                    onPress={() =>
                      props.navigation.navigate('ManagementPerformanceIncome')
                    }>
                    <Text
                      style={{
                        color: Colors.icons,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      Explore
                    </Text>
                  </Pressable>
                </View>
              </View>
            </Pressable>
            <Pressable style={{...styles.listItem}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Icon name="family-tree" color={Colors.icons} size={60} />

                <View style={{width: '80%', alignItems: 'center'}}>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 16,
                    }}>
                    VPSI ( 1 - 21 % ) : - {CUR_SYMB}
                    {dashboard_income && dashboard_income.VPSI
                      ? dashboard_income.VPSI
                      : '0'}
                  </Text>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    Variable Performance Share Income
                  </Text>
                  <Pressable
                    style={styles.btnExplore}
                    onPress={() =>
                      props.navigation.navigate('PerformanceIncome')
                    }>
                    <Text
                      style={{
                        color: Colors.icons,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      Explore
                    </Text>
                  </Pressable>
                </View>
              </View>
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
  box1: {
    height: hp('14%'),
    width: wp('31.5%'),
    backgroundColor: '#333333',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ac7703',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 1 : 5,
    },
    shadowOpacity: Platform.OS === 'ios' ? 0.2 : 5,
    shadowRadius: 2.22,
    elevation: 4,
  },
  box2: {
    height: hp('16.36%'),
    width: wp('47%'),
    backgroundColor: '#080604',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ac7703',
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 1 : 5,
    },
    shadowOpacity: Platform.OS === 'ios' ? 0.2 : 5,
    shadowRadius: 2.22,
    elevation: 4,
  },
  text: {
    color: Colors.fontColor1,
    fontFamily: 'Poppins-Medium',
    marginTop: 5,
    textTransform: 'capitalize',
  },
  listItem: {
    // height: hp('10%'),
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: '#707070',
    borderRadius: 5,
    justifyContent: 'center',
    marginBottom: 10,
  },
  btnExplore: {
    marginTop: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ac7703',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 5,
    shadowColor: '#ac7703',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 1 : 5,
    },
    shadowOpacity: Platform.OS === 'ios' ? 0.2 : 3,
    shadowRadius: 2,
    elevation: 1,
  },
});
const mapDispatchToProps = dispatch => ({
  get_DashboardIncomeDetails: () => dispatch(getDashboardIncomeDetail()),
});

const mapStateToProps = state => {
  console.log('here is on dashboard income', state);
  return {
    status: state.incomereport.status,
    loading: state.incomereport.loading,
    dashboard_income: state.incomereport.dashboardincomedetails,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardIncomeDetails);
