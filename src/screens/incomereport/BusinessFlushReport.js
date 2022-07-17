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
import {connect} from 'react-redux';
import {getBusinessFlushReport} from '../../store/actions';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {POST_LOGIN_BG, DATE_FORMAT, CUR_SYMB} from '../../config/Constants';
import {LoaderIndicator, NoDataList} from '../../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../config/Colors';
import Styles from '../../css/Styles';
import {ScrollView} from 'react-native-gesture-handler';
import BreadcrumbBlock from '../../components/BreadcrumbBlock';
import moment from 'moment';
import {currency, ucword} from '../../utils/UtilityFunctions';

const BusinessFlushReport = props => {
  const {loading, get_BusinessFlushReport, business_flush_rept} = props;

  const [showMore, setShowMore] = useState(false);
  useEffect(() => {
    get_BusinessFlushReport();
  }, []);

  const Item = ({items, props}) => {
    const ref = useRef(null);
    return (
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
              TXN ID
            </Text>
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
              Income Type
            </Text>
            <Text
              style={{
                color: Colors.icons,
                fontFamily: 'Poppins-Medium',
                fontSize: 14,
              }}>
              Flush Date
            </Text>
          </View>

          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                color: Colors.fontColor1,
                fontFamily: 'Poppins-Medium',
                fontSize: 14,
              }}>
              {items.transaction_number}
            </Text>
            <Text
              style={{
                color: Colors.fontColor1,
                fontFamily: 'Poppins-Medium',
                fontSize: 14,
              }}>
              {CUR_SYMB}
              {items.flush_amount}
            </Text>
            <Text
              style={{
                color: Colors.fontColor1,
                fontFamily: 'Poppins-Medium',
                fontSize: 14,
              }}>
              {items.flush_type}
            </Text>
            <Text
              style={{
                color: Colors.fontColor1,
                fontFamily: 'Poppins-Medium',
                fontSize: 14,
              }}>
              {moment(items.flush_date).format(DATE_FORMAT)}
            </Text>
          </View>
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
            second={'Business Flush Report'}
          />
          <View
            style={{
              backgroundColor: Colors.containerBg1,
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}>
            {business_flush_rept && business_flush_rept.length > 0 ? (
              <FlatList
                data={business_flush_rept ? business_flush_rept : []}
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
  get_BusinessFlushReport: () => dispatch(getBusinessFlushReport()),
});

const mapStateToProps = state => {
  console.log('here is on PerformanceIncome', state);
  return {
    status: state.incomereport.status,
    loading: state.incomereport.loading,
    business_flush_rept: state.incomereport.businessflushreport,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BusinessFlushReport);
