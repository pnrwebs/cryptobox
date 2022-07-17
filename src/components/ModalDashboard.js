import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';

import {Icon} from 'react-native-elements';
import Colors from '../config/Colors';
import Modal from 'react-native-modal';

const ModalCheers = props => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.showModalCheers}>
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
                  color: Colors.white,
                  textAlign: 'center',
                  fontSize: 18,
                }}>
                {props.modalTitle ? props.modalTitle : ''}
              </Text>
            </View>
            <Pressable
              onPress={() => props.stateChangerCheers(!props.showModalCheers)}>
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
              <Text style={{color: Colors.white}}>Sent</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#fff',
                width: '65%',
                padding: 8,
              }}>
              <Text style={{color: Colors.white}}>Total Amount</Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#fff',
                padding: 8,
                width: '35%',
              }}>
              <Text style={{color: Colors.white}}>$0.00</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#fff',
                width: '65%',
                padding: 8,
              }}>
              <Text style={{color: Colors.white}}>Total Count</Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#fff',
                padding: 8,
                width: '35%',
              }}>
              <Text style={{color: Colors.white}}>0</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <View
              style={{
                borderColor: '#fff',
                width: '100%',
                padding: 8,
              }}>
              <Text style={{color: Colors.white}}>Received</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#fff',
                width: '65%',
                padding: 8,
              }}>
              <Text style={{color: Colors.white}}>Total Amount</Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#fff',
                padding: 8,
                width: '35%',
              }}>
              <Text style={{color: Colors.white}}>$0.00</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#fff',
                width: '65%',
                padding: 8,
              }}>
              <Text style={{color: Colors.white}}>Total Count</Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#fff',
                padding: 8,
                width: '35%',
              }}>
              <Text style={{color: Colors.white}}>0</Text>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const ModalCheers1 = props => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.showModalCheers1}>
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
                  color: Colors.white,
                  textAlign: 'center',
                  fontSize: 18,
                }}>
                {props.modalTitle ? props.modalTitle : ''}
              </Text>
            </View>
            <Pressable
              onPress={() =>
                props.stateChangerCheers1(!props.showModalCheers1)
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
                borderWidth: 1,
                borderColor: '#fff',
                width: '65%',
                padding: 8,
              }}>
              <Text style={{color: Colors.white}}>Total Amount</Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#fff',
                padding: 8,
                width: '35%',
              }}>
              <Text style={{color: Colors.white}}>$0.00</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#fff',
                width: '65%',
                padding: 8,
              }}>
              <Text style={{color: Colors.white}}>Total Count</Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#fff',
                padding: 8,
                width: '35%',
              }}>
              <Text style={{color: Colors.white}}>0</Text>
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
    backgroundColor: '#FC9D2E',
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
    width: '80%',
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

export {ModalCheers, ModalCheers1};
