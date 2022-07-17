import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import Colors from '../config/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Styles from '../css/Styles';
import moment from 'moment';
import {Divider, Avatar} from 'react-native-paper';

const Leaves = ({item, props}) => (
  <View style={styles.item}>
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <View style={{flexDirection: 'column'}}>
        <Text style={{color: '#a2a2a2', fontSize: 18, fontWeight: '700'}}>
          {item.leave_type_name} ({item.leave_type.toUpperCase()})
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              color: '#a2a2a2',
              fontSize: 14,
              fontWeight: '700',
              alignContent: 'center',
            }}>
            {item.no_of_days + ' Days'}
          </Text>
          <Icon
            name="circle-small"
            color="#a2a2a2"
            size={28}
            onPress={() => alert('asdfsa')}
          />
          <Text
            style={{
              color: '#a2a2a2',
              fontSize: 14,
              fontWeight: '700',
              alignContent: 'center',
            }}>
            {moment(item.leave_from).format('MMM D')} to{' '}
            {moment(item.leave_to).format('MMM D YYYY')}
          </Text>
        </View>
      </View>
      <Pressable
        onPress={() =>
          props.navigation.navigate('LeaveDetail', {details: item})
        }>
        <Icon name="dots-vertical" color={Colors.primaryBlue} size={28} />
      </Pressable>
    </View>
    <Divider style={{...Styles.dividerLine, width: '100%'}} />
    {item.status !== 0 ? (
      <>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
          }}>
          <Avatar.Image
            size={50}
            source={require('../assets/img/pexels-photo-220453.jpeg')}
          />
          <View style={{flexDirection: 'column', marginLeft: 20}}>
            <Text style={{color: '#a2a2a2', fontSize: 18, fontWeight: '700'}}>
              My Boss HR
            </Text>
            <Text
              style={{
                color: '#a2a2a2',
                fontSize: 14,
                fontWeight: '700',
                alignContent: 'center',
              }}>
              Head HR
            </Text>
          </View>
        </View>
        <Divider style={{...Styles.dividerLine, width: '100%'}} />
      </>
    ) : null}

    <View
      style={{
        alignItems: 'flex-end',
        paddingVertical: 10,
        // flexDirection: 'row',
        // justifyContent: 'space-between',
      }}>
      {/* <Pressable
        style={{
          paddingHorizontal: 8,
          paddingVertical: 5,
          alignItems: 'center',
          borderWidth: 1,
          borderRadius: 5,
          // width: 100,
        }}>
        <Text style={{color: '#000'}}>Approvers</Text>
      </Pressable> */}

      <Pressable
        style={{
          paddingHorizontal: 8,
          paddingVertical: 5,
          alignItems: 'center',
          backgroundColor:
            item.status === 0
              ? Colors.detail
              : item.status === 1
              ? Colors.accept
              : Colors.deny,
          borderRadius: 5,
          // width: 100,
        }}>
        {item.status === 0 ? (
          <Text style={{color: Colors.white}}>Awating</Text>
        ) : item.status === 1 ? (
          <Text style={{color: Colors.white}}>Approved</Text>
        ) : (
          <Text style={{color: Colors.white}}>Rejected</Text>
        )}
      </Pressable>
    </View>
  </View>
);

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 10,
    elevation: 2,
    borderRadius: 5,
    borderLeftWidth: 4,
    borderLeftColor: Colors.primaryBlue,
  },
  title: {
    fontSize: 18,
  },
  title1: {
    fontSize: 16,
    marginLeft: 10,
  },
  title2: {
    fontSize: 12,
  },
});
export default Leaves;
