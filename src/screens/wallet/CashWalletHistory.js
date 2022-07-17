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
import {getCashWalletHistory} from '../../store/actions';
import {POST_LOGIN_BG, DATE_FORMAT} from '../../config/Constants';
import {LoaderIndicator, NoDataList} from '../../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../config/Colors';
import Styles from '../../css/Styles';
import {ScrollView} from 'react-native-gesture-handler';
import BreadcrumbBlock from '../../components/BreadcrumbBlock';
import moment from 'moment';
import {currency, ucword} from '../../utils/UtilityFunctions';

const CashWalletHistory = props => {
  const {loading, get_CashWalletHistory, cash_wallet_history} = props;

  const [showMore, setShowMore] = useState(false);
  useEffect(() => {
    get_CashWalletHistory();
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
              Sender
            </Text>
            <Text
              style={{
                color: Colors.icons,
                fontFamily: 'Poppins-Medium',
                fontSize: 14,
              }}>
              Receiver
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
              {items.member_receiver_id}
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
            Credit
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
            Debit
          </Text>
          <Text
            style={{
              color: Colors.fontColor1,
              fontFamily: 'Poppins-Medium',
              fontSize: 14,
            }}>
            {currency(parseFloat(items.debit_amount))}
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
            Date
          </Text>
          <Text
            style={{
              color: Colors.fontColor1,
              fontFamily: 'Poppins-Medium',
              fontSize: 14,
            }}>
            {moment(items.transaction_date_time).format(DATE_FORMAT)}
          </Text>
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
              Remark:{' '}
            </Text>
            <Text
              style={{
                color: Colors.fontColor1,
                fontFamily: 'Poppins-Medium',
                fontSize: 14,
                textAlign: 'right',
              }}>
              {items.transaction_type}
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
              Status{' '}
            </Text>
            <Text
              style={{
                color: Colors.fontColor1,
                fontFamily: 'Poppins-Medium',
                fontSize: 14,
                textAlign: 'right',
              }}>
              {items.transaction_status === '0'
                ? 'Paid'
                : items.transaction_status === '1'
                ? 'Pending'
                : 'Lapse'}
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
          <BreadcrumbBlock first={'Wallet'} second={'My Withdrawal History'} />
          <View
            style={{
              backgroundColor: Colors.containerBg1,
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}>
            {cash_wallet_history && cash_wallet_history.length > 0 ? (
              <FlatList
                data={cash_wallet_history ? cash_wallet_history : []}
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
    // height: hp('20%'),
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
  get_CashWalletHistory: () => dispatch(getCashWalletHistory()),
});

const mapStateToProps = state => {
  console.log('here is on cash wallet fund history', state);
  return {
    status: state.wallet.status,
    loading: state.wallet.loading,
    cash_wallet_history: state.wallet.cashwallethistory,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CashWalletHistory);
