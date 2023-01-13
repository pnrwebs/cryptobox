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
import {getAddFundHistory} from '../../store/actions';
import {POST_LOGIN_BG, DATE_FORMAT} from '../../config/Constants';
import {LoaderIndicator, NoDataList} from '../../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../config/Colors';
import Styles from '../../css/Styles';
import {ScrollView} from 'react-native-gesture-handler';
import BreadcrumbBlock from '../../components/BreadcrumbBlock';
import moment from 'moment';
import {currency, ucword} from '../../utils/UtilityFunctions';

const AddFundHistory = props => {
  const {loading, get_AddFundHistory, add_fund_history} = props;

  const [showMore, setShowMore] = useState(false);
  const [showMoreTxn, setShowMoreTxn] = useState(null);

  const onChangeShowMore = txnid => {
    setShowMore(!showMore);
    setShowMoreTxn(txnid);
  };

  useEffect(() => {
    get_AddFundHistory();
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
              {items.txn_id}
            </Text>
            <Text
              style={{
                color: Colors.fontColor1,
                fontFamily: 'Poppins-Medium',
                fontSize: 14,
              }}>
              {currency(parseFloat(items.amount_usd))}
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
            Deposit Date:
          </Text>
          <Text
            style={{
              color: Colors.fontColor1,
              fontFamily: 'Poppins-Medium',
              fontSize: 14,
            }}>
            {moment(items.date_add).format(DATE_FORMAT)}
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
            {items.currency2}
          </Text>
        </View>
        <Pressable
          style={{alignSelf: 'flex-end', alignItems: 'center'}}
          onPress={() => onChangeShowMore(items.txn_id)}>
          <Text
            style={{
              color: Colors.icons,
              fontFamily: 'Poppins-Medium',
              fontSize: 16,
            }}>
            {showMore && showMoreTxn === items.txn_id ? 'Less' : 'More'}{' '}
            <Icon
              name={
                showMore && showMoreTxn === items.txn_id
                  ? 'chevron-down'
                  : 'chevron-right'
              }
              color={Colors.icons}
              size={18}
            />
          </Text>
        </Pressable>

        {showMore && showMoreTxn === items.txn_id ? (
          <>
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
                Amount (Crypto):
              </Text>
              <Text
                style={{
                  color: Colors.fontColor1,
                  fontFamily: 'Poppins-Medium',
                  fontSize: 14,
                }}>
                {currency(parseFloat(items.amount_btc))}
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
                Paid (Crypto):
              </Text>
              <Text
                style={{
                  color: Colors.fontColor1,
                  fontFamily: 'Poppins-Medium',
                  fontSize: 14,
                }}>
                {items.paid_btc}
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
                Confirmation:
              </Text>
              <Text
                style={{
                  color: Colors.fontColor1,
                  fontFamily: 'Poppins-Medium',
                  fontSize: 14,
                }}>
                {items.confirmations} /1
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
                Status
              </Text>
              <Text
                style={{
                  color: Colors.fontColor1,
                  fontFamily: 'Poppins-Medium',
                  fontSize: 14,
                }}>
                {items.status_text}
              </Text>
            </View>
          </>
        ) : null}
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
          <BreadcrumbBlock first={'Wallet'} second={'Add Fund History'} />
          <View
            style={{
              backgroundColor: Colors.containerBg1,
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}>
            {add_fund_history && add_fund_history.length > 0 ? (
              <FlatList
                contentContainerStyle={{paddingBottom: 50}}
                data={add_fund_history ? add_fund_history : []}
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
    // height: hp('15%'),

    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#707070',
    borderRadius: 5,
    justifyContent: 'center',
    marginBottom: 10,
  },
});
const mapDispatchToProps = dispatch => ({
  get_AddFundHistory: () => dispatch(getAddFundHistory()),
});

const mapStateToProps = state => {
  console.log('here is on ad fund history', state);
  return {
    status: state.wallet.status,
    loading: state.wallet.loading,
    add_fund_history: state.wallet.addfundhistory,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddFundHistory);
