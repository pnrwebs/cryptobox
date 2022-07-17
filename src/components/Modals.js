<Modal isVisible={isModalVisible}>
  <TouchableOpacity
    onPress={toggleModal}
    style={{
      height: 30,
      width: 30,
      borderRadius: 25,
      backgroundColor: '#000000',
      zIndex: 999,
    }}>
    <Icon name="close" type="font-awesome" color="#fff" />
  </TouchableOpacity>
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Image
      source={require('../assets/img/ads.png')}
      resizeMethod={'scale'}
      style={{
        height: windowHeight - 120,
        width: windowWidth - 40,
      }}
    />
  </View>
</Modal>;
