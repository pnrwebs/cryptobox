/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Pressable,
  FlatList,
  Animated,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import {getCryptoboxRewardList} from '../../store/actions';
import {POST_LOGIN_BG, DATE_FORMAT} from '../../config/Constants';
import {LoaderIndicator, NoDataList} from '../../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../config/Colors';
import Styles from '../../css/Styles';
import {ScrollView} from 'react-native-gesture-handler';
import BreadcrumbBlock from '../../components/BreadcrumbBlock';
import moment from 'moment';
import {currency, ucword} from '../../utils/UtilityFunctions';

const ArchivedRewards = props => {
  const {loading, get_CryptoboxRewardsList, cryptobox_rewards} = props;

  const [showMore, setShowMore] = useState(false);
  const [showMoreTxn, setShowMoreTxn] = useState(null);

  const onChangeShowMore = txnid => {
    setShowMore(!showMore);
    setShowMoreTxn(txnid);
  };
  useEffect(() => {
    get_CryptoboxRewardsList();
  }, []);

  return loading ? (
    <LoaderIndicator />
  ) : (
    <ScrollView style={styles.container} contentContainerStyle={{flexGrow: 1}}>
      <ImageBackground
        source={POST_LOGIN_BG}
        resizeMode="stretch"
        style={styles.image}>
        <View style={Styles.secondContainerView}>
          <BreadcrumbBlock
            first={'Club & Rewards'}
            second={'Archived Rewards'}
          />
          <View
            style={{
              backgroundColor: Colors.containerBg1,
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}>
            <View style={{...styles.listItem}}>
              <View style={{alignItems: 'center'}}>
                <Text
                  style={{
                    color: Colors.fontColor1,
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                    textTransform: 'uppercase',
                  }}>
                  {cryptobox_rewards && cryptobox_rewards.rewardname1
                    ? cryptobox_rewards.rewardname1
                    : ''}
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{
                    color: '#b9822f',
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                  }}>
                  {cryptobox_rewards && cryptobox_rewards.rank_name1
                    ? cryptobox_rewards.rank_name1
                    : ''}
                </Text>
                <View
                  style={{
                    paddingHorizontal: 7,
                    paddingVertical: 3,
                    backgroundColor: '#dc3545',
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 12,
                    }}>
                    {cryptobox_rewards && cryptobox_rewards.qualifystatus1
                      ? cryptobox_rewards.qualifystatus1
                      : ''}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}>
                <Text
                  style={{
                    color: Colors.icons,
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                    textTransform: 'capitalize',
                  }}>
                  BUSINESS VOLUME TARGET:{' '}
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    {cryptobox_rewards &&
                    cryptobox_rewards.businessvolumetarget1
                      ? cryptobox_rewards.businessvolumetarget1
                      : '0'}
                  </Text>
                </Text>
                <Pressable
                  style={{flexDirection: 'row', alignItems: 'center'}}
                  onPress={() => onChangeShowMore(1)}>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    {showMore && showMoreTxn === 1 ? 'Less' : 'More'}{' '}
                  </Text>
                  <Icon
                    name={
                      showMore && showMoreTxn === 1
                        ? 'chevron-down'
                        : 'chevron-right'
                    }
                    color={Colors.icons}
                    size={22}
                  />
                </Pressable>
              </View>
              {showMore && showMoreTxn === 1 ? (
                <View>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textTransform: 'capitalize',
                    }}>
                    PREMIUM GROUP 40% BUSINESS TARGET:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {cryptobox_rewards &&
                      cryptobox_rewards.premiumgroupfourtypercentbusinesstarget1
                        ? cryptobox_rewards.premiumgroupfourtypercentbusinesstarget1
                        : ''}
                    </Text>
                  </Text>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textTransform: 'capitalize',
                    }}>
                    STANDARD GROUP 60% BUSINESS TARGET:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {cryptobox_rewards &&
                      cryptobox_rewards.standardgroupsixtypercentbusinesstarget1
                        ? cryptobox_rewards.standardgroupsixtypercentbusinesstarget1
                        : ''}
                    </Text>
                  </Text>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textTransform: 'capitalize',
                    }}>
                    PREMIUM GROUP BUSINESS ACHIEVED:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {cryptobox_rewards &&
                      cryptobox_rewards.premiumgroupbusinessachieved1
                        ? cryptobox_rewards.premiumgroupbusinessachieved1
                        : '0'}
                    </Text>
                  </Text>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textTransform: 'capitalize',
                    }}>
                    STANDARD GROUP BUSINESS ACHIEVED:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {cryptobox_rewards &&
                      cryptobox_rewards.standardgroupbusinessachieved1
                        ? cryptobox_rewards.standardgroupbusinessachieved1
                        : '0'}
                    </Text>
                  </Text>
                </View>
              ) : null}
            </View>
            {/* 2 */}
            <View style={{...styles.listItem}}>
              <View style={{alignItems: 'center'}}>
                <Text
                  style={{
                    color: Colors.fontColor1,
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                    textTransform: 'uppercase',
                  }}>
                  {cryptobox_rewards && cryptobox_rewards.rewardname2
                    ? cryptobox_rewards.rewardname2
                    : ''}
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{
                    color: '#b9822f',
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                  }}>
                  {cryptobox_rewards && cryptobox_rewards.rank_name2
                    ? cryptobox_rewards.rank_name2
                    : ''}
                </Text>
                <View
                  style={{
                    paddingHorizontal: 7,
                    paddingVertical: 3,
                    backgroundColor: '#dc3545',
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 12,
                    }}>
                    {cryptobox_rewards && cryptobox_rewards.qualifystatus2
                      ? cryptobox_rewards.qualifystatus2
                      : ''}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}>
                <Text
                  style={{
                    color: Colors.icons,
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                    textTransform: 'capitalize',
                  }}>
                  BUSINESS VOLUME TARGET:{' '}
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    {cryptobox_rewards &&
                    cryptobox_rewards.businessvolumetarget1
                      ? cryptobox_rewards.businessvolumetarget1
                      : '0'}
                  </Text>
                </Text>
                <Pressable
                  style={{flexDirection: 'row', alignItems: 'center'}}
                  onPress={() => onChangeShowMore(2)}>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    {showMore && showMoreTxn === 2 ? 'Less' : 'More'}{' '}
                  </Text>
                  <Icon
                    name={
                      showMore && showMoreTxn === 2
                        ? 'chevron-down'
                        : 'chevron-right'
                    }
                    color={Colors.icons}
                    size={22}
                  />
                </Pressable>
              </View>
              {showMore && showMoreTxn === 2 ? (
                <View>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textTransform: 'capitalize',
                    }}>
                    PREMIUM GROUP 40% BUSINESS TARGET:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {cryptobox_rewards &&
                      cryptobox_rewards.premiumgroupfourtypercentbusinesstarget2
                        ? cryptobox_rewards.premiumgroupfourtypercentbusinesstarget2
                        : ''}
                    </Text>
                  </Text>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textTransform: 'capitalize',
                    }}>
                    STANDARD GROUP 60% BUSINESS TARGET:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {cryptobox_rewards &&
                      cryptobox_rewards.standardgroupsixtypercentbusinesstarget2
                        ? cryptobox_rewards.standardgroupsixtypercentbusinesstarget2
                        : ''}
                    </Text>
                  </Text>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textTransform: 'capitalize',
                    }}>
                    PREMIUM GROUP BUSINESS ACHIEVED:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {cryptobox_rewards &&
                      cryptobox_rewards.premiumgroupbusinessachieved2
                        ? cryptobox_rewards.premiumgroupbusinessachieved2
                        : '0'}
                    </Text>
                  </Text>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textTransform: 'capitalize',
                    }}>
                    STANDARD GROUP BUSINESS ACHIEVED:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {cryptobox_rewards &&
                      cryptobox_rewards.standardgroupbusinessachieved2
                        ? cryptobox_rewards.standardgroupbusinessachieved2
                        : '0'}
                    </Text>
                  </Text>
                </View>
              ) : null}
            </View>
            {/* 3 */}
            <View style={{...styles.listItem}}>
              <View style={{alignItems: 'center'}}>
                <Text
                  style={{
                    color: Colors.fontColor1,
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                    textTransform: 'uppercase',
                  }}>
                  {cryptobox_rewards && cryptobox_rewards.rewardname3
                    ? cryptobox_rewards.rewardname3
                    : ''}
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{
                    color: '#b9822f',
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                  }}>
                  {cryptobox_rewards && cryptobox_rewards.rank_name3
                    ? cryptobox_rewards.rank_name3
                    : ''}
                </Text>
                <View
                  style={{
                    paddingHorizontal: 7,
                    paddingVertical: 3,
                    backgroundColor: '#dc3545',
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 12,
                    }}>
                    {cryptobox_rewards && cryptobox_rewards.qualifystatus3
                      ? cryptobox_rewards.qualifystatus3
                      : ''}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}>
                <Text
                  style={{
                    color: Colors.icons,
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                    textTransform: 'capitalize',
                  }}>
                  BUSINESS VOLUME TARGET:{' '}
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    {cryptobox_rewards &&
                    cryptobox_rewards.businessvolumetarget1
                      ? cryptobox_rewards.businessvolumetarget1
                      : '0'}
                  </Text>
                </Text>
                <Pressable
                  style={{flexDirection: 'row', alignItems: 'center'}}
                  onPress={() => onChangeShowMore(3)}>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    {showMore && showMoreTxn === 3 ? 'Less' : 'More'}{' '}
                  </Text>
                  <Icon
                    name={
                      showMore && showMoreTxn === 3
                        ? 'chevron-down'
                        : 'chevron-right'
                    }
                    color={Colors.icons}
                    size={22}
                  />
                </Pressable>
              </View>
              {showMore && showMoreTxn === 3 ? (
                <View>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textTransform: 'capitalize',
                    }}>
                    PREMIUM GROUP 40% BUSINESS TARGET:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {cryptobox_rewards &&
                      cryptobox_rewards.premiumgroupfourtypercentbusinesstarget3
                        ? cryptobox_rewards.premiumgroupfourtypercentbusinesstarget3
                        : ''}
                    </Text>
                  </Text>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textTransform: 'capitalize',
                    }}>
                    STANDARD GROUP 60% BUSINESS TARGET:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {cryptobox_rewards &&
                      cryptobox_rewards.standardgroupsixtypercentbusinesstarget3
                        ? cryptobox_rewards.standardgroupsixtypercentbusinesstarget3
                        : ''}
                    </Text>
                  </Text>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textTransform: 'capitalize',
                    }}>
                    PREMIUM GROUP BUSINESS ACHIEVED:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {cryptobox_rewards &&
                      cryptobox_rewards.premiumgroupbusinessachieved3
                        ? cryptobox_rewards.premiumgroupbusinessachieved3
                        : '0'}
                    </Text>
                  </Text>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textTransform: 'capitalize',
                    }}>
                    STANDARD GROUP BUSINESS ACHIEVED:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {cryptobox_rewards &&
                      cryptobox_rewards.standardgroupbusinessachieved3
                        ? cryptobox_rewards.standardgroupbusinessachieved3
                        : '0'}
                    </Text>
                  </Text>
                </View>
              ) : null}
            </View>
            {/* 5 */}
            <View style={{...styles.listItem}}>
              <View style={{alignItems: 'center'}}>
                <Text
                  style={{
                    color: Colors.fontColor1,
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                    textTransform: 'uppercase',
                  }}>
                  {cryptobox_rewards && cryptobox_rewards.rewardname4
                    ? cryptobox_rewards.rewardname4
                    : ''}
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{
                    color: '#b9822f',
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                  }}>
                  {cryptobox_rewards && cryptobox_rewards.rank_name4
                    ? cryptobox_rewards.rank_name4
                    : ''}
                </Text>
                <View
                  style={{
                    paddingHorizontal: 7,
                    paddingVertical: 3,
                    backgroundColor: '#dc3545',
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 12,
                    }}>
                    {cryptobox_rewards && cryptobox_rewards.qualifystatus4
                      ? cryptobox_rewards.qualifystatus4
                      : ''}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}>
                <Text
                  style={{
                    color: Colors.icons,
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                    textTransform: 'capitalize',
                  }}>
                  BUSINESS VOLUME TARGET:{' '}
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    {cryptobox_rewards &&
                    cryptobox_rewards.businessvolumetarget1
                      ? cryptobox_rewards.businessvolumetarget1
                      : '0'}
                  </Text>
                </Text>
                <Pressable
                  style={{flexDirection: 'row', alignItems: 'center'}}
                  onPress={() => onChangeShowMore(4)}>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    {showMore && showMoreTxn === 4 ? 'Less' : 'More'}{' '}
                  </Text>
                  <Icon
                    name={
                      showMore && showMoreTxn === 4
                        ? 'chevron-down'
                        : 'chevron-right'
                    }
                    color={Colors.icons}
                    size={22}
                  />
                </Pressable>
              </View>
              {showMore && showMoreTxn === 4 ? (
                <View>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textTransform: 'capitalize',
                    }}>
                    PREMIUM GROUP 40% BUSINESS TARGET:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {cryptobox_rewards &&
                      cryptobox_rewards.premiumgroupfourtypercentbusinesstarget4
                        ? cryptobox_rewards.premiumgroupfourtypercentbusinesstarget4
                        : ''}
                    </Text>
                  </Text>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textTransform: 'capitalize',
                    }}>
                    STANDARD GROUP 60% BUSINESS TARGET:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {cryptobox_rewards &&
                      cryptobox_rewards.standardgroupsixtypercentbusinesstarget4
                        ? cryptobox_rewards.standardgroupsixtypercentbusinesstarget4
                        : ''}
                    </Text>
                  </Text>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textTransform: 'capitalize',
                    }}>
                    PREMIUM GROUP BUSINESS ACHIEVED:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {cryptobox_rewards &&
                      cryptobox_rewards.premiumgroupbusinessachieved4
                        ? cryptobox_rewards.premiumgroupbusinessachieved4
                        : '0'}
                    </Text>
                  </Text>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textTransform: 'capitalize',
                    }}>
                    STANDARD GROUP BUSINESS ACHIEVED:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {cryptobox_rewards &&
                      cryptobox_rewards.standardgroupbusinessachieved4
                        ? cryptobox_rewards.standardgroupbusinessachieved4
                        : '0'}
                    </Text>
                  </Text>
                </View>
              ) : null}
            </View>
            {/* 5 */}
            <View style={{...styles.listItem}}>
              <View style={{alignItems: 'center'}}>
                <Text
                  style={{
                    color: Colors.fontColor1,
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                    textTransform: 'uppercase',
                  }}>
                  {cryptobox_rewards && cryptobox_rewards.rewardname5
                    ? cryptobox_rewards.rewardname5
                    : ''}
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{
                    color: '#b9822f',
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                  }}>
                  {cryptobox_rewards && cryptobox_rewards.rank_name5
                    ? cryptobox_rewards.rank_name5
                    : ''}
                </Text>
                <View
                  style={{
                    paddingHorizontal: 7,
                    paddingVertical: 3,
                    backgroundColor: '#dc3545',
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 12,
                    }}>
                    {cryptobox_rewards && cryptobox_rewards.qualifystatus5
                      ? cryptobox_rewards.qualifystatus5
                      : ''}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}>
                <Text
                  style={{
                    color: Colors.icons,
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                    textTransform: 'capitalize',
                  }}>
                  BUSINESS VOLUME TARGET:{' '}
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    {cryptobox_rewards &&
                    cryptobox_rewards.businessvolumetarget1
                      ? cryptobox_rewards.businessvolumetarget1
                      : '0'}
                  </Text>
                </Text>
                <Pressable
                  style={{flexDirection: 'row', alignItems: 'center'}}
                  onPress={() => onChangeShowMore(5)}>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    {showMore && showMoreTxn === 5 ? 'Less' : 'More'}{' '}
                  </Text>
                  <Icon
                    name={
                      showMore && showMoreTxn === 5
                        ? 'chevron-down'
                        : 'chevron-right'
                    }
                    color={Colors.icons}
                    size={22}
                  />
                </Pressable>
              </View>
              {showMore && showMoreTxn === 5 ? (
                <View>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textTransform: 'capitalize',
                    }}>
                    PREMIUM GROUP 40% BUSINESS TARGET:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {cryptobox_rewards &&
                      cryptobox_rewards.premiumgroupfourtypercentbusinesstarget5
                        ? cryptobox_rewards.premiumgroupfourtypercentbusinesstarget5
                        : ''}
                    </Text>
                  </Text>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textTransform: 'capitalize',
                    }}>
                    STANDARD GROUP 60% BUSINESS TARGET:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {cryptobox_rewards &&
                      cryptobox_rewards.standardgroupsixtypercentbusinesstarget5
                        ? cryptobox_rewards.standardgroupsixtypercentbusinesstarget5
                        : ''}
                    </Text>
                  </Text>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textTransform: 'capitalize',
                    }}>
                    PREMIUM GROUP BUSINESS ACHIEVED:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {cryptobox_rewards &&
                      cryptobox_rewards.premiumgroupbusinessachieved5
                        ? cryptobox_rewards.premiumgroupbusinessachieved5
                        : '0'}
                    </Text>
                  </Text>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textTransform: 'capitalize',
                    }}>
                    STANDARD GROUP BUSINESS ACHIEVED:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {cryptobox_rewards &&
                      cryptobox_rewards.standardgroupbusinessachieved5
                        ? cryptobox_rewards.standardgroupbusinessachieved5
                        : '0'}
                    </Text>
                  </Text>
                </View>
              ) : null}
            </View>
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
  listItem: {
    // height: hp('10%'),
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#707070',
    borderRadius: 5,
    justifyContent: 'center',
    marginBottom: 10,
  },
});
const mapDispatchToProps = dispatch => ({
  get_CryptoboxRewardsList: () => dispatch(getCryptoboxRewardList()),
});

const mapStateToProps = state => {
  console.log('here is on my cryptoboxrewards', state);
  return {
    status: state.rewards.status,
    loading: state.rewards.loading,
    cryptobox_rewards: state.rewards.cryptoboxrewards,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArchivedRewards);
