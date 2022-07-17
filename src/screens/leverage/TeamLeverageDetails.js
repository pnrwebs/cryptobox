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
import {POST_LOGIN_BG, DATE_FORMAT, CUR_SYMB} from '../../config/Constants';
import LoaderIndicator from '../../components/LoaderIndicator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../config/Colors';
import Styles from '../../css/Styles';
import {ScrollView} from 'react-native-gesture-handler';
import BreadcrumbBlock from '../../components/BreadcrumbBlock';
import LinearGradient from 'react-native-linear-gradient';
import {Divider} from 'react-native-paper';
import moment from 'moment';

const TeamLeverageDetails = props => {
  const {loading} = props;
  console.log('my laverage details', props);
  const [myLeverageDetails] = useState(props.route.params.leverageDetails);
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
            first={'Team Leverage'}
            second={'Team Leverage Details'}
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
              Team Leverage
            </Text>
            <View style={{marginTop: 30}}>
              <View style={{paddingVertical: 20}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.title}>Username</Text>
                  <Text style={styles.title}>fullname</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.textContent}>
                    {myLeverageDetails && myLeverageDetails.member_username
                      ? myLeverageDetails.member_username
                      : ''}
                  </Text>
                  <Text style={styles.textContent}>
                    {myLeverageDetails && myLeverageDetails.member_fullname
                      ? myLeverageDetails.member_fullname
                      : ''}
                  </Text>
                </View>
              </View>
              <Divider style={styles.dividerLine} />
              <View style={{paddingVertical: 20}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.title}>Register Date</Text>
                  <Text style={styles.textContent}>
                    {' '}
                    {moment(
                      myLeverageDetails &&
                        myLeverageDetails.member_registration_date
                        ? myLeverageDetails.member_registration_date
                        : '0000-00-00',
                    ).format(DATE_FORMAT)}
                  </Text>
                </View>
              </View>
              <Divider style={styles.dividerLine} />
              <View style={{paddingVertical: 20}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.title}>Current Investment</Text>
                  <Text style={styles.textContent}>
                    {CUR_SYMB}
                    {myLeverageDetails &&
                    myLeverageDetails.member_last_investment_amount
                      ? myLeverageDetails.member_last_investment_amount
                      : '0'}
                  </Text>
                </View>
              </View>
              <Divider style={styles.dividerLine} />
              <View style={{paddingVertical: 20}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.title}>Total Investment</Text>
                  <Text style={styles.textContent}>
                    {CUR_SYMB}
                    {myLeverageDetails &&
                    myLeverageDetails.member_total_investment
                      ? myLeverageDetails.member_total_investment
                      : '0'}
                  </Text>
                </View>
              </View>
              <Divider style={styles.dividerLine} />
              <View style={{paddingVertical: 20}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.title}>Activation Date</Text>
                  <Text style={styles.textContent}>
                    {' '}
                    {moment(
                      myLeverageDetails &&
                        myLeverageDetails.member_activation_date
                        ? myLeverageDetails.member_activation_date
                        : '0000-00-00',
                    ).format(DATE_FORMAT)}
                  </Text>
                </View>
              </View>
              <Divider style={styles.dividerLine} />
              <View style={{paddingVertical: 20}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.title}>Team Business</Text>
                  <Text style={styles.textContent}>
                    {CUR_SYMB}
                    {myLeverageDetails && myLeverageDetails.member_team_business
                      ? myLeverageDetails.member_team_business
                      : '0'}
                  </Text>
                </View>
              </View>
              <Divider style={styles.dividerLine} />

              {/* <View style={{paddingVertical: 20}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.title}>View Team</Text>
                  <Pressable
                    onPress={() => props.navigation.goBack()}
                    style={{
                      paddingHorizontal: 20,
                      paddingVertical: 3,
                      backgroundColor: '#f8c146',
                      borderRadius: 5,
                    }}>
                    <Text
                      style={{
                        color: Colors.fontColor1,
                        fontFamily: 'Poppins-Medium',
                        fontSize: 12,
                      }}>
                      View
                    </Text>
                  </Pressable>
                </View>
              </View> */}
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

export default TeamLeverageDetails;
