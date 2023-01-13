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
import {getLifetimeRankingRewards} from '../../store/actions';
import {POST_LOGIN_BG, DATE_FORMAT} from '../../config/Constants';
import {LoaderIndicator, NoDataList} from '../../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../config/Colors';
import Styles from '../../css/Styles';
import {ScrollView} from 'react-native-gesture-handler';
import BreadcrumbBlock from '../../components/BreadcrumbBlock';
import moment from 'moment';
import {currency, ucword} from '../../utils/UtilityFunctions';

const LifetimeRankingReward = props => {
  const {loading, get_LifetimeRankingReward, lifetime_ranking_rewards} = props;

  const [showMore, setShowMore] = useState(false);
  const [showMoreTxn, setShowMoreTxn] = useState(null);

  const onChangeShowMore = txnid => {
    setShowMore(!showMore);
    setShowMoreTxn(txnid);
  };
  useEffect(() => {
    get_LifetimeRankingReward();
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
            second={'Lifetime Ranking Reward'}
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
                  {lifetime_ranking_rewards &&
                  lifetime_ranking_rewards.reward_name1
                    ? lifetime_ranking_rewards.reward_name1
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
                  {lifetime_ranking_rewards &&
                  lifetime_ranking_rewards.rank_name1
                    ? lifetime_ranking_rewards.rank_name1
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
                    {lifetime_ranking_rewards &&
                    lifetime_ranking_rewards.qualify_status1
                      ? lifetime_ranking_rewards.qualify_status1
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
                  }}>
                  Permium Group Direct Referal Target:{' '}
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    {lifetime_ranking_rewards &&
                    lifetime_ranking_rewards.number_of_direct_referral_target_premium1
                      ? lifetime_ranking_rewards.number_of_direct_referral_target_premium1
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
                    STANDARD GROUP DIRECT REFERRAL TARGET{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.number_of_direct_referral_target_standard1
                        ? lifetime_ranking_rewards.number_of_direct_referral_target_standard1
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
                    PREMIUM GROUP 50% BUSINESS TARGET:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.strong_leg_fifty_percent_business_target1
                        ? lifetime_ranking_rewards.strong_leg_fifty_percent_business_target1
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
                    STANDARD GROUP 50% BUSINESS TARGET:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.other_leg_fifty_percent_business_target1
                        ? lifetime_ranking_rewards.other_leg_fifty_percent_business_target1
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
                    PREMIUM GROUP DIRECT REFERRAL:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.direct_referrral_count_premium1
                        ? lifetime_ranking_rewards.direct_referrral_count_premium1
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
                    STANDARD GROUP DIRECT REFERRAL:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.direct_referrral_count_standard1
                        ? lifetime_ranking_rewards.direct_referrral_count_standard1
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
                    PREMIUM GROUP BUSINESS:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.strong_leg_business_count1
                        ? lifetime_ranking_rewards.strong_leg_business_count1
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
                    STANDARD GROUP BUSINESS:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.other_leg_business_count1
                        ? lifetime_ranking_rewards.other_leg_business_count1
                        : ''}
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
                  {lifetime_ranking_rewards &&
                  lifetime_ranking_rewards.reward_name2
                    ? lifetime_ranking_rewards.reward_name2
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
                  {lifetime_ranking_rewards &&
                  lifetime_ranking_rewards.rank_name2
                    ? lifetime_ranking_rewards.rank_name2
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
                    {lifetime_ranking_rewards &&
                    lifetime_ranking_rewards.qualify_status2
                      ? lifetime_ranking_rewards.qualify_status2
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
                  }}>
                  Permium Group Direct Referal Target:{' '}
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    {lifetime_ranking_rewards &&
                    lifetime_ranking_rewards.number_of_direct_referral_target_premium2
                      ? lifetime_ranking_rewards.number_of_direct_referral_target_premium2
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
                    STANDARD GROUP DIRECT REFERRAL TARGET:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.number_of_direct_referral_target_standard2
                        ? lifetime_ranking_rewards.number_of_direct_referral_target_standard2
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
                    PREMIUM GROUP 50% BUSINESS TARGET:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.strong_leg_fifty_percent_business_target2
                        ? lifetime_ranking_rewards.strong_leg_fifty_percent_business_target2
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
                    STANDARD GROUP 50% BUSINESS TARGET:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.other_leg_fifty_percent_business_target2
                        ? lifetime_ranking_rewards.other_leg_fifty_percent_business_target2
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
                    PREMIUM GROUP DIRECT REFERRAL:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.direct_referrral_count_premium2
                        ? lifetime_ranking_rewards.direct_referrral_count_premium2
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
                    STANDARD GROUP DIRECT REFERRAL:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.direct_referrral_count_standard2
                        ? lifetime_ranking_rewards.direct_referrral_count_standard2
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
                    PREMIUM GROUP BUSINESS:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.strong_leg_business_count2
                        ? lifetime_ranking_rewards.strong_leg_business_count2
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
                    STANDARD GROUP BUSINESS:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.other_leg_business_count2
                        ? lifetime_ranking_rewards.other_leg_business_count2
                        : ''}
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
                  {lifetime_ranking_rewards &&
                  lifetime_ranking_rewards.reward_name3
                    ? lifetime_ranking_rewards.reward_name3
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
                  {lifetime_ranking_rewards &&
                  lifetime_ranking_rewards.rank_name3
                    ? lifetime_ranking_rewards.rank_name3
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
                    {lifetime_ranking_rewards &&
                    lifetime_ranking_rewards.qualify_status3
                      ? lifetime_ranking_rewards.qualify_status3
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
                  }}>
                  Permium Group Direct Referal Target:{' '}
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    {lifetime_ranking_rewards &&
                    lifetime_ranking_rewards.number_of_direct_referral_target_premium3
                      ? lifetime_ranking_rewards.number_of_direct_referral_target_premium3
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
                    STANDARD GROUP DIRECT REFERRAL TARGET:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.number_of_direct_referral_target_standard3
                        ? lifetime_ranking_rewards.number_of_direct_referral_target_standard3
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
                    PREMIUM GROUP 50% BUSINESS TARGET:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.strong_leg_fifty_percent_business_target3
                        ? lifetime_ranking_rewards.strong_leg_fifty_percent_business_target3
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
                    STANDARD GROUP 50% BUSINESS TARGET:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.other_leg_fifty_percent_business_target3
                        ? lifetime_ranking_rewards.other_leg_fifty_percent_business_target3
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
                    PREMIUM GROUP DIRECT REFERRAL:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.direct_referrral_count_premium3
                        ? lifetime_ranking_rewards.direct_referrral_count_premium3
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
                    STANDARD GROUP DIRECT REFERRAL:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.direct_referrral_count_standard3
                        ? lifetime_ranking_rewards.direct_referrral_count_standard3
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
                    PREMIUM GROUP BUSINESS:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.strong_leg_business_count3
                        ? lifetime_ranking_rewards.strong_leg_business_count3
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
                    STANDARD GROUP BUSINESS:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.other_leg_business_count3
                        ? lifetime_ranking_rewards.other_leg_business_count3
                        : ''}
                    </Text>
                  </Text>
                </View>
              ) : null}
            </View>
            {/* 4 */}
            <View style={{...styles.listItem}}>
              <View style={{alignItems: 'center'}}>
                <Text
                  style={{
                    color: Colors.fontColor1,
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                    textTransform: 'uppercase',
                  }}>
                  {lifetime_ranking_rewards &&
                  lifetime_ranking_rewards.reward_name4
                    ? lifetime_ranking_rewards.reward_name4
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
                  {lifetime_ranking_rewards &&
                  lifetime_ranking_rewards.rank_name4
                    ? lifetime_ranking_rewards.rank_name4
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
                    {lifetime_ranking_rewards &&
                    lifetime_ranking_rewards.qualify_status4
                      ? lifetime_ranking_rewards.qualify_status4
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
                  }}>
                  Permium Group Direct Referal Target:{' '}
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    {lifetime_ranking_rewards &&
                    lifetime_ranking_rewards.number_of_direct_referral_target_premium4
                      ? lifetime_ranking_rewards.number_of_direct_referral_target_premium4
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
                    STANDARD GROUP DIRECT REFERRAL TARGET:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.number_of_direct_referral_target_standard4
                        ? lifetime_ranking_rewards.number_of_direct_referral_target_standard4
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
                    PREMIUM GROUP 50% BUSINESS TARGET:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.strong_leg_fifty_percent_business_target4
                        ? lifetime_ranking_rewards.strong_leg_fifty_percent_business_target4
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
                    STANDARD GROUP 50% BUSINESS TARGET:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.other_leg_fifty_percent_business_target4
                        ? lifetime_ranking_rewards.other_leg_fifty_percent_business_target4
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
                    PREMIUM GROUP DIRECT REFERRAL:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.direct_referrral_count_premium4
                        ? lifetime_ranking_rewards.direct_referrral_count_premium4
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
                    STANDARD GROUP DIRECT REFERRAL:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.direct_referrral_count_standard4
                        ? lifetime_ranking_rewards.direct_referrral_count_standard4
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
                    PREMIUM GROUP BUSINESS:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.strong_leg_business_count4
                        ? lifetime_ranking_rewards.strong_leg_business_count4
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
                    STANDARD GROUP BUSINESS:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.other_leg_business_count4
                        ? lifetime_ranking_rewards.other_leg_business_count4
                        : ''}
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
                  {lifetime_ranking_rewards &&
                  lifetime_ranking_rewards.reward_name5
                    ? lifetime_ranking_rewards.reward_name5
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
                  {lifetime_ranking_rewards &&
                  lifetime_ranking_rewards.rank_name5
                    ? lifetime_ranking_rewards.rank_name5
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
                    {lifetime_ranking_rewards &&
                    lifetime_ranking_rewards.qualify_status5
                      ? lifetime_ranking_rewards.qualify_status5
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
                  }}>
                  Permium Group Direct Referal Target:{' '}
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    {lifetime_ranking_rewards &&
                    lifetime_ranking_rewards.number_of_direct_referral_target_premium5
                      ? lifetime_ranking_rewards.number_of_direct_referral_target_premium5
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
                    STANDARD GROUP DIRECT REFERRAL TARGET:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.number_of_direct_referral_target_standard5
                        ? lifetime_ranking_rewards.number_of_direct_referral_target_standard5
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
                    PREMIUM GROUP 50% BUSINESS TARGET:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.strong_leg_fifty_percent_business_target5
                        ? lifetime_ranking_rewards.strong_leg_fifty_percent_business_target5
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
                    STANDARD GROUP 50% BUSINESS TARGET:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.other_leg_fifty_percent_business_target5
                        ? lifetime_ranking_rewards.other_leg_fifty_percent_business_target5
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
                    PREMIUM GROUP DIRECT REFERRAL:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.direct_referrral_count_premium5
                        ? lifetime_ranking_rewards.direct_referrral_count_premium5
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
                    STANDARD GROUP DIRECT REFERRAL:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.direct_referrral_count_standard5
                        ? lifetime_ranking_rewards.direct_referrral_count_standard5
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
                    PREMIUM GROUP BUSINESS:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.strong_leg_business_count5
                        ? lifetime_ranking_rewards.strong_leg_business_count5
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
                    STANDARD GROUP BUSINESS:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.other_leg_business_count5
                        ? lifetime_ranking_rewards.other_leg_business_count5
                        : ''}
                    </Text>
                  </Text>
                </View>
              ) : null}
            </View>
            {/* 6 */}
            <View style={{...styles.listItem}}>
              <View style={{alignItems: 'center'}}>
                <Text
                  style={{
                    color: Colors.fontColor1,
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                    textTransform: 'uppercase',
                  }}>
                  {lifetime_ranking_rewards &&
                  lifetime_ranking_rewards.reward_name6
                    ? lifetime_ranking_rewards.reward_name6
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
                  {lifetime_ranking_rewards &&
                  lifetime_ranking_rewards.rank_name6
                    ? lifetime_ranking_rewards.rank_name6
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
                    {lifetime_ranking_rewards &&
                    lifetime_ranking_rewards.qualify_status6
                      ? lifetime_ranking_rewards.qualify_status6
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
                  }}>
                  Permium Group Direct Referal Target:{' '}
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    {lifetime_ranking_rewards &&
                    lifetime_ranking_rewards.number_of_direct_referral_target_premium6
                      ? lifetime_ranking_rewards.number_of_direct_referral_target_premium6
                      : '0'}
                  </Text>
                </Text>
                <Pressable
                  style={{flexDirection: 'row', alignItems: 'center'}}
                  onPress={() => onChangeShowMore(6)}>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    {showMore && showMoreTxn === 6 ? 'Less' : 'More'}{' '}
                  </Text>
                  <Icon
                    name={
                      showMore && showMoreTxn === 6
                        ? 'chevron-down'
                        : 'chevron-right'
                    }
                    color={Colors.icons}
                    size={22}
                  />
                </Pressable>
              </View>
              {showMore && showMoreTxn === 6 ? (
                <View>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textTransform: 'capitalize',
                    }}>
                    STANDARD GROUP DIRECT REFERRAL TARGET:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.number_of_direct_referral_target_standard6
                        ? lifetime_ranking_rewards.number_of_direct_referral_target_standard6
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
                    PREMIUM GROUP 50% BUSINESS TARGET:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.strong_leg_fifty_percent_business_target6
                        ? lifetime_ranking_rewards.strong_leg_fifty_percent_business_target6
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
                    STANDARD GROUP 50% BUSINESS TARGET:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.other_leg_fifty_percent_business_target6
                        ? lifetime_ranking_rewards.other_leg_fifty_percent_business_target6
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
                    PREMIUM GROUP DIRECT REFERRAL:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.direct_referrral_count_premium6
                        ? lifetime_ranking_rewards.direct_referrral_count_premium6
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
                    STANDARD GROUP DIRECT REFERRAL:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.direct_referrral_count_standard6
                        ? lifetime_ranking_rewards.direct_referrral_count_standard6
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
                    PREMIUM GROUP BUSINESS:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.strong_leg_business_count6
                        ? lifetime_ranking_rewards.strong_leg_business_count6
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
                    STANDARD GROUP BUSINESS:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.other_leg_business_count6
                        ? lifetime_ranking_rewards.other_leg_business_count6
                        : ''}
                    </Text>
                  </Text>
                </View>
              ) : null}
            </View>
            {/* 7 */}
            <View style={{...styles.listItem}}>
              <View style={{alignItems: 'center'}}>
                <Text
                  style={{
                    color: Colors.fontColor1,
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                    textTransform: 'uppercase',
                  }}>
                  {lifetime_ranking_rewards &&
                  lifetime_ranking_rewards.reward_name7
                    ? lifetime_ranking_rewards.reward_name7
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
                  {lifetime_ranking_rewards &&
                  lifetime_ranking_rewards.rank_name7
                    ? lifetime_ranking_rewards.rank_name7
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
                    {lifetime_ranking_rewards &&
                    lifetime_ranking_rewards.qualify_status7
                      ? lifetime_ranking_rewards.qualify_status7
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
                  }}>
                  Permium Group Direct Referal Target:{' '}
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    {lifetime_ranking_rewards &&
                    lifetime_ranking_rewards.number_of_direct_referral_target_premium7
                      ? lifetime_ranking_rewards.number_of_direct_referral_target_premium7
                      : '0'}
                  </Text>
                </Text>
                <Pressable
                  style={{flexDirection: 'row', alignItems: 'center'}}
                  onPress={() => onChangeShowMore(7)}>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    {showMore && showMoreTxn === 7 ? 'Less' : 'More'}{' '}
                  </Text>
                  <Icon
                    name={
                      showMore && showMoreTxn === 7
                        ? 'chevron-down'
                        : 'chevron-right'
                    }
                    color={Colors.icons}
                    size={22}
                  />
                </Pressable>
              </View>
              {showMore && showMoreTxn === 7 ? (
                <View>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textTransform: 'capitalize',
                    }}>
                    STANDARD GROUP DIRECT REFERRAL TARGET:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.number_of_direct_referral_target_standard7
                        ? lifetime_ranking_rewards.number_of_direct_referral_target_standard7
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
                    PREMIUM GROUP 50% BUSINESS TARGET:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.strong_leg_fifty_percent_business_target7
                        ? lifetime_ranking_rewards.strong_leg_fifty_percent_business_target7
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
                    STANDARD GROUP 50% BUSINESS TARGET:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.other_leg_fifty_percent_business_target7
                        ? lifetime_ranking_rewards.other_leg_fifty_percent_business_target7
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
                    PREMIUM GROUP DIRECT REFERRAL:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.direct_referrral_count_premium7
                        ? lifetime_ranking_rewards.direct_referrral_count_premium7
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
                    STANDARD GROUP DIRECT REFERRAL:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.direct_referrral_count_standard7
                        ? lifetime_ranking_rewards.direct_referrral_count_standard7
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
                    PREMIUM GROUP BUSINESS:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.strong_leg_business_count7
                        ? lifetime_ranking_rewards.strong_leg_business_count7
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
                    STANDARD GROUP BUSINESS:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.other_leg_business_count7
                        ? lifetime_ranking_rewards.other_leg_business_count7
                        : ''}
                    </Text>
                  </Text>
                </View>
              ) : null}
            </View>
            {/* 8 */}
            <View style={{...styles.listItem}}>
              <View style={{alignItems: 'center'}}>
                <Text
                  style={{
                    color: Colors.fontColor1,
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                    textTransform: 'uppercase',
                  }}>
                  {lifetime_ranking_rewards &&
                  lifetime_ranking_rewards.reward_name8
                    ? lifetime_ranking_rewards.reward_name8
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
                  {lifetime_ranking_rewards &&
                  lifetime_ranking_rewards.rank_name8
                    ? lifetime_ranking_rewards.rank_name8
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
                    {lifetime_ranking_rewards &&
                    lifetime_ranking_rewards.qualify_status8
                      ? lifetime_ranking_rewards.qualify_status8
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
                  }}>
                  Permium Group Direct Referal Target:{' '}
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    {lifetime_ranking_rewards &&
                    lifetime_ranking_rewards.number_of_direct_referral_target_premium8
                      ? lifetime_ranking_rewards.number_of_direct_referral_target_premium8
                      : '0'}
                  </Text>
                </Text>
                <Pressable
                  style={{flexDirection: 'row', alignItems: 'center'}}
                  onPress={() => onChangeShowMore(8)}>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    {showMore && showMoreTxn === 8 ? 'Less' : 'More'}{' '}
                  </Text>
                  <Icon
                    name={
                      showMore && showMoreTxn === 8
                        ? 'chevron-down'
                        : 'chevron-right'
                    }
                    color={Colors.icons}
                    size={22}
                  />
                </Pressable>
              </View>
              {showMore && showMoreTxn === 8 ? (
                <View>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textTransform: 'capitalize',
                    }}>
                    STANDARD GROUP DIRECT REFERRAL TARGET:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.number_of_direct_referral_target_standard8
                        ? lifetime_ranking_rewards.number_of_direct_referral_target_standard8
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
                    PREMIUM GROUP 50% BUSINESS TARGET:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.strong_leg_fifty_percent_business_target8
                        ? lifetime_ranking_rewards.strong_leg_fifty_percent_business_target8
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
                    STANDARD GROUP 50% BUSINESS TARGET:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.other_leg_fifty_percent_business_target8
                        ? lifetime_ranking_rewards.other_leg_fifty_percent_business_target8
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
                    PREMIUM GROUP DIRECT REFERRAL:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.direct_referrral_count_premium8
                        ? lifetime_ranking_rewards.direct_referrral_count_premium8
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
                    STANDARD GROUP DIRECT REFERRAL:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.direct_referrral_count_standard8
                        ? lifetime_ranking_rewards.direct_referrral_count_standard8
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
                    PREMIUM GROUP BUSINESS:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.strong_leg_business_count8
                        ? lifetime_ranking_rewards.strong_leg_business_count8
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
                    STANDARD GROUP BUSINESS:{' '}
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                      }}>
                      {lifetime_ranking_rewards &&
                      lifetime_ranking_rewards.other_leg_business_count8
                        ? lifetime_ranking_rewards.other_leg_business_count8
                        : ''}
                    </Text>
                  </Text>
                </View>
              ) : null}
            </View>
            {/* 8 */}
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
  get_LifetimeRankingReward: () => dispatch(getLifetimeRankingRewards()),
});

const mapStateToProps = state => {
  console.log('here is on my investments', state);
  return {
    status: state.rewards.status,
    loading: state.rewards.loading,
    lifetime_ranking_rewards: state.rewards.lifetimerankingrewards,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LifetimeRankingReward);
