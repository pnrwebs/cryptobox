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
import {POST_LOGIN_BG, DATE_FORMAT} from '../../config/Constants';
import {LoaderIndicator, NoDataList} from '../../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../config/Colors';
import Styles from '../../css/Styles';
import {ScrollView} from 'react-native-gesture-handler';
import BreadcrumbBlock from '../../components/BreadcrumbBlock';
import moment from 'moment';
import {currency, ucword} from '../../utils/UtilityFunctions';

const levels = [
  {
    id: '1',
  },
  {
    id: '2',
  },
  {
    id: '3',
  },
  {
    id: '4',
  },
  {
    id: '5',
  },
  {
    id: '6',
  },
  {
    id: '7',
  },
  {
    id: '8',
  },
  {
    id: '9',
  },
  {
    id: '10',
  },
  {
    id: '11',
  },
  {
    id: '12',
  },
  {
    id: '13',
  },
  {
    id: '14',
  },
  {
    id: '15',
  },
  {
    id: '16',
  },
  {
    id: '17',
  },
  {
    id: '18',
  },
  {
    id: '19',
  },
  {
    id: '20',
  },
  {
    id: '21',
  },
];

const LevelwisePerformanceIncome = props => {
  const {loading} = props;
  const Item = ({items, props}) => {
    const ref = useRef(null);
    return (
      <Pressable
        style={{...styles.listItem}}
        onPress={() =>
          props.navigation.navigate('LevelwisePerformanceIncomeStep1', {
            level: items.id,
          })
        }>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '18%',
              height: 60,
              borderWidth: 2,
              borderColor: '#50ae42',
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#2a352b',
            }}>
            <Icon name="stairs-up" color={Colors.icons} size={40} />
          </View>
          <View style={{width: '60%'}}>
            <Text
              style={{
                color: Colors.icons,
                fontFamily: 'Poppins-Medium',
                fontSize: 14,
              }}>
              Level {items.id} Performance Income
            </Text>
          </View>
          <View style={{width: '10%'}}>
            <Icon name="chevron-right" color={Colors.icons} size={32} />
          </View>
        </View>
      </Pressable>
    );
  };
  const renderItem = ({item}) => <Item items={item} props={props} />;

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
            first={'Income Reports'}
            second={'Levelwise Performance Income'}
          />
          <View
            style={{
              backgroundColor: Colors.containerBg1,
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}>
            {levels && levels.length > 0 ? (
              <FlatList
                contentContainerStyle={{paddingBottom: 40}}
                data={levels ? levels : []}
                renderItem={renderItem}
                keyExtractor={item => item.id}
              />
            ) : (
              <NoDataList message={'No data available.'} />
            )}
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
    height: hp('10%'),
    paddingHorizontal: 20,
    // paddingVertical: 20,
    borderWidth: 1,
    borderColor: '#707070',
    borderRadius: 40,
    justifyContent: 'center',
    marginBottom: 10,
  },
});

export default LevelwisePerformanceIncome;
