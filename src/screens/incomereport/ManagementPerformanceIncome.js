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
import {getManagementPerformanceIncome} from '../../store/actions';
import {POST_LOGIN_BG, DATE_FORMAT} from '../../config/Constants';
import {LoaderIndicator, NoDataList} from '../../components';
import Colors from '../../config/Colors';
import Styles from '../../css/Styles';
import {ScrollView} from 'react-native-gesture-handler';
import BreadcrumbBlock from '../../components/BreadcrumbBlock';
import moment from 'moment';
import {currency, ucword} from '../../utils/UtilityFunctions';

const ManagementPerformanceIncome = props => {
  const {loading, get_ManagementPerformanceIncome, mgmt_per_inc_rep} = props;

  const [showMore, setShowMore] = useState(false);
  useEffect(() => {
    get_ManagementPerformanceIncome();
  }, []);

  const Item = ({items, props}) => {
    const ref = useRef(null);
    return (
      <View style={{...styles.listItem}} ref={ref}>
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
              Amount
            </Text>
            <Text
              style={{
                color: Colors.icons,
                fontFamily: 'Poppins-Medium',
                fontSize: 14,
              }}>
              Payment Date
            </Text>
          </View>

          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                color: Colors.fontColor1,
                fontFamily: 'Poppins-Medium',
                fontSize: 14,
                textAlign: 'right',
              }}>
              {currency(parseFloat(items.credit_amount))}
            </Text>
            <Text
              style={{
                color: Colors.fontColor1,
                fontFamily: 'Poppins-Medium',
                fontSize: 14,
                textAlign: 'right',
              }}>
              {moment(items.transaction_date).format(DATE_FORMAT)}
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
            Status :{' '}
          </Text>
          <Text
            style={{
              color: Colors.fontColor1,
              fontFamily: 'Poppins-Medium',
              fontSize: 14,
            }}>
            {items.transaction_status === '0'
              ? 'Paid'
              : items.transaction_status === '1'
              ? 'Pending'
              : 'Lapse'}
          </Text>
        </View>
      </View>
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
            second={'Management Performance Income'}
          />
          <View
            style={{
              backgroundColor: Colors.containerBg1,
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}>
            {mgmt_per_inc_rep && mgmt_per_inc_rep.length > 0 ? (
              <FlatList
                data={mgmt_per_inc_rep ? mgmt_per_inc_rep : []}
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
    // height: hp('10%'),
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#707070',
    borderRadius: 5,
    justifyContent: 'center',
    marginBottom: 10,
  },
});
const mapDispatchToProps = dispatch => ({
  get_ManagementPerformanceIncome: () =>
    dispatch(getManagementPerformanceIncome()),
});

const mapStateToProps = state => {
  console.log('here is on ManagementPerformanceIncome', state);
  return {
    status: state.incomereport.status,
    loading: state.incomereport.loading,
    mgmt_per_inc_rep: state.incomereport.managementperformanceincome,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ManagementPerformanceIncome);
