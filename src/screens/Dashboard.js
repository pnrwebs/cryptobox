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
} from 'react-native';
import {connect} from 'react-redux';
import {reloadAllWalletBalance} from '../store/actions';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LoaderIndicator from '../components/LoaderIndicator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/Fontisto';
import Colors from '../config/Colors';
import Styles from '../css/Styles';
import BreadcrumbBlockDashboard from '../components/BreadcrumbBlockDashboard';
import DashboardSocialIcons from '../components/DashboardSocialIcons';
import {ScrollView} from 'react-native-gesture-handler';

const Dashboard = props => {
  const {loading, users, dash_data, get_reloadWalletBalance} = props;
  useEffect(() => {
    get_reloadWalletBalance();
  }, []);
  return loading ? (
    <LoaderIndicator />
  ) : (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={require('../assets/img/after-login-bg.png')}
        resizeMode="stretch"
        style={styles.image}>
        <View style={Styles.secondContainerView}>
          <BreadcrumbBlockDashboard
            servertime={
              dash_data && dash_data.timer ? dash_data.timer : new Date()
            }
          />
          <View style={{marginTop: 10}}>
            <DashboardSocialIcons />
          </View>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Pressable style={styles.box1}>
              <Icon name="account-circle" color={Colors.icons} size={48} />
              <Text style={styles.text}>Account Details</Text>
              <Text style={{...styles.text, color: '#fffb90'}}>
                {users && users.member_username ? users.member_username : ''}
              </Text>
            </Pressable>
            <Pressable style={styles.box1}>
              <Icon name="account-search" color={Colors.icons} size={48} />
              <Text style={styles.text}>Account Status</Text>
              <Text style={{...styles.text, color: '#fffb90'}}>
                {users && users.member_account_status
                  ? users.member_account_status
                  : ''}
              </Text>
            </Pressable>
            <Pressable style={styles.box1}>
              <Icon name="trophy" color={Colors.icons} size={48} />
              <Text style={styles.text}>Current Rank</Text>
              <Text style={{...styles.text, color: '#fffb90'}}>
                {' '}
                {users && users.member_rank ? users.member_rank : ''}
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Pressable
              style={styles.box2}
              onPress={() =>
                props.navigation.navigate('DashboardIncomeDetails')
              }>
              <Icon name="finance" color={Colors.icons} size={70} />
              <Text style={styles.text}>Income Details</Text>
            </Pressable>
            <Pressable
              style={styles.box2}
              onPress={() => props.navigation.navigate('WalletBalance')}>
              <Icon1 name="wallet" color={Colors.icons} size={70} />
              <Text style={styles.text}>Wallet Balance</Text>
            </Pressable>
          </View>

          <Pressable
            onPress={() => props.navigation.navigate('LastWeekFastTrack')}
            style={{
              ...styles.box2,
              width: wp('98%'),
              marginTop: 10,
              flexDirection: 'row',
              paddingHorizontal: 35,
            }}>
            <View style={{width: '30%'}}>
              <Icon name="gift" color={Colors.icons} size={70} />
            </View>
            <View style={{width: '70%'}}>
              <Text
                style={{
                  color: '#d2ccb4',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 20,
                  textAlign: 'center',
                }}>
                Last Week Fast Track Bonus Qualifier{' '}
              </Text>
            </View>
          </Pressable>

          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Pressable
              style={styles.box2}
              onPress={() => props.navigation.navigate('TeamLeverage')}>
              <Icon name="cash-multiple" color={Colors.icons} size={50} />
              <Text
                style={{
                  ...styles.text,
                  fontFamily: 'Poppins-Medium',
                  fontSize: 20,
                  marginBottom: -5,
                }}>
                {dash_data && dash_data.premium_group_balance_count
                  ? dash_data.premium_group_balance_count
                  : ''}
              </Text>
              <Text style={styles.text}>Premium Group</Text>
            </Pressable>
            <Pressable
              style={styles.box2}
              onPress={() => props.navigation.navigate('TeamLeverage')}>
              <Icon name="account-group" color={Colors.icons} size={50} />
              <Text
                style={{
                  ...styles.text,
                  fontFamily: 'Poppins-Medium',
                  fontSize: 20,
                  marginBottom: -5,
                }}>
                {dash_data && dash_data.standard_group_balance_count
                  ? dash_data.standard_group_balance_count
                  : ''}
              </Text>
              <Text style={styles.text}>Standered Group</Text>
            </Pressable>
          </View>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Pressable
              style={styles.box2}
              onPress={() => props.navigation.navigate('MyLeverage')}>
              <Icon name="finance" color={Colors.icons} size={50} />
              <Text
                style={{
                  ...styles.text,
                  fontFamily: 'Poppins-Medium',
                  fontSize: 20,
                  marginBottom: -5,
                }}>
                {dash_data && dash_data.direct_member_count
                  ? dash_data.direct_member_count
                  : ''}
              </Text>
              <Text style={styles.text}>My Leverage</Text>
            </Pressable>
            <Pressable
              style={styles.box2}
              onPress={() => props.navigation.navigate('TeamLeverage')}>
              <Icon name="account-multiple" color={Colors.icons} size={50} />
              <Text
                style={{
                  ...styles.text,
                  fontFamily: 'Poppins-Medium',
                  fontSize: 20,
                  marginBottom: -5,
                }}>
                {dash_data && dash_data.downline_member_count
                  ? dash_data.downline_member_count
                  : ''}
              </Text>
              <Text style={styles.text}>Team Leverage</Text>
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
    width: wp('31%'),
    backgroundColor: '#080604',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ac7703',
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 5,
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
      height: 5,
    },
    shadowOpacity: 5,
    shadowRadius: 2.22,
    elevation: 4,
  },
  text: {
    color: Colors.fontColor1,
    fontFamily: 'Poppins-Light',
    marginTop: 5,
  },
});
const mapDispatchToProps = dispatch => ({
  get_reloadWalletBalance: () => dispatch(reloadAllWalletBalance()),
});
const mapStateToProps = state => {
  console.log('here on dashboard', state);
  return {
    status: state.auth.status,
    loading: state.auth.loading,
    users: state.auth.user,
    dash_data: state.auth.dashboard,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
