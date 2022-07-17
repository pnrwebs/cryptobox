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
            <Animated.View style={{...styles.listItem}} ref={ref}>
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
                    color: '#b9822f',
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                  }}>
                  Monthly Turnover
                </Text>
                <Text
                  style={{
                    color: Colors.fontColor1,
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                  }}>
                  {monthly_ranking_club?.monthly_turnover_share1}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}>
                <Text
                  style={{
                    color: '#b9822f',
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                  }}>
                  Current Month Referral
                </Text>
                <Text
                  style={{
                    color: Colors.fontColor1,
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                  }}>
                  {monthly_ranking_club?.current_month_referrral_count1}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}>
                <Text
                  style={{
                    color: '#b9822f',
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                  }}>
                  Eligible for Club
                </Text>
                <Text
                  style={{
                    color: Colors.fontColor1,
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                  }}>
                  {monthly_ranking_club?.eligible_for_club1}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}>
                <Text
                  style={{
                    color: '#b9822f',
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                  }}>
                  Qualifing Criteria
                </Text>
                <Text
                  style={{
                    color: Colors.fontColor1,
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                  }}>
                  {monthly_ranking_club?.qualifing_criteria1}
                </Text>
              </View>
            </Animated.View>
            <Animated.View style={{...styles.listItem}} ref={ref}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{
                    color: '#b9822f',
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                  }}>
                  {monthly_ranking_club?.club_rank2}
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
                    {monthly_ranking_club?.current_month_qualify_status2}
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
                    color: '#b9822f',
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                  }}>
                  Monthly Turnover
                </Text>
                <Text
                  style={{
                    color: Colors.fontColor1,
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                  }}>
                  {monthly_ranking_club?.monthly_turnover_share2}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}>
                <Text
                  style={{
                    color: '#b9822f',
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                  }}>
                  Current Month Referral
                </Text>
                <Text
                  style={{
                    color: Colors.fontColor1,
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                  }}>
                  {monthly_ranking_club?.current_month_referrral_count2}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}>
                <Text
                  style={{
                    color: '#b9822f',
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                  }}>
                  Eligible for Club
                </Text>
                <Text
                  style={{
                    color: Colors.fontColor1,
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                  }}>
                  {monthly_ranking_club?.eligible_for_club2}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}>
                <Text
                  style={{
                    color: '#b9822f',
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                  }}>
                  Qualifing Criteria
                </Text>
                <Text
                  style={{
                    color: Colors.fontColor1,
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                  }}>
                  {monthly_ranking_club?.qualifing_criteria2}
                </Text>
              </View>
            </Animated.View>
            <Animated.View style={{...styles.listItem}} ref={ref}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{
                    color: '#b9822f',
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                  }}>
                  {monthly_ranking_club?.club_rank3}
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
                    {monthly_ranking_club?.current_month_qualify_status3}
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
                    color: '#b9822f',
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                  }}>
                  Monthly Turnover
                </Text>
                <Text
                  style={{
                    color: Colors.fontColor1,
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                  }}>
                  {monthly_ranking_club?.monthly_turnover_share3}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}>
                <Text
                  style={{
                    color: '#b9822f',
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                  }}>
                  Current Month Referral
                </Text>
                <Text
                  style={{
                    color: Colors.fontColor1,
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                  }}>
                  {monthly_ranking_club?.current_month_referrral_count3}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}>
                <Text
                  style={{
                    color: '#b9822f',
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                  }}>
                  Eligible for Club
                </Text>
                <Text
                  style={{
                    color: Colors.fontColor1,
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                  }}>
                  {monthly_ranking_club?.eligible_for_club3}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}>
                <Text
                  style={{
                    color: '#b9822f',
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                  }}>
                  Qualifing Criteria
                </Text>
                <Text
                  style={{
                    color: Colors.fontColor1,
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                  }}>
                  {monthly_ranking_club?.qualifing_criteria3}
                </Text>
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
