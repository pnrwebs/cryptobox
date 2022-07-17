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
import {getWithdrawalHistory} from '../../store/actions';
import {POST_LOGIN_BG, DATE_FORMAT} from '../../config/Constants';
import {LoaderIndicator, NoDataList} from '../../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../config/Colors';
import Styles from '../../css/Styles';
import {ScrollView} from 'react-native-gesture-handler';
import BreadcrumbBlock from '../../components/BreadcrumbBlock';
import moment from 'moment';
import {currency, ucword} from '../../utils/UtilityFunctions';

const WithdrawalHistory = props => {
  const {loading, get_WithdrawalHistory, withdrawal_history} = props;

  const [showMore, setShowMore] = useState(false);
  useEffect(() => {
    get_WithdrawalHistory();
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
              Txn Id
            </Text>
            <Text
              style={{
                color: Colors.icons,
                fontFamily: 'Poppins-Medium',
                fontSize: 14,
              }}>
              Address
            </Text>
          </View>

          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                color: Colors.fontColor1,
                fontFamily: 'Poppins-Medium',
                fontSize: 14,
              }}>
              {items.transaction_number.slice(0, 30)}...
            </Text>
            <Text
              style={{
                color: Colors.fontColor1,
                fontFamily: 'Poppins-Medium',
                fontSize: 14,
              }}>
              {items.member_account_number.slice(0, 25)}...
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
            Amount
          </Text>
          <Text
            style={{
              color: Colors.fontColor1,
              fontFamily: 'Poppins-Medium',
              fontSize: 14,
            }}>
            {currency(parseFloat(items.amount_withdraw))}
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
              color: Colors.icons,
              fontFamily: 'Poppins-Medium',
              fontSize: 14,
            }}>
            Withdrawal Date
          </Text>
          <Text
            style={{
              color: Colors.fontColor1,
              fontFamily: 'Poppins-Medium',
              fontSize: 14,
            }}>
            {moment(items.withdraw_date_time).format(DATE_FORMAT)}
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
              color: Colors.icons,
              fontFamily: 'Poppins-Medium',
              fontSize: 14,
            }}>
            Mode:{' '}
          </Text>
          <Text
            style={{
              color: Colors.fontColor1,
              fontFamily: 'Poppins-Medium',
              fontSize: 14,
            }}>
            {items.member_bank_name}
          </Text>
          {/* <Pressable
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => null}>
            <Text
              style={{
                color: Colors.icons,
                fontFamily: 'Poppins-Medium',
                fontSize: 14,
              }}>
              More >>
            </Text>
          </Pressable> */}
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
          <BreadcrumbBlock first={'Wallet'} second={'My Withdrawal History'} />
          <View
            style={{
              backgroundColor: Colors.containerBg1,
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}>
            {withdrawal_history && withdrawal_history.length > 0 ? (
              <FlatList
                data={withdrawal_history ? withdrawal_history : []}
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
    height: hp('18%'),
    paddingHorizontal: 20,
    // paddingVertical: 20,
    borderWidth: 1,
    borderColor: '#707070',
    borderRadius: 5,
    justifyContent: 'center',
    marginBottom: 10,
  },
});
const mapDispatchToProps = dispatch => ({
  get_WithdrawalHistory: () => dispatch(getWithdrawalHistory()),
});

const mapStateToProps = state => {
  console.log('here is on with history', state);
  return {
    status: state.wallet.status,
    loading: state.wallet.loading,
    withdrawal_history: state.wallet.withdrawalhistory,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WithdrawalHistory);
