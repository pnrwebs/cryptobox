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
import {getKnowledgeCenterList} from '../../store/actions';
import {POST_LOGIN_BG, DATE_FORMAT} from '../../config/Constants';
import {LoaderIndicator, NoDataList} from '../../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../config/Colors';
import Styles from '../../css/Styles';
import {ScrollView} from 'react-native-gesture-handler';
import BreadcrumbBlock from '../../components/BreadcrumbBlock';
import moment from 'moment';
import {currency, ucword} from '../../utils/UtilityFunctions';

const KnowledgeCenter = props => {
  const {loading, get_KnowledgeCenter, knowledge_center_list} = props;
  const [showMore, setShowMore] = useState(null);
  useEffect(() => {
    get_KnowledgeCenter();
  }, []);
  const Item = ({items, props}) => {
    return (
      <View style={{...styles.listItem}}>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              color: Colors.icons,
              fontFamily: 'Poppins-Bold',
              fontSize: 16,
              textTransform: 'uppercase',
            }}>
            {items.main_title}
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
              color: Colors.fontColor1,
              fontFamily: 'Poppins-Medium',
              fontSize: 14,
            }}>
            {items.detail_description.substring(0, 100)}...
          </Text>
        </View>

        <Pressable
          onPress={() =>
            props.navigation.navigate('KnowledgeDetails', {knowledge: items})
          }
          style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
          <Text
            style={{
              color: Colors.icons,
              fontFamily: 'Poppins-Medium',
              fontSize: 14,
            }}>
            More
          </Text>
          <Icon name="chevron-right" color={Colors.icons} size={22} />
        </Pressable>
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
          <BreadcrumbBlock first={'Dashboard'} second={'Knowledge Center'} />
          <View
            style={{
              backgroundColor: Colors.containerBg1,
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}>
            {knowledge_center_list && knowledge_center_list.length > 0 ? (
              <FlatList
                data={knowledge_center_list ? knowledge_center_list : []}
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
  get_KnowledgeCenter: () => dispatch(getKnowledgeCenterList()),
});

const mapStateToProps = state => {
  console.log('here is on ad fund history', state);
  return {
    status: state.knowledgecenter.status,
    loading: state.knowledgecenter.loading,
    knowledge_center_list: state.knowledgecenter.knowledgecenterlist,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(KnowledgeCenter);
