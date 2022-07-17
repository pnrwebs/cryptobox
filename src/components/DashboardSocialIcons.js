import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Pressable,
  Linking,
} from 'react-native';
import Colors from '../config/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon1 from 'react-native-vector-icons/FontAwesome';

const DashboardSocialIcons = () => {
  const socialIconArray = [
    {
      title: 'Join On',
      iconName: 'instagram',
      url: 'https://www.instagram.com/accounts/login/?next=/cryptobox.life/',
    },
    {
      title: 'Channel',
      iconName: 'send',
      url: 'https://t.me/+UigJDcrpRbNjODQ1',
    },
    {
      title: 'Follow Us',
      iconName: 'twitter',
      url: 'https://twitter.com/cryptoboxlife',
    },
    {
      title: 'Share On',
      iconName: 'facebook',
      url: 'https://www.facebook.com/cryptobox.world/',
    },
    {
      title: 'Join Us',
      iconName: 'whatsapp',
      url: 'https://api.whatsapp.com/send?phone=+6598002931&text=Hii%20cryptobox',
    },
  ];

  const handleurl = val => {
    Linking.openURL(val).catch(err => console.error('Error', err));
  };
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      {socialIconArray.map((item, index) => {
        return (
          <Pressable
            style={styles.iconOuterBlock}
            key={index}
            onPress={() => handleurl(item.url)}>
            <View style={styles.iconInnerBlock}>
              <Icon name={item.iconName} color={Colors.black} size={24} />
            </View>
            <Text style={styles.title}>{item.title}</Text>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  iconOuterBlock: {
    height: hp('9%'),
    width: wp('18%'),
    backgroundColor: '#333333',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ac7703',
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 5,
    shadowRadius: 2.22,
    elevation: 4,
  },
  iconInnerBlock: {
    backgroundColor: '#fffb90',
    borderRadius: 25,
    height: hp('4.5%'),
    width: wp('9%'),
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  title: {
    color: '#bf8606',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    marginTop: 3,
  },
});

export default DashboardSocialIcons;
