import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';

import {Icon} from 'react-native-elements';
import Colors from '../config/Colors';
import Modal from 'react-native-modal';

const PopUpConfirmation = props => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.showModalConfirmation}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                borderColor: '#fff',
                width: '90%',
                padding: 8,
              }}>
              <Text
                style={{
                  color: Colors.black,
                  textAlign: 'center',
                  //fontFamily: 'Poppins-Regular',
                  fontSize: 20,
                }}>
                {props.modalTitle ? props.modalTitle : ''}
              </Text>
            </View>
            <Pressable
              onPress={() =>
                props.stateChangerConfirmation(!props.showModalConfirmation)
              }>
              <Icon
                name="close"
                type="material-community"
                color="#000"
                size={28}
              />
            </Pressable>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                borderColor: '#fff',
                width: '100%',
                padding: 8,
              }}>
              <Text
                style={{
                  color: Colors.black,
                  //fontFamily: 'Poppins-Regular',
                  fontSize: 18,
                }}>
                {props.message}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 'auto',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default PopUpConfirmation;
