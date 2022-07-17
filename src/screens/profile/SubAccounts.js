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
  FlatList,
  Pressable,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import {getSubAccounts} from '../../store/actions';
import {POST_LOGIN_BG} from '../../config/Constants';
import {LoaderIndicator, NoDataList} from '../../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../config/Colors';
import Styles from '../../css/Styles';
import {ScrollView} from 'react-native-gesture-handler';
import BreadcrumbBlock from '../../components/BreadcrumbBlock';

const SubAccounts = props => {
  const {loading, get_SubAccounts, sub_accounts} = props;

  useEffect(() => {
    get_SubAccounts();
  }, []);

  const Item = ({items, props}) => {
    return (
      <View style={styles.listItem}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              color: '#b9822f',
              fontFamily: 'Poppins-Medium',
              fontSize: 14,
            }}>
            {items.member_user_id}
          </Text>
          <Text
            style={{
              color: Colors.fontColor1,
              fontFamily: 'Poppins-Medium',
              fontSize: 14,
            }}>
            Full Name
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              color: Colors.fontColor1,
              fontFamily: 'Poppins-Medium',
              fontSize: 14,
            }}>
            {items.member_username}
          </Text>
          <Text
            style={{
              color: Colors.fontColor1,
              fontFamily: 'Poppins-Medium',
              fontSize: 14,
            }}>
            {items.member_first_name} {items.member_first_name}
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
          <BreadcrumbBlock first={'Profile'} second={props.route.name} />

          <View
            style={{
              backgroundColor: Colors.containerBg1,
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}>
            {sub_accounts && sub_accounts.length > 0 ? (
              <FlatList
                data={sub_accounts ? sub_accounts : []}
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
    height: hp('9%'),
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
  get_SubAccounts: () => dispatch(getSubAccounts()),
});

const mapStateToProps = state => {
  console.log('here is on my my profile', state);
  return {
    status: state.profile.status,
    loading: state.profile.loading,
    sub_accounts: state.profile.subaccounts,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubAccounts);
