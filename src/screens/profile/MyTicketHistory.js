/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState, useRef} from 'react';
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
import {getMyTickets} from '../../store/actions';
import {POST_LOGIN_BG, DATE_FORMAT} from '../../config/Constants';
import {LoaderIndicator, NoDataList} from '../../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../config/Colors';
import Styles from '../../css/Styles';
import {ScrollView} from 'react-native-gesture-handler';
import BreadcrumbBlock from '../../components/BreadcrumbBlock';
import moment from 'moment';

const MyTicketHistory = props => {
  const {loading, get_MyTickets, my_tickets} = props;

  const [showMore, setShowMore] = useState(false);
  useEffect(() => {
    get_MyTickets();
  }, []);

  const Item = ({items, props}) => {
    const ref = useRef(null);
    return (
      <Pressable
        style={styles.listItem}
        onPress={() =>
          props.navigation.navigate('MyTicketDetails', {ticketDetails: items})
        }>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              color: '#b9822f',
              fontFamily: 'Poppins-Medium',
              fontSize: 14,
            }}>
            {moment(items.posted_date).format(DATE_FORMAT)}
          </Text>
          <Text
            style={{
              color: '#b9822f',
              fontFamily: 'Poppins-Medium',
              fontSize: 14,
            }}>
            {items.category}
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              color: Colors.fontColor1,
              fontFamily: 'Poppins-Medium',
              fontSize: 14,
            }}>
            {items.subject}
          </Text>

          <Icon name="chevron-right" color={Colors.icons} size={22} />
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
          <BreadcrumbBlock first={'Profile'} second={'My Ticket History'} />

          <View
            style={{
              backgroundColor: Colors.containerBg1,
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}>
            {my_tickets && my_tickets.length > 0 ? (
              <FlatList
                contentContainerStyle={{paddingBottom: 40}}
                data={my_tickets ? my_tickets : []}
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
  get_MyTickets: () => dispatch(getMyTickets()),
});

const mapStateToProps = state => {
  console.log('here is on my my leverage', state);
  return {
    status: state.profile.status,
    loading: state.profile.loading,
    my_tickets: state.profile.mytickets,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyTicketHistory);
