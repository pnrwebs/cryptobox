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
import {getMyCompoundInvestments} from '../../store/actions';
import {POST_LOGIN_BG, DATE_FORMAT} from '../../config/Constants';
import {LoaderIndicator, NoDataList} from '../../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../config/Colors';
import Styles from '../../css/Styles';
import {ScrollView} from 'react-native-gesture-handler';
import BreadcrumbBlock from '../../components/BreadcrumbBlock';
import moment from 'moment';
import {currency} from '../../utils/UtilityFunctions';

const MyCompoundingInvestment = props => {
  const {loading, get_MyCompoundInvestment, my_comp_investments} = props;

  const [showMore, setShowMore] = useState(false);
  useEffect(() => {
    get_MyCompoundInvestment();
  }, []);

  const Item = ({items, props}) => {
    const ref = useRef(null);
    return (
      <Pressable style={{...styles.listItem}}>
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
            <Icon name="cash-fast" color={Colors.icons} size={40} />
          </View>
          <View style={{width: '70%', alignItems: 'center'}}>
            <Text
              style={{
                color: Colors.fontColor1,
                fontFamily: 'Poppins-Medium',
                fontSize: 16,
              }}>
              {currency(parseFloat(items.member_package_amount))}
            </Text>
            <Text
              style={{
                color: Colors.fontColor1,
                fontFamily: 'Poppins-Medium',
                fontSize: 14,
              }}>
              {items.payment_description}
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
            Payment Date:
          </Text>
          <Text
            style={{
              color: Colors.fontColor1,
              fontFamily: 'Poppins-Medium',
              fontSize: 14,
            }}>
            {moment(items.member_package_buy_date).format(DATE_FORMAT)}
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
            Payment Mode:{' '}
            <Text
              style={{
                color: Colors.fontColor1,
                fontFamily: 'Poppins-Medium',
                fontSize: 14,
              }}>
              {items.member_payment_method}
            </Text>
          </Text>
          <Pressable
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() =>
              props.navigation.navigate('LevelwisePerformanceIncomeStep2')
            }>
            <Text
              style={{
                color: Colors.icons,
                fontFamily: 'Poppins-Medium',
                fontSize: 14,
              }}>
              Status:{' '}
            </Text>
            <Text
              style={{
                color: Colors.fontColor1,
                fontFamily: 'Poppins-Medium',
                fontSize: 14,
              }}>
              {items.transaction_status === '0' ? 'Paid' : 'Pending'}
            </Text>
          </Pressable>
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
            first={'Investments'}
            second={'My Compounding Investment'}
          />
          <View
            style={{
              backgroundColor: Colors.containerBg1,
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}>
            {my_comp_investments && my_comp_investments.length > 0 ? (
              <FlatList
                contentContainerStyle={{paddingBottom: 50}}
                data={my_comp_investments ? my_comp_investments : []}
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
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: '#707070',
    borderRadius: 5,
    justifyContent: 'center',
    marginBottom: 10,
  },
});
const mapDispatchToProps = dispatch => ({
  get_MyCompoundInvestment: () => dispatch(getMyCompoundInvestments()),
});

const mapStateToProps = state => {
  console.log('here is on my investments', state);
  return {
    status: state.investments.status,
    loading: state.investments.loading,
    my_comp_investments: state.investments.compoundinvestment,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyCompoundingInvestment);
