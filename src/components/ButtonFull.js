import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import Colors from '../config/Colors'
import { widthToDP, heightToDP } from '../utils/pixelRatio'


const ButtonFull = ({ onPress, title, colorppp }) => (
    <TouchableOpacity onPress={onPress} style={[styles.appButtonContainer, { backgroundColor: Colors.colorppp }]}>
        <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity >
);

const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 8,
        borderRadius: 4,
        paddingVertical: 9,
        width: widthToDP('86.38')
    },
    appButtonText: {
        ////fontFamily: 'Poppins-Regular',
        fontSize: 10,
        color: "#fff",
        alignSelf: "center",
    }
});

export default ButtonFull;