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
import {getPerformanceIncome} from '../../store/actions';
import {POST_LOGIN_BG, DATE_FORMAT} from '../../config/Constants';
import {LoaderIndicator, NoDataList} from '../../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../config/Colors';
import Styles from '../../css/Styles';
import {ScrollView} from 'react-native-gesture-handler';
import BreadcrumbBlock from '../../components/BreadcrumbBlock';
import moment from 'moment';
import {currency, ucword} from '../../utils/UtilityFunctions';

const PerformanceIncome = props => {
  const {loading, get_PerformanceIncome, per_inc_rep} = props;

  const [showMore, setShowMore] = useState(false);
  const [showMoreTxn, setShowMoreTxn] = useState(null);

  const onChangeShowMore = txnid => {
    setShowMore(!showMore);
    setShowMoreTxn(txnid);
  };

  useEffect(() => {
    get_PerformanceIncome();
  }, []);

  const Item = ({items, props}) => {
    const ref = useRef(null);
    return (
      <Pressable
        style={{...styles.listItem}}
        ref={ref}
        onPress={() => setShowMore(!showMore)}>
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
              Sender Id
            </Text>
            <Text
              style={{
                color: Colors.icons,
                fontFamily: 'Poppins-Medium',
                fontSize: 14,
              }}>
              Amount
            </Text>
          </View>

          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                color: Colors.fontColor1,
                fontFamily: 'Poppins-Medium',
                fontSize: 14,
              }}>
              {items.member_sender_id}
            </Text>
            <Text
              style={{
                color: Colors.fontColor1,
                fontFamily: 'Poppins-Medium',
                fontSize: 14,
              }}>
              {currency(parseFloat(items.credit_amount))}
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
          </Text>

          <Pressable
            style={{alignSelf: 'flex-end', alignItems: 'center'}}
            onPress={() => onChangeShowMore(items.id)}>
            <Text
              style={{
                color: Colors.icons,
                fontFamily: 'Poppins-Medium',
                fontSize: 16,
              }}>
              {showMore && showMoreTxn === items.id ? 'Less' : 'More'}{' '}
              <Icon
                name={
                  showMore && showMoreTxn === items.id
                    ? 'chevron-down'
                    : 'chevron-right'
                }
                color={Colors.icons}
                size={18}
              />
            </Text>
          </Pressable>
        </View>
        {showMore && showMoreTxn === items.id ? (
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
                Payment Date
              </Text>
              <Text
                style={{
                  color: Colors.icons,
                  fontFamily: 'Poppins-Medium',
                  fontSize: 14,
                }}>
                Remark
              </Text>
            </View>

            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  color: Colors.fontColor1,
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
                {items.transaction_type}
              </Text>
            </View>
          </View>
        ) : null}
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
            second={'Performance Income'}
          />
          <View
            style={{
              backgroundColor: Colors.containerBg1,
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}>
            {per_inc_rep && per_inc_rep.length > 0 ? (
              <FlatList
                data={per_inc_rep ? per_inc_rep : []}
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
    paddingHorizontal: 25,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#707070',
    borderRadius: 5,
    justifyContent: 'center',
    marginBottom: 10,
    // display: 'flex',
    // flexWrap: 'wrap',
  },
});

const mapDispatchToProps = dispatch => ({
  get_PerformanceIncome: () => dispatch(getPerformanceIncome()),
});

const mapStateToProps = state => {
  console.log('here is on PerformanceIncome', state);
  return {
    status: state.incomereport.status,
    loading: state.incomereport.loading,
    per_inc_rep: state.incomereport.performanceincome,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PerformanceIncome);
