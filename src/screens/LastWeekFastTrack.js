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
import {getLastWeekFastTrackQualifier} from '../store/actions';
import {POST_LOGIN_BG, DATE_FORMAT, CUR_SYMB} from '../config/Constants';
import {LoaderIndicator, NoDataList} from '../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../config/Colors';
import Styles from '../css/Styles';
import {ScrollView} from 'react-native-gesture-handler';
import BreadcrumbBlock from '../components/BreadcrumbBlock';
import moment from 'moment';
import {currency, ucword} from '../utils/UtilityFunctions';

const LastWeekFastTrack = props => {
  const {loading, get_FastTrackQualifier, fasttrack_qualifier} = props;

  useEffect(() => {
    get_FastTrackQualifier();
  }, []);

  return loading ? (
    <LoaderIndicator />
  ) : (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={POST_LOGIN_BG}
        resizeMode="stretch"
        style={styles.image}>
        <View style={Styles.secondContainerView}>
          <BreadcrumbBlock
            first={'Dashboard'}
            second={'Fast Track Qualifier'}
          />
          <Text
            style={{
              ...Styles.inputBoxLabel,
              fontSize: 14,
              color: Colors.fontColor1,
            }}>
            <Text
              style={{
                ...Styles.inputBoxLabel,
                fontSize: 14,
                color: Colors.appHeaderTitleMain,
              }}>
              Note:{' '}
            </Text>
            This bonus will be distributed to members who had referred the
            highest number of members overall in the system for the month. The
            counting of referrals will be done on a monthly basis. To qualify
            the Fast Track Bonus, your investment package should be $1000 or
            higher. Only sponsored members with investment package of $1000 and
            above are eligible to be credited.
          </Text>
          <View
            style={{
              backgroundColor: Colors.containerBg1,
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}>
            <View style={{...styles.listItem}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}>
                <View style={{flexDirection: 'column'}}>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    Position
                  </Text>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    {fasttrack_qualifier?.Position1}
                  </Text>
                </View>

                <View style={{flexDirection: 'column'}}>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textAlign: 'right',
                    }}>
                    Percentage
                  </Text>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textAlign: 'right',
                    }}>
                    {fasttrack_qualifier?.Percentage1}
                    {/* {items.member_fullname} */}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}>
                <View style={{flexDirection: 'column'}}>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    Username
                  </Text>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    {fasttrack_qualifier?.Username1}
                  </Text>
                </View>

                <View style={{flexDirection: 'column'}}>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textAlign: 'right',
                    }}>
                    Country
                  </Text>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textAlign: 'right',
                    }}>
                    {fasttrack_qualifier?.Country1}
                    {/* {items.member_fullname} */}
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
                  Bonus:{' '}
                </Text>
                <Text
                  style={{
                    color: Colors.fontColor1,
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                  }}>
                  {CUR_SYMB}
                  {fasttrack_qualifier?.Bonus1}
                </Text>
              </View>
            </View>
            <View style={{...styles.listItem}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}>
                <View style={{flexDirection: 'column'}}>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    Position
                  </Text>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    {fasttrack_qualifier?.Position2}
                  </Text>
                </View>

                <View style={{flexDirection: 'column'}}>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textAlign: 'right',
                    }}>
                    Percentage
                  </Text>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textAlign: 'right',
                    }}>
                    {fasttrack_qualifier?.Percentage2}
                    {/* {items.member_fullname} */}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}>
                <View style={{flexDirection: 'column'}}>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    Username
                  </Text>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    {fasttrack_qualifier?.Username2}
                  </Text>
                </View>

                <View style={{flexDirection: 'column'}}>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textAlign: 'right',
                    }}>
                    Country
                  </Text>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textAlign: 'right',
                    }}>
                    {fasttrack_qualifier?.Country2}
                    {/* {items.member_fullname} */}
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
                  Bonus:{' '}
                </Text>
                <Text
                  style={{
                    color: Colors.fontColor1,
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                  }}>
                  {CUR_SYMB}
                  {fasttrack_qualifier?.Bonus2}
                </Text>
              </View>
            </View>
            <View style={{...styles.listItem}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}>
                <View style={{flexDirection: 'column'}}>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    Position
                  </Text>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    {fasttrack_qualifier?.Position3}
                  </Text>
                </View>

                <View style={{flexDirection: 'column'}}>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textAlign: 'right',
                    }}>
                    Percentage
                  </Text>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textAlign: 'right',
                    }}>
                    {fasttrack_qualifier?.Percentage3}
                    {/* {items.member_fullname} */}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}>
                <View style={{flexDirection: 'column'}}>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    Username
                  </Text>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    {fasttrack_qualifier?.Username3}
                  </Text>
                </View>

                <View style={{flexDirection: 'column'}}>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textAlign: 'right',
                    }}>
                    Country
                  </Text>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textAlign: 'right',
                    }}>
                    {fasttrack_qualifier?.Country3}
                    {/* {items.member_fullname} */}
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
                  Bonus:{' '}
                </Text>
                <Text
                  style={{
                    color: Colors.fontColor1,
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                  }}>
                  {CUR_SYMB}
                  {fasttrack_qualifier?.Bonus3}
                </Text>
              </View>
            </View>
            <View style={{...styles.listItem}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}>
                <View style={{flexDirection: 'column'}}>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    Position
                  </Text>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    {fasttrack_qualifier?.Position4}
                  </Text>
                </View>

                <View style={{flexDirection: 'column'}}>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textAlign: 'right',
                    }}>
                    Percentage
                  </Text>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textAlign: 'right',
                    }}>
                    {fasttrack_qualifier?.Percentage4}
                    {/* {items.member_fullname} */}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}>
                <View style={{flexDirection: 'column'}}>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    Username
                  </Text>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    {fasttrack_qualifier?.Username4}
                  </Text>
                </View>

                <View style={{flexDirection: 'column'}}>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textAlign: 'right',
                    }}>
                    Country
                  </Text>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textAlign: 'right',
                    }}>
                    {fasttrack_qualifier?.Country4}
                    {/* {items.member_fullname} */}
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
                  Bonus:{' '}
                </Text>
                <Text
                  style={{
                    color: Colors.fontColor1,
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                  }}>
                  {CUR_SYMB}
                  {fasttrack_qualifier?.Bonus4}
                </Text>
              </View>
            </View>
            <View style={{...styles.listItem}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}>
                <View style={{flexDirection: 'column'}}>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    Position
                  </Text>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    {fasttrack_qualifier?.Position5}
                  </Text>
                </View>

                <View style={{flexDirection: 'column'}}>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textAlign: 'right',
                    }}>
                    Percentage
                  </Text>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textAlign: 'right',
                    }}>
                    {fasttrack_qualifier?.Percentage5}
                    {/* {items.member_fullname} */}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}>
                <View style={{flexDirection: 'column'}}>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    Username
                  </Text>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                    }}>
                    {fasttrack_qualifier?.Username5}
                  </Text>
                </View>

                <View style={{flexDirection: 'column'}}>
                  <Text
                    style={{
                      color: Colors.icons,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textAlign: 'right',
                    }}>
                    Country
                  </Text>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textAlign: 'right',
                    }}>
                    {fasttrack_qualifier?.Country5}
                    {/* {items.member_fullname} */}
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
                  Bonus:{' '}
                </Text>
                <Text
                  style={{
                    color: Colors.fontColor1,
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                  }}>
                  {CUR_SYMB}
                  {fasttrack_qualifier?.Bonus5}
                </Text>
              </View>
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
    // paddingVertical: 20,
    borderWidth: 1,
    borderColor: '#707070',
    borderRadius: 5,
    justifyContent: 'center',
    marginBottom: 10,
  },
});
const mapDispatchToProps = dispatch => ({
  get_FastTrackQualifier: () => dispatch(getLastWeekFastTrackQualifier()),
});

const mapStateToProps = state => {
  console.log('here is fast track', state);
  return {
    status: state.auth.status,
    loading: state.auth.loading,
    fasttrack_qualifier: state.auth.fasttrackqualifier,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LastWeekFastTrack);
