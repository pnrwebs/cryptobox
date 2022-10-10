/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import {connect} from 'react-redux';
import {getCurrentWeekFastTrackQualifier} from '../store/actions';
import {POST_LOGIN_BG, DATE_FORMAT, CUR_SYMB} from '../config/Constants';
import {LoaderIndicator, NoDataList} from '../components';
import Colors from '../config/Colors';
import Styles from '../css/Styles';
import {ScrollView} from 'react-native-gesture-handler';
import BreadcrumbBlock from '../components/BreadcrumbBlock';
import moment from 'moment';
import {currency, ucword} from '../utils/UtilityFunctions';

const CurrentWeekFastTrack = props => {
  const {
    loading,
    get_CurrentWeekFastTrackQualifier,
    currentfasttrack_qualifier,
  } = props;

  useEffect(() => {
    get_CurrentWeekFastTrackQualifier();
  }, []);

  return loading ? (
    <LoaderIndicator />
  ) : (
    <ScrollView contentContainerStyle={{flexGrow: 1}} style={styles.container}>
      <ImageBackground
        source={POST_LOGIN_BG}
        resizeMode="stretch"
        style={styles.image}>
        <View style={Styles.secondContainerView}>
          <BreadcrumbBlock
            first={'Dashboard'}
            second={'Current Week FT Qualifier'}
          />

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
                    {currentfasttrack_qualifier?.Position1}
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
                    Direct Referral
                  </Text>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textAlign: 'right',
                    }}>
                    {currentfasttrack_qualifier?.fast_track_daily_count1}
                    {/* {items.member_fullname} */}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                  marginBottom: 10,
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
                    {currentfasttrack_qualifier?.Username1}
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
                    {currentfasttrack_qualifier?.Country1}
                    {/* {items.member_fullname} */}
                  </Text>
                </View>
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
                    {currentfasttrack_qualifier?.Position2}
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
                    Direct Referral
                  </Text>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textAlign: 'right',
                    }}>
                    {currentfasttrack_qualifier?.fast_track_daily_count2}
                    {/* {items.member_fullname} */}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                  marginBottom: 10,
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
                    {currentfasttrack_qualifier?.Username2}
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
                    {currentfasttrack_qualifier?.Country2}
                    {/* {items.member_fullname} */}
                  </Text>
                </View>
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
                    {currentfasttrack_qualifier?.Position3}
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
                    Direct Referral
                  </Text>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textAlign: 'right',
                    }}>
                    {currentfasttrack_qualifier?.fast_track_daily_count3}
                    {/* {items.member_fullname} */}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                  marginBottom: 10,
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
                    {currentfasttrack_qualifier?.Username3}
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
                    {currentfasttrack_qualifier?.Country3}
                    {/* {items.member_fullname} */}
                  </Text>
                </View>
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
                    {currentfasttrack_qualifier?.Position4}
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
                    Direct Referral
                  </Text>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textAlign: 'right',
                    }}>
                    {currentfasttrack_qualifier?.fast_track_daily_count4}
                    {/* {items.member_fullname} */}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                  marginBottom: 10,
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
                    {currentfasttrack_qualifier?.Username4}
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
                    {currentfasttrack_qualifier?.Country4}
                    {/* {items.member_fullname} */}
                  </Text>
                </View>
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
                    {currentfasttrack_qualifier?.Position5}
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
                    Direct Referral
                  </Text>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textAlign: 'right',
                    }}>
                    {currentfasttrack_qualifier?.fast_track_daily_count5}
                    {/* {items.member_fullname} */}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                  marginBottom: 10,
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
                    {currentfasttrack_qualifier?.Username5}
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
                    {currentfasttrack_qualifier?.Country5}
                    {/* {items.member_fullname} */}
                  </Text>
                </View>
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
                    {currentfasttrack_qualifier?.Position6}
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
                    Direct Referral
                  </Text>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textAlign: 'right',
                    }}>
                    {currentfasttrack_qualifier?.fast_track_daily_count6}
                    {/* {items.member_fullname} */}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                  marginBottom: 10,
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
                    {currentfasttrack_qualifier?.Username6}
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
                    {currentfasttrack_qualifier?.Country6}
                    {/* {items.member_fullname} */}
                  </Text>
                </View>
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
                    {currentfasttrack_qualifier?.Position7}
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
                    Direct Referral
                  </Text>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textAlign: 'right',
                    }}>
                    {currentfasttrack_qualifier?.fast_track_daily_count7}
                    {/* {items.member_fullname} */}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                  marginBottom: 10,
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
                    {currentfasttrack_qualifier?.Username7}
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
                    {currentfasttrack_qualifier?.Country7}
                    {/* {items.member_fullname} */}
                  </Text>
                </View>
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
                    {currentfasttrack_qualifier?.Position8}
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
                    Direct Referral
                  </Text>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textAlign: 'right',
                    }}>
                    {currentfasttrack_qualifier?.fast_track_daily_count8}
                    {/* {items.member_fullname} */}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                  marginBottom: 10,
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
                    {currentfasttrack_qualifier?.Username8}
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
                    {currentfasttrack_qualifier?.Country8}
                    {/* {items.member_fullname} */}
                  </Text>
                </View>
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
                    {currentfasttrack_qualifier?.Position9}
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
                    Direct Referral
                  </Text>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textAlign: 'right',
                    }}>
                    {currentfasttrack_qualifier?.fast_track_daily_count9}
                    {/* {items.member_fullname} */}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                  marginBottom: 10,
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
                    {currentfasttrack_qualifier?.Username9}
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
                    {currentfasttrack_qualifier?.Country9}
                    {/* {items.member_fullname} */}
                  </Text>
                </View>
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
                    {currentfasttrack_qualifier?.Position10}
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
                    Direct Referral
                  </Text>
                  <Text
                    style={{
                      color: Colors.fontColor1,
                      fontFamily: 'Poppins-Medium',
                      fontSize: 14,
                      textAlign: 'right',
                    }}>
                    {currentfasttrack_qualifier?.fast_track_daily_count10}
                    {/* {items.member_fullname} */}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                  marginBottom: 10,
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
                    {currentfasttrack_qualifier?.Username10}
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
                    {currentfasttrack_qualifier?.Country10}
                    {/* {items.member_fullname} */}
                  </Text>
                </View>
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
  get_CurrentWeekFastTrackQualifier: () =>
    dispatch(getCurrentWeekFastTrackQualifier()),
});

const mapStateToProps = state => {
  console.log('here is fast track current', state);
  return {
    status: state.auth.status,
    loading: state.auth.loading,
    currentfasttrack_qualifier: state.auth.currentweekfasttrackqualifier,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CurrentWeekFastTrack);
