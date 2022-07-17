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
import {getMonthlyRankingClub} from '../../store/actions';
import {POST_LOGIN_BG, DATE_FORMAT} from '../../config/Constants';
import {LoaderIndicator, NoDataList} from '../../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../config/Colors';
import Styles from '../../css/Styles';
import {ScrollView} from 'react-native-gesture-handler';
import BreadcrumbBlock from '../../components/BreadcrumbBlock';
import moment from 'moment';
import {currency, ucword} from '../../utils/UtilityFunctions';

const MonthlyRankingClub = props => {
  const {loading, get_MonthlyRankingClub, monthly_ranking_club} = props;
  const animatedViewHeight = useRef(new Animated.Value(hp('9%'))).current;
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    get_MonthlyRankingClub();
  }, []);
  const ref = useRef(null);
  return loading ? (
    <LoaderIndicator />
  ) : (
    <View style={styles.container}>
      <ImageBackground
        source={POST_LOGIN_BG}
        resizeMode="stretch"
        style={styles.image}>
        <View style={Styles.secondContainerView}>
          <BreadcrumbBlock
            first={'Club & Rewards'}
            second={'Monthly Ranking Club'}
          />
          <View
            style={{
              backgroundColor: Colors.containerBg1,
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}>
            <Animated.View
              style={{...styles.listItem, height: animatedViewHeight}}
              ref={ref}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{
                    color: '#b9822f',
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                  }}>
                  {monthly_ranking_club?.club_rank1}
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
                    {monthly_ranking_club?.current_month_qualify_status1}
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
                    color: Colors.fontColor1,
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                  }}>
                  {monthly_ranking_club?.monthly_turnover_share1}
                </Text>
                <Pressable
                  style={{flexDirection: 'row', alignItems: 'center'}}
                  onPress={() => {
                    if (showMore) {
                      Animated.timing(animatedViewHeight, {
                        toValue: hp('9%'),
                        duration: 500,
                        useNativeDriver: false,
                      }).start();
                    } else {
                      Animated.timing(animatedViewHeight, {
                        toValue: hp('12%'),
                        duration: 500,
                        useNativeDriver: false,
                      }).start();
                    }
                    setShowMore(!showMore);
                  }}>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    More
                  </Text>
                  <Icon name="chevron-right" color={Colors.icons} size={22} />
                </Pressable>
              </View>
            </Animated.View>
            <Animated.View
              style={{...styles.listItem, height: animatedViewHeight}}
              ref={ref}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{
                    color: '#b9822f',
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                  }}>
                  CRYPTO SILVER CLUB
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
                    Pending
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
                    color: Colors.fontColor1,
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                  }}>
                  3.0%
                </Text>
                <Pressable
                  style={{flexDirection: 'row', alignItems: 'center'}}
                  onPress={() => {
                    if (showMore) {
                      Animated.timing(animatedViewHeight, {
                        toValue: hp('9%'),
                        duration: 500,
                        useNativeDriver: false,
                      }).start();
                    } else {
                      Animated.timing(animatedViewHeight, {
                        toValue: hp('12%'),
                        duration: 500,
                        useNativeDriver: false,
                      }).start();
                    }
                    setShowMore(!showMore);
                  }}>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    More
                  </Text>
                  <Icon name="chevron-right" color={Colors.icons} size={22} />
                </Pressable>
              </View>
            </Animated.View>
            <Animated.View
              style={{...styles.listItem, height: animatedViewHeight}}
              ref={ref}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{
                    color: '#b9822f',
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                  }}>
                  CRYPTO SILVER CLUB
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
                    Pending
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
                    color: Colors.fontColor1,
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                  }}>
                  3.0%
                </Text>
                <Pressable
                  style={{flexDirection: 'row', alignItems: 'center'}}
                  onPress={() => {
                    if (showMore) {
                      Animated.timing(animatedViewHeight, {
                        toValue: hp('9%'),
                        duration: 500,
                        useNativeDriver: false,
                      }).start();
                    } else {
                      Animated.timing(animatedViewHeight, {
                        toValue: hp('12%'),
                        duration: 500,
                        useNativeDriver: false,
                      }).start();
                    }
                    setShowMore(!showMore);
                  }}>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    More
                  </Text>
                  <Icon name="chevron-right" color={Colors.icons} size={22} />
                </Pressable>
              </View>
            </Animated.View>
          </View>
        </View>
      </ImageBackground>
    </View>
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
    // height: hp('9%'),
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#707070',
    borderRadius: 5,
    justifyContent: 'center',
    marginBottom: 10,
  },
});
const mapDispatchToProps = dispatch => ({
  get_MonthlyRankingClub: () => dispatch(getMonthlyRankingClub()),
});

const mapStateToProps = state => {
  console.log('here is on monthly ranking club', state);
  return {
    status: state.rewards.status,
    loading: state.rewards.loading,
    monthly_ranking_club: state.rewards.monthlyrankingclub,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MonthlyRankingClub);
