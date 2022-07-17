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
  Image,
  Pressable,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {POST_LOGIN_BG, DATE_FORMAT} from '../../config/Constants';
import LoaderIndicator from '../../components/LoaderIndicator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../config/Colors';
import Styles from '../../css/Styles';
import {ScrollView} from 'react-native-gesture-handler';
import BreadcrumbBlock from '../../components/BreadcrumbBlock';
import LinearGradient from 'react-native-linear-gradient';
import {Divider} from 'react-native-paper';
import moment from 'moment';

const LifetimeRankingRewardDetails = props => {
  const {loading} = props;

  return loading ? (
    <LoaderIndicator />
  ) : (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <ImageBackground
        source={POST_LOGIN_BG}
        resizeMode="stretch"
        style={styles.image}>
        <View style={{...Styles.secondContainerView}}>
          <BreadcrumbBlock
            first={'Club & Rewards'}
            second={'Lifetime Ranking Reward Details'}
          />
          <LinearGradient
            start={{x: 0.0, y: 0.25}}
            end={{x: 0, y: 1.0}}
            colors={['#bf8606', '#604303']}
            style={{
              position: 'relative',
              alignItems: 'center',
              height: hp('29%'),
            }}></LinearGradient>
          <View
            style={{
              backgroundColor: Colors.containerBg1,
              paddingHorizontal: 14,
              position: 'absolute',
              height: hp('72%'),
              width: wp('86%'),
              top: '30%',
              borderRadius: 8,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 24,
                color: '#d2ccb4',
                textAlign: 'center',
                marginTop: 20,
              }}>
              Lifetime Ranking Reward
            </Text>
            <View style={{marginTop: 30}}>
              <View style={{paddingVertical: 20}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.title}>RANK NAME</Text>
                  <Text style={styles.title}>
                    No. OF DIRECT REFERRAL TARGET
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.textContent}>CRYPTO BRONZE (C-B)</Text>
                  <Text style={styles.textContent}>3</Text>
                </View>
              </View>
              <Divider style={styles.dividerLine} />
              <View style={{paddingVertical: 20}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.title}>
                    STRONG LEG 50% BUSINESS TARGET
                  </Text>
                  <Text style={styles.textContent}>$25000</Text>
                </View>
              </View>
              <Divider style={styles.dividerLine} />
              <View style={{paddingVertical: 20}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.title}>
                    OTHER LEG 50% BUSINESS TARGET
                  </Text>
                  <Text style={styles.textContent}>$25000</Text>
                </View>
              </View>
              <Divider style={styles.dividerLine} />
              <View style={{paddingVertical: 20}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.title}>DIRECT REFERRAL</Text>
                  <Text style={styles.textContent}>3</Text>
                </View>
              </View>
              <Divider style={styles.dividerLine} />
              <View style={{paddingVertical: 20}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.title}>STRONG LEG BUSINESS</Text>
                  <Text style={styles.textContent}>200</Text>
                </View>
              </View>
              <Divider style={styles.dividerLine} />
              <View style={{paddingVertical: 20}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.title}>OTHER LEG BUSINESS</Text>
                  <Text style={styles.textContent}>200</Text>
                </View>
              </View>
              <Divider style={styles.dividerLine} />
              <View style={{paddingVertical: 20}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.title}>REWARD NAME</Text>
                  <Text style={styles.textContent}>SMART PHONE WORTH $500</Text>
                </View>
              </View>
              <Divider style={styles.dividerLine} />
              <View style={{paddingVertical: 20}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.title}>QUALIFY STATUS</Text>
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
  dividerLine: {
    borderColor: '#393838',
    borderWidth: 0.5,
    width: '100%',
    alignSelf: 'center',
  },
  title: {
    color: '#b9822f',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    textTransform: 'capitalize',
  },
  textContent: {
    color: Colors.fontColor1,
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    textTransform: 'capitalize',
  },
});

export default LifetimeRankingRewardDetails;
