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
import {getWeekwisePerformanceIncome} from '../../store/actions';
import {POST_LOGIN_BG, DATE_FORMAT} from '../../config/Constants';
import {LoaderIndicator, NoDataList} from '../../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../config/Colors';
import Styles from '../../css/Styles';
import {ScrollView} from 'react-native-gesture-handler';
import BreadcrumbBlock from '../../components/BreadcrumbBlock';
import moment from 'moment';
import {currency, ucword} from '../../utils/UtilityFunctions';

const WeekwisePerformanceIncome = props => {
  const {loading, get_WeekwisePerformanceIncome, weekwise_per_income} = props;

  const [showMore, setShowMore] = useState(false);
  useEffect(() => {
    get_WeekwisePerformanceIncome();
  }, []);

  const Item = ({items, props}) => {
    const ref = useRef(null);
    return (
      <Pressable
        style={{...styles.listItem}}
        onPress={
          () => null
          // props.navigation.navigate('WeekwisePerformanceIncomeStep1')
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
            <Icon name="calendar-refresh" color={Colors.icons} size={40} />
          </View>
          <View style={{width: '60%'}}>
            <Text
              style={{
                color: Colors.icons,
                fontFamily: 'Poppins-Medium',
                fontSize: 14,
              }}>
              {moment(items.transaction_date).format(DATE_FORMAT)}
            </Text>
            <Text
              style={{
                color: Colors.fontColor1,
                fontFamily: 'Poppins-Medium',
                fontSize: 14,
              }}>
              {currency(parseFloat(items.total_performance_income))}
            </Text>
          </View>
          {/* <View style={{width: '10%'}}>
            <Icon name="chevron-right" color={Colors.icons} size={32} />
          </View> */}
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
            second={'Weekwise Performance Income'}
          />
          <View
            style={{
              backgroundColor: Colors.containerBg1,
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}>
            {weekwise_per_income && weekwise_per_income.length > 0 ? (
              <FlatList
                data={weekwise_per_income ? weekwise_per_income : []}
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
const mapDispatchToProps = dispatch => ({
  get_WeekwisePerformanceIncome: () => dispatch(getWeekwisePerformanceIncome()),
});

const mapStateToProps = state => {
  console.log('here is on levelwise Income', state);
  return {
    status: state.incomereport.status,
    loading: state.incomereport.loading,
    weekwise_per_income: state.incomereport.weekperformanceincome,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WeekwisePerformanceIncome);
