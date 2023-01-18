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
  useWindowDimensions,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import RenderHtml from 'react-native-render-html';
import {POST_LOGIN_BG, DATE_FORMAT} from '../../config/Constants';
import LoaderIndicator from '../../components/LoaderIndicator';
import Colors from '../../config/Colors';
import Styles from '../../css/Styles';
import {ScrollView} from 'react-native-gesture-handler';
import BreadcrumbBlock from '../../components/BreadcrumbBlock';
import LinearGradient from 'react-native-linear-gradient';

const KnowledgeDetails = props => {
  const {width} = useWindowDimensions();
  const {loading} = props;
  const [knowledge, setKnowledge] = useState(props.route.params.knowledge);

  const source = {
    html: knowledge.detail_description,
  };

  const tagsStyles = {
    body: {
      whiteSpace: 'normal',
      color: '#FFF',
    },
    a: {
      color: '#0000EE',
    },
  };

  return loading ? (
    <LoaderIndicator />
  ) : (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <ImageBackground
        source={POST_LOGIN_BG}
        resizeMode="stretch"
        style={styles.image}>
        <View style={{...Styles.secondContainerView}}>
          <BreadcrumbBlock first={'Knowledge Center'} second={'Description'} />
          <LinearGradient
            start={{x: 0.0, y: 0.25}}
            end={{x: 0, y: 1.0}}
            colors={['#bf8606', '#604303']}
            style={{
              position: 'relative',
              alignItems: 'center',
              height: hp('29%'),
            }}></LinearGradient>
          <View
            style={{
              backgroundColor: Colors.containerBg1,
              paddingHorizontal: 14,
              position: 'absolute',
              height: hp('72%'),
              width: wp('86%'),
              top: '30%',
              borderRadius: 8,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 24,
                color: Colors.fontColor1,
                textAlign: 'center',
                marginTop: 20,
              }}>
              {knowledge.main_title}
            </Text>
            <ScrollView>
              <View style={{marginTop: 30}}>
                <View style={{paddingVertical: 20}}>
                  <RenderHtml
                    contentWidth={width}
                    source={source}
                    tagsStyles={tagsStyles}
                  />
                  {/* <Text style={styles.textContent}>
                    {knowledge.detail_description}
                  </Text> */}
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  dividerLine: {
    borderColor: '#393838',
    borderWidth: 0.5,
    width: '100%',
    alignSelf: 'center',
  },
  title: {
    color: '#b9822f',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    textTransform: 'capitalize',
  },
  textContent: {
    color: Colors.fontColor1,
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    textTransform: 'capitalize',
  },
});

export default KnowledgeDetails;
