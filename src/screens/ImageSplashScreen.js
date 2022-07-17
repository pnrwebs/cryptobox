import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');

const ImageSplashScreen = () => {
  const navigation = useNavigation();

  setTimeout(() => {
    // alert('hahah');
    navigation.replace('Login');
  }, 5000);
  return (
    <View style={styles.container}>
    <Image
      style={styles.tinyLogo}
      source={require('../assets/splash-screen.png')}
      resizeMode="cover"
    />
    </View>
  );
};

// Later on in your styles..
const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
  },
  tinyLogo: {
    width: width,
    height: '100%',
  },
  logo: {
    width: 66,
    height: 58,
  },
});
export default ImageSplashScreen;
