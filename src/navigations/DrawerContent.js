import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {initLogout} from '../store/actions';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Title, Caption, Drawer, Divider} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {CUR_SYMB} from '../config/Constants';
import LoaderIndicator from '../components/LoaderIndicator';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../config/Colors';
import moment from 'moment';
import RNRestart from 'react-native-restart';

const DrawerContent = props => {
  const {users, loading, logout_the_app, getlogout} = props;
  const [isSubNav, setIsSubNav] = useState('');
  const [isSubNavSub, setIsSubNavSub] = useState('');

  const toggleMenu = value => {
    isSubNav === value ? setIsSubNav('') : setIsSubNav(value);
  };

  const toggleMenuSub = value => {
    isSubNavSub === value ? setIsSubNavSub('') : setIsSubNavSub(value);
  };

  async function handleLogout() {
    await AsyncStorage.removeItem('user_id').then(user_id => {
      RNRestart.Restart();
    });
  }

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
                justifyContent: 'space-between',
                paddingRight: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    backgroundColor: Colors.icons,
                    height: 50,
                    width: 50,
                    borderRadius: 25,
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                  }}>
                  <Text
                    style={{
                      fontSize: 24,
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Regular',
                    }}>
                    {users && users.member_first_name
                      ? users.member_first_name.charAt(0).toUpperCase()
                      : ''}
                    {users && users.member_last_name
                      ? users.member_last_name.charAt(0).toUpperCase()
                      : ''}
                  </Text>

                  {/* <Icon
                    name="cog"
                    color={'#FC9D2E'}
                    size={26}
                    style={{position: 'absolute', bottom: -6, right: -8}}
                    onPress={() => {
                      props.navigation.navigate('Profile');
                    }}
                  /> */}
                </View>

                <View style={{marginLeft: 15, flexDirection: 'column'}}>
                  <Title style={styles.title}>
                    {users && users.member_first_name
                      ? users.member_first_name.toUpperCase()
                      : ''}{' '}
                    {users && users.member_last_name
                      ? users.member_last_name.toUpperCase()
                      : ''}
                  </Title>
                  {/* <Caption style={styles.caption}>
                    Email id:{' '}
                    {users && users.member_email ? users.member_email : ''}
                  </Caption> */}
                  <Caption style={styles.caption}>
                    Member Id:{' '}
                    {users && users.member_user_id ? users.member_user_id : ''}
                  </Caption>
                </View>
              </View>
              {/* <Icon
                name="backburger"
                color={'#4f3cb2'}
                size={30}
                style={{right: 0}}
                onPress={() => {
                  props.navigation.closeDrawer();
                }}
              /> */}
            </View>
          </View>
          <Divider
            style={{
              borderWidth: 0.3,
              width: '100%',
              marginTop: 10,
              borderColor: '#252627',
            }}
          />
          <Drawer.Section style={styles.drawerSection}>
            <TouchableOpacity
              onPress={() => toggleMenu('Item1')}
              style={styles.drawerMainMenu}>
              <View style={{width: '80%'}}>
                <DrawerItem
                  icon={({size}) => (
                    <Icon name="home" color={Colors.icons} size={34} />
                  )}
                  label="Home"
                  onPress={() => {
                    props.navigation.navigate('Dashboard');
                  }}
                  labelStyle={styles.menuLabel}
                />
              </View>
            </TouchableOpacity>

            {/* <Divider style={styles.dividerLine} /> */}
            <TouchableOpacity
              onPress={() => toggleMenu('Item2')}
              style={styles.drawerMainMenu}>
              <View style={{width: '80%'}}>
                <DrawerItem
                  onPress={() => {
                    props.navigation.navigate('SettingsDashboardMenu');
                  }}
                  icon={({size}) => (
                    <Icon name="wallet" color={Colors.icons} size={34} />
                  )}
                  label={`Wallet (${CUR_SYMB})`}
                  labelStyle={styles.menuLabel}
                />
              </View>
              <View style={{width: '20%', alignItems: 'flex-end'}}>
                {isSubNav === 'Item2' ? (
                  <Icon name="chevron-down" color={Colors.icons} size={32} />
                ) : (
                  <Icon name="chevron-right" color={Colors.icons} size={32} />
                )}
              </View>
            </TouchableOpacity>
            {isSubNav === 'Item2' ? (
              <View
                style={{
                  paddingLeft: '18%',
                  backgroundColor: Colors.drawerSubSection,
                  marginHorizontal: 10,
                  borderRadius: 5,
                  // paddingVertical: 10,
                }}>
                <DrawerItem
                  label="Add Fund To Wallet"
                  labelStyle={styles.subMenuLabel}
                  // style={{bottom: -10}}
                  onPress={() => {
                    props.navigation.navigate('AddFundToWallet');
                  }}
                />
                <DrawerItem
                  label="Add Fund History"
                  labelStyle={styles.subMenuLabel}
                  onPress={() => {
                    props.navigation.navigate('AddFundHistory');
                  }}
                />
                <DrawerItem
                  label="Withdraw Fund"
                  labelStyle={styles.subMenuLabel}
                  onPress={() => {
                    props.navigation.navigate('WithdrawalFund');
                  }}
                />
                <DrawerItem
                  label="Withdrawal History"
                  labelStyle={styles.subMenuLabel}
                  onPress={() => {
                    props.navigation.navigate('WithdrawalHistory');
                  }}
                />
                <DrawerItem
                  label="Investment Wallet History"
                  labelStyle={styles.subMenuLabel}
                  onPress={() => {
                    props.navigation.navigate('InvestmentWalletHistory');
                  }}
                />
                <DrawerItem
                  label="Cash Wallet History"
                  labelStyle={styles.subMenuLabel}
                  onPress={() => {
                    props.navigation.navigate('CashWalletHistory');
                  }}
                />
                <DrawerItem
                  label="Transfer Fund To Other"
                  labelStyle={styles.subMenuLabel}
                  onPress={() => {
                    props.navigation.navigate('TrasnferFundToOther');
                  }}
                />
                <DrawerItem
                  label="Transfer Fund Report"
                  labelStyle={styles.subMenuLabel}
                  onPress={() => {
                    props.navigation.navigate('TransferFundReport');
                  }}
                />
              </View>
            ) : null}
            {/* <Divider style={styles.dividerLine} /> */}
            <TouchableOpacity
              onPress={() => toggleMenu('Item3')}
              style={styles.drawerMainMenu}>
              <View style={{width: '80%'}}>
                <DrawerItem
                  // onPress={() => {
                  //   props.navigation.navigate('SettingsDashboardMenu');
                  // }}
                  icon={({size}) => (
                    <Icon
                      name="chart-areaspline"
                      color={Colors.icons}
                      size={34}
                    />
                  )}
                  label="Investments"
                  labelStyle={styles.menuLabel}
                />
              </View>
              <View style={{width: '20%', alignItems: 'flex-end'}}>
                {isSubNav === 'Item3' ? (
                  <Icon name="chevron-down" color={Colors.icons} size={32} />
                ) : (
                  <Icon name="chevron-right" color={Colors.icons} size={32} />
                )}
              </View>
            </TouchableOpacity>
            {isSubNav === 'Item3' ? (
              <View
                style={{
                  paddingLeft: '18%',
                  backgroundColor: Colors.drawerSubSection,
                  marginHorizontal: 10,
                  borderRadius: 5,
                  // paddingVertical: 10,
                }}>
                <DrawerItem
                  label="My Investment"
                  labelStyle={styles.subMenuLabel}
                  // style={{bottom: -10}}
                  onPress={() => {
                    props.navigation.navigate('MyInvestment');
                  }}
                />
                <DrawerItem
                  label="Make Investment"
                  labelStyle={styles.subMenuLabel}
                  onPress={() => {
                    props.navigation.navigate('MakeInvestment');
                  }}
                />
                <DrawerItem
                  label="Compounding Investment"
                  labelStyle={styles.subMenuLabel}
                  onPress={() => {
                    props.navigation.navigate('MyCompoundingInvestment');
                  }}
                />
              </View>
            ) : null}

            {/* <Divider style={styles.dividerLine} /> */}

            <TouchableOpacity
              onPress={() => toggleMenu('Item4')}
              style={styles.drawerMainMenu}>
              <View style={{width: '80%'}}>
                <DrawerItem
                  icon={({size}) => (
                    <Icon
                      name="format-list-text"
                      color={Colors.icons}
                      size={34}
                    />
                  )}
                  label="Income Report"
                  labelStyle={styles.menuLabel}
                />
              </View>
              <View style={{width: '20%', alignItems: 'flex-end'}}>
                {isSubNav === 'Item4' ? (
                  <Icon name="chevron-down" color={Colors.icons} size={32} />
                ) : (
                  <Icon name="chevron-right" color={Colors.icons} size={32} />
                )}
              </View>
            </TouchableOpacity>
            {isSubNav === 'Item4' ? (
              <View
                style={{
                  paddingLeft: '18%',
                  backgroundColor: Colors.drawerSubSection,
                  marginHorizontal: 10,
                  borderRadius: 5,
                  // paddingVertical: 10,
                }}>
                <DrawerItem
                  label="Management Performance Income"
                  labelStyle={styles.subMenuLabel}
                  // style={{bottom: -10}}
                  onPress={() => {
                    props.navigation.navigate('ManagementPerformanceIncome');
                  }}
                />
                <DrawerItem
                  label="Performance Income"
                  labelStyle={styles.subMenuLabel}
                  onPress={() => {
                    props.navigation.navigate('PerformanceIncome');
                  }}
                />
                <DrawerItem
                  label="Corporate Performance Income"
                  labelStyle={styles.subMenuLabel}
                  onPress={() => {
                    props.navigation.navigate('CorporatePerformanceIncome');
                  }}
                />
                <DrawerItem
                  label="ROI Income"
                  labelStyle={styles.subMenuLabel}
                  onPress={() => {
                    props.navigation.navigate('ROIIncome');
                  }}
                />
                <DrawerItem
                  label="Business Flush Report"
                  labelStyle={styles.subMenuLabel}
                  onPress={() => {
                    props.navigation.navigate('BusinessFlushReport');
                  }}
                />
                <DrawerItem
                  label="Levelwise Performance Income"
                  labelStyle={styles.subMenuLabel}
                  onPress={() => {
                    props.navigation.navigate('LevelwisePerformanceIncome');
                  }}
                />
                <DrawerItem
                  label="Weekwise Performance Income"
                  labelStyle={styles.subMenuLabel}
                  onPress={() => {
                    props.navigation.navigate('WeekwisePerformanceIncome');
                  }}
                />
              </View>
            ) : null}
            {/* <Divider style={styles.dividerLine} /> */}

            <TouchableOpacity
              onPress={() => toggleMenu('Item5')}
              style={styles.drawerMainMenu}>
              <View style={{width: '80%'}}>
                <DrawerItem
                  icon={({size}) => (
                    <Icon
                      name="scale-unbalanced"
                      color={Colors.icons}
                      size={34}
                    />
                  )}
                  label="Leverage"
                  labelStyle={styles.menuLabel}
                />
              </View>
              <View style={{width: '20%', alignItems: 'flex-end'}}>
                {isSubNav === 'Item5' ? (
                  <Icon name="chevron-down" color={Colors.icons} size={32} />
                ) : (
                  <Icon name="chevron-right" color={Colors.icons} size={32} />
                )}
              </View>
            </TouchableOpacity>
            {isSubNav === 'Item5' ? (
              <View
                style={{
                  paddingLeft: '18%',
                  backgroundColor: Colors.drawerSubSection,
                  marginHorizontal: 10,
                  borderRadius: 5,
                  // paddingVertical: 10,
                }}>
                <DrawerItem
                  label="My Leverage"
                  labelStyle={styles.subMenuLabel}
                  onPress={() => {
                    props.navigation.navigate('MyLeverage');
                  }}
                />
                <DrawerItem
                  label="Team Leverage"
                  labelStyle={styles.subMenuLabel}
                  onPress={() => {
                    props.navigation.navigate('TeamLeverage');
                  }}
                />
              </View>
            ) : null}
            {/* <Divider style={styles.dividerLine} /> */}

            <TouchableOpacity
              onPress={() => toggleMenu('Item6')}
              style={styles.drawerMainMenu}>
              <View style={{width: '80%'}}>
                <DrawerItem
                  icon={({size}) => (
                    <Icon name="trophy" color={Colors.icons} size={34} />
                  )}
                  label="Club & Rewards"
                  labelStyle={styles.menuLabel}
                />
              </View>
              <View style={{width: '20%', alignItems: 'flex-end'}}>
                {isSubNav === 'Item6' ? (
                  <Icon name="chevron-down" color={Colors.icons} size={32} />
                ) : (
                  <Icon name="chevron-right" color={Colors.icons} size={32} />
                )}
              </View>
            </TouchableOpacity>
            {isSubNav === 'Item6' ? (
              <View
                style={{
                  paddingLeft: '18%',
                  backgroundColor: Colors.drawerSubSection,
                  marginHorizontal: 10,
                  borderRadius: 5,
                  // paddingVertical: 10,
                }}>
                <DrawerItem
                  label="Monthly Ranking Club"
                  labelStyle={styles.subMenuLabel}
                  // style={{bottom: -10}}
                  onPress={() => {
                    props.navigation.navigate('MonthlyRankingClub');
                  }}
                />
                <DrawerItem
                  label="Cryptobox Rewards"
                  labelStyle={styles.subMenuLabel}
                  // style={{bottom: -10}}
                  onPress={() => {
                    props.navigation.navigate('CryptoboxRewards');
                  }}
                />
                <DrawerItem
                  label="Lifetime Ranking Rewards"
                  labelStyle={styles.subMenuLabel}
                  onPress={() => {
                    props.navigation.navigate('LifetimeRankingReward');
                  }}
                />
                {/* <DrawerItem
                  label="Claim Zoom Rewards"
                  labelStyle={styles.subMenuLabel}
                  // style={{bottom: -10}}
                  onPress={() => {
                    props.navigation.navigate('ClaimZoomRewards');
                  }}
                />
                <DrawerItem
                  label="Zoom Reward List"
                  labelStyle={styles.subMenuLabel}
                  onPress={() => {
                    props.navigation.navigate('ZoomRewardList');
                  }}
                /> */}
              </View>
            ) : null}
            {/* <Divider style={styles.dividerLine} /> */}

            <TouchableOpacity
              onPress={() => null}
              style={styles.drawerMainMenu}>
              <View style={{width: '80%'}}>
                <DrawerItem
                  onPress={() => {
                    props.navigation.navigate('KnowledgeCenter');
                  }}
                  icon={({size}) => (
                    <Icon name="face-agent" color={Colors.icons} size={34} />
                  )}
                  label="Knowledge Center"
                  labelStyle={styles.menuLabel}
                />
              </View>
              {/* <View style={{width: '20%', alignItems: 'flex-end'}}>
                {isSubNav === 'Item2' ? (
                  <Icon name="chevron-down" color={Colors.icons} size={32} />
                ) : (
                  <Icon name="chevron-right" color={Colors.icons} size={32} />
                )}
              </View> */}
            </TouchableOpacity>
            {/* <Divider style={styles.dividerLine} /> */}

            <TouchableOpacity
              onPress={() => toggleMenu('Item7')}
              style={styles.drawerMainMenu}>
              <View style={{width: '80%'}}>
                <DrawerItem
                  icon={({size}) => (
                    <Icon name="account" color={Colors.icons} size={34} />
                  )}
                  label="Profile"
                  labelStyle={styles.menuLabel}
                />
              </View>
              <View style={{width: '20%', alignItems: 'flex-end'}}>
                {isSubNav === 'Item7' ? (
                  <Icon name="chevron-down" color={Colors.icons} size={32} />
                ) : (
                  <Icon name="chevron-right" color={Colors.icons} size={32} />
                )}
              </View>
            </TouchableOpacity>
            {isSubNav === 'Item7' ? (
              <View
                style={{
                  paddingLeft: '18%',
                  backgroundColor: Colors.drawerSubSection,
                  marginHorizontal: 10,
                  borderRadius: 5,
                  // paddingVertical: 10,
                }}>
                <DrawerItem
                  label="Update Profile"
                  labelStyle={styles.subMenuLabel}
                  // style={{bottom: -10}}
                  onPress={() => {
                    props.navigation.navigate('UpdateProfile');
                  }}
                />
                <DrawerItem
                  label="Change Passwords"
                  labelStyle={styles.subMenuLabel}
                  onPress={() => {
                    props.navigation.navigate('ChangePasswords');
                  }}
                />
                <DrawerItem
                  label="Update Email"
                  labelStyle={styles.subMenuLabel}
                  // style={{bottom: -10}}
                  onPress={() => {
                    props.navigation.navigate('UpdateEmail');
                  }}
                />
                <DrawerItem
                  label="2FA Setting"
                  labelStyle={styles.subMenuLabel}
                  // style={{bottom: -10}}
                  onPress={() => {
                    props.navigation.navigate('TwoFASetting');
                  }}
                />
                <DrawerItem
                  label="Sub Accounts"
                  labelStyle={styles.subMenuLabel}
                  // style={{bottom: -10}}
                  onPress={() => {
                    props.navigation.navigate('SubAccounts');
                  }}
                />
                <DrawerItem
                  label="Support"
                  labelStyle={styles.subMenuLabel}
                  onPress={() => {
                    props.navigation.navigate('Support');
                  }}
                />
                <DrawerItem
                  label="My Tickets"
                  labelStyle={styles.subMenuLabel}
                  // style={{bottom: -10}}
                  onPress={() => {
                    props.navigation.navigate('MyTicketHistory');
                  }}
                />
                <DrawerItem
                  label="POS Card"
                  labelStyle={styles.subMenuLabel}
                  onPress={() => {
                    props.navigation.navigate('POSCard');
                  }}
                />
                <DrawerItem
                  label="Invite Friends"
                  labelStyle={styles.subMenuLabel}
                  onPress={() => {
                    props.navigation.navigate('ReferToFriends');
                  }}
                />
              </View>
            ) : null}

            {/* <Divider /> */}
            {/* <Divider style={styles.dividerLine} /> */}
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        {/* <DrawerItem
          icon={({size}) => (
            <Icon name="account" color={Colors.primaryBlue} size={32} />
          )}
          labelStyle={{fontSize: 16}}
          label="Profile"
          onPress={() => {
            props.navigation.navigate('Profile');
          }}
        /> */}
        <TouchableOpacity onPress={() => null} style={styles.drawerMainMenu}>
          <View style={{width: '80%'}}>
            <DrawerItem
              onPress={() => handleLogout()}
              icon={({size}) => (
                <Icon name="logout-variant" color={Colors.icons} size={32} />
              )}
              labelStyle={styles.menuLabel}
              label="Log Out"
            />
          </View>
        </TouchableOpacity>
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    color: Colors.fontColor1,
    textTransform: 'capitalize',
  },
  caption: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: Colors.fontColor1,
  },
  menuLabel: {
    fontSize: 16,
    color: Colors.fontColor1,
    fontFamily: 'Poppins-Light',
  },
  subMenuLabel: {
    fontSize: 14,
    color: Colors.fontColor1,
    fontFamily: 'Poppins-Light',
  },
  drawerMainMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 3,
    backgroundColor: Colors.drawerSection,
    borderRadius: 5,
    marginHorizontal: 10,
  },

  drawerSection: {
    marginTop: 15,
    // backgroundColor: Colors.drawerSection,
  },
  bottomDrawerSection: {
    borderWidth: 0.3,
    width: '100%',
    // marginBottom: 10,
    borderColor: '#252627',
  },
  dividerLine: {
    color: '#BABFC4',
    borderWidth: 0.2,
    width: '95%',
    alignSelf: 'center',
  },
});
const mapDispatchToProps = dispatch => ({
  logout_the_app: () => dispatch(initLogout()),
});
const mapStateToProps = state => {
  console.log('here on drawer', state.auth.user);
  return {
    status: state.auth.status,
    loading: state.auth.loading,
    users: state.auth.user,
    getlogout: state.auth.logout,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent);
