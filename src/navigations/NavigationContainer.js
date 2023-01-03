import React, {useEffect, useState} from 'react';
import {
  NavigationContainer,
  useNavigation,
  DrawerActions,
} from '@react-navigation/native';
import {
  View,
  useWindowDimensions,
  StatusBar,
  Image,
  StyleSheet,
  Pressable,
  Platform,
} from 'react-native';
import Animated from 'react-native-reanimated';

import Colors from '../config/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

const AuthStack = createStackNavigator();

// Navigator
import DrawerContent from './DrawerContent';

const HomeStack = createStackNavigator();
const DashboardDrawer = createDrawerNavigator();

// Screens
import ImageSplashScreen from '../screens/ImageSplashScreen';

import {
  Login,
  Register,
  RegistrationSuccessfull,
  ForgotPassword,
  VerifyEmailOTP,
  VerifyGoogleAuth,
} from '../screens/auth';

import {
  Dashboard,
  DashboardIncomeDetails,
  WalletBalance,
  StatusScreen,
  LastWeekFastTrack,
  CurrentWeekFastTrack,
} from '../screens';

import {
  Support,
  POSCard,
  ChangePasswords,
  UpdateProfile,
  SubAccounts,
  MyTicketHistory,
  MyTicketDetails,
  ReferToFriends,
  UpdateEmail,
  UpdateEmailOtp,
  TwoFASetting,
  DeleteAccountRequest,
} from '../screens/profile';
import {KnowledgeCenter, KnowledgeDetails} from '../screens/knowledgecenter';
import {
  MonthlyRankingClub,
  LifetimeRankingReward,
  LifetimeRankingRewardDetails,
  ClaimZoomRewards,
  ZoomRewardList,
  CryptoboxRewards,
} from '../screens/clubandrewards';

import {
  MyLeverage,
  MyLeverageDetails,
  TeamLeverage,
  TeamLeverageDetails,
} from '../screens/leverage';

import {
  ManagementPerformanceIncome,
  PerformanceIncome,
  CorporatePerformanceIncome,
  ROIIncome,
  BusinessFlushReport,
  LevelwisePerformanceIncome,
  LevelwisePerformanceIncomeStep1,
  LevelwisePerformanceIncomeStep2,
  WeekwisePerformanceIncome,
  WeekwisePerformanceIncomeStep1,
} from '../screens/incomereport';

import {
  MyInvestment,
  MakeInvestment,
  MyCompoundingInvestment,
} from '../screens/investments';

import {
  AddFundToWallet,
  AddFundHistory,
  AddFundViaMDTX,
  AddFundViaUSDT,
  WithdrawalFund,
  TrasnferFundToOther,
  WithdrawalHistory,
  InvestmentWalletHistory,
  CashWalletHistory,
  TransferFundReport,
  AddFundStatus,
  WithdrawalRequestUSDT,
  WithdrawalRequestMDTX,
  TransferFundToInvestmentWallet,
  WithdrawInvestInCompounding,
  WithdrawalFundStatus,
} from '../screens/wallet';

const HeaderLeft = () => {
  const navigation = useNavigation();
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Pressable
        onPress={() => {
          navigation.dispatch(DrawerActions.openDrawer());
        }}>
        <Icon
          name="format-align-left"
          type="material-community"
          color={Colors.appHeaderIcon}
          size={28}
          style={{marginLeft: 20}}
        />
      </Pressable>
    </View>
  );
};

const HeaderRight = () => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate('NewsList')}>
      <Icon
        name="bell-outline"
        type="material-community"
        color={Colors.appHeaderIcon}
        size={28}
        style={{marginRight: 20}}
      />
    </Pressable>
  );
};

const HomeStackNav = props => {
  const navigation = useNavigation();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: true,
          tabBarLabel: 'Dashboard',
          title: 'Cryptobox',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleMain,
          headerTitleAlign: 'center',
          headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="DashboardIncomeDetails"
        component={DashboardIncomeDetails}
        options={{
          headerShown: true,
          title: 'Income Details',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="WalletBalance"
        component={WalletBalance}
        options={{
          headerShown: true,
          title: 'Wallet Balance',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="Support"
        component={Support}
        options={{
          headerShown: true,
          title: 'Support',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="POSCard"
        component={POSCard}
        options={{
          headerShown: true,
          title: 'POS Card',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="ChangePasswords"
        component={ChangePasswords}
        options={{
          headerShown: true,
          title: 'Change Passwords',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="UpdateProfile"
        component={UpdateProfile}
        options={{
          headerShown: true,
          title: 'Update Profile',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="SubAccounts"
        component={SubAccounts}
        options={{
          headerShown: true,
          title: 'Sub Accounts',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="MyTicketHistory"
        component={MyTicketHistory}
        options={{
          headerShown: true,
          title: 'My Ticket History',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="MyTicketDetails"
        component={MyTicketDetails}
        options={{
          headerShown: true,
          title: 'My Ticket Details',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="ReferToFriends"
        component={ReferToFriends}
        options={{
          headerShown: true,
          title: 'Invite Friends',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="DeleteAccountRequest"
        component={DeleteAccountRequest}
        options={{
          headerShown: true,
          title: 'Delete Account Request',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="UpdateEmail"
        component={UpdateEmail}
        options={{
          headerShown: true,
          title: 'Update Email',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="UpdateEmailOtp"
        component={UpdateEmailOtp}
        options={{
          headerShown: true,
          title: 'Enter OTP',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="TwoFASetting"
        component={TwoFASetting}
        options={{
          headerShown: true,
          title: '2FA Setting',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="KnowledgeCenter"
        component={KnowledgeCenter}
        options={{
          headerShown: true,
          title: 'Knowledge Center',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="KnowledgeDetails"
        component={KnowledgeDetails}
        options={{
          headerShown: true,
          title: 'Knowledge Description',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="MonthlyRankingClub"
        component={MonthlyRankingClub}
        options={{
          headerShown: true,
          title: 'Monthly Ranking Club',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="LifetimeRankingReward"
        component={LifetimeRankingReward}
        options={{
          headerShown: true,
          title: 'Lifetime Ranking Reward',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="LifetimeRankingRewardDetails"
        component={LifetimeRankingRewardDetails}
        options={{
          headerShown: true,
          title: 'Lifetime Ranking Reward Details',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="ClaimZoomRewards"
        component={ClaimZoomRewards}
        options={{
          headerShown: true,
          title: 'Claim Zoom Rewards',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="ZoomRewardList"
        component={ZoomRewardList}
        options={{
          headerShown: true,
          title: 'Zoom Reward List',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="CryptoboxRewards"
        component={CryptoboxRewards}
        options={{
          headerShown: true,
          title: 'Cryptobox Rewards',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="MyLeverage"
        component={MyLeverage}
        options={{
          headerShown: true,
          title: 'My Leverage',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="MyLeverageDetails"
        component={MyLeverageDetails}
        options={{
          headerShown: true,
          title: 'My Laverage Details',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="TeamLeverage"
        component={TeamLeverage}
        options={{
          headerShown: true,
          title: 'Team Leverage',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="TeamLeverageDetails"
        component={TeamLeverageDetails}
        options={{
          headerShown: true,
          title: 'Team Leverage Details',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="ManagementPerformanceIncome"
        component={ManagementPerformanceIncome}
        options={{
          headerShown: true,
          title: 'Management Performance Income',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="PerformanceIncome"
        component={PerformanceIncome}
        options={{
          headerShown: true,
          title: 'Performance Income',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="CorporatePerformanceIncome"
        component={CorporatePerformanceIncome}
        options={{
          headerShown: true,
          title: 'Corporate Performance Income',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="ROIIncome"
        component={ROIIncome}
        options={{
          headerShown: true,
          title: 'ROI Income',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="BusinessFlushReport"
        component={BusinessFlushReport}
        options={{
          headerShown: true,
          title: 'Business Flush Report',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="LevelwisePerformanceIncome"
        component={LevelwisePerformanceIncome}
        options={{
          headerShown: true,
          title: 'Levelwise Performance Income',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="LevelwisePerformanceIncomeStep1"
        component={LevelwisePerformanceIncomeStep1}
        options={{
          headerShown: true,
          title: 'Levelwise Performance Income',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="LevelwisePerformanceIncomeStep2"
        component={LevelwisePerformanceIncomeStep2}
        options={{
          headerShown: true,
          title: 'Performance Income',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="WeekwisePerformanceIncome"
        component={WeekwisePerformanceIncome}
        options={{
          headerShown: true,
          title: 'Weekwise Performance Income',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="WeekwisePerformanceIncomeStep1"
        component={WeekwisePerformanceIncomeStep1}
        options={{
          headerShown: true,
          title: 'Weekwise Performance Income',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="MyInvestment"
        component={MyInvestment}
        options={{
          headerShown: true,
          title: 'My Investment',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="MakeInvestment"
        component={MakeInvestment}
        options={{
          headerShown: true,
          title: 'Make Investment',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />

      <HomeStack.Screen
        name="MyCompoundingInvestment"
        component={MyCompoundingInvestment}
        options={{
          headerShown: true,
          title: 'Compounding Investment',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="AddFundToWallet"
        component={AddFundToWallet}
        options={{
          headerShown: true,
          title: 'Add Fund To Wallet',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="AddFundHistory"
        component={AddFundHistory}
        options={{
          headerShown: true,
          title: 'Add Fund History',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="AddFundViaMDTX"
        component={AddFundViaMDTX}
        options={{
          headerShown: true,
          title: 'Add Fund Via MDTX',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="AddFundViaUSDT"
        component={AddFundViaUSDT}
        options={{
          headerShown: true,
          title: 'Add Fund Via USDT',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="WithdrawalFund"
        component={WithdrawalFund}
        options={{
          headerShown: true,
          title: 'Withdrawal Fund',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="TrasnferFundToOther"
        component={TrasnferFundToOther}
        options={{
          headerShown: true,
          title: 'Trasnfer Fund To Other',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="WithdrawalHistory"
        component={WithdrawalHistory}
        options={{
          headerShown: true,
          title: 'Withdrawal History',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="InvestmentWalletHistory"
        component={InvestmentWalletHistory}
        options={{
          headerShown: true,
          title: 'Investment Wallet History',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="CashWalletHistory"
        component={CashWalletHistory}
        options={{
          headerShown: true,
          title: 'Cash Wallet History',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="TransferFundReport"
        component={TransferFundReport}
        options={{
          headerShown: true,
          title: 'Transfer Fund Report',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="StatusScreen"
        component={StatusScreen}
        options={{
          headerShown: true,
          title: 'Status',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="AddFundStatus"
        component={AddFundStatus}
        options={{
          headerShown: true,
          title: 'Add Fund Status',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="WithdrawalFundStatus"
        component={WithdrawalFundStatus}
        options={{
          headerShown: true,
          title: 'Withdrawal Detail',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="WithdrawalRequestUSDT"
        component={WithdrawalRequestUSDT}
        options={{
          headerShown: true,
          title: 'Withdrawal Request USDT',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="WithdrawalRequestMDTX"
        component={WithdrawalRequestMDTX}
        options={{
          headerShown: true,
          title: 'Withdrawal Request MDTX',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="WithdrawInvestInCompounding"
        component={WithdrawInvestInCompounding}
        options={{
          headerShown: true,
          title: 'Buy Compounding Package',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="TransferFundToInvestmentWallet"
        component={TransferFundToInvestmentWallet}
        options={{
          headerShown: true,
          title: 'Transfer To Investment Wallet',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="LastWeekFastTrack"
        component={LastWeekFastTrack}
        options={{
          headerShown: true,
          title: 'Fast Track Qualifier',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
      <HomeStack.Screen
        name="CurrentWeekFastTrack"
        component={CurrentWeekFastTrack}
        options={{
          headerShown: true,
          title: 'Current Week Qualifier',
          showIcon: true,
          headerStyle: styles.headers,
          headerTintColor: Colors.appHeaderTitleOther,
          headerTitleAlign: 'center',
          // headerLeft: ({}) => <HeaderLeft />,
          // headerRight: ({}) => <HeaderRight />,
        }}
      />
    </HomeStack.Navigator>
  );
};
const HomeDrawer = props => {
  const [deviceOrientation, setDeviceOrientation] = useState('PORTRAIT');
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;

  return (
    <>
      <StatusBar barStyle="light-content" hidden={false} />
      <DashboardDrawer.Navigator
        overlayColor="transparent"
        drawerStatusBarAnimation="slide"
        // screenOptions={{
        //   drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
        // }}
        drawerContent={props => (
          <DrawerContent
            {...props}
            drawerStyle={isLargeScreen ? null : {width: '80%'}}
          />
        )}
        screenOptions={{
          drawerStyle: {
            width: '80%',
            marginTop: Platform.OS === 'ios' ? 0 : 56,
            backgroundColor: Colors.drawerBackground,
          },
          drawerType: 'front',
        }}>
        <DashboardDrawer.Screen
          name="Home"
          component={HomeStackNav}
          options={{
            headerShown: false,
          }}
        />
      </DashboardDrawer.Navigator>
    </>
  );
};

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="ImageSplashScreen"
          component={ImageSplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <AuthStack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <AuthStack.Screen
          name="VerifyEmailOTP"
          component={VerifyEmailOTP}
          options={{
            headerShown: false,
          }}
        />
        <AuthStack.Screen
          name="VerifyGoogleAuth"
          component={VerifyGoogleAuth}
          options={{
            headerShown: false,
          }}
        />
        <AuthStack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
          }}
        />
        <AuthStack.Screen
          name="RegistrationSuccessfull"
          component={RegistrationSuccessfull}
          options={{
            headerShown: false,
          }}
        />
        <AuthStack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            headerShown: false,
          }}
        />
        <AuthStack.Screen
          name="Dashboard"
          component={HomeDrawer}
          options={{
            headerShown: false,
          }}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headers: {
    backgroundColor: Colors.appheaderbg,
    // borderBottomWidth: 1,
    // borderBottomColor: Colors.icons,
    // borderBottomLeftRadius: 15,
    // borderBottomRightRadius: 15,
    height: Platform.OS === 'ios' ? 100 : 70,
    // borderBottomWidth: 1,
    // shadowColor: 'yellow',
  },
});
