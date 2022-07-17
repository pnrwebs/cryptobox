import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import Colors from '../config/Colors'
import { widthToDP, heightToDP } from '../utils/pixelRatio'


const ButtonHalf = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 8,
        backgroundColor: '#FC9D2E',
        borderRadius: 4,
        paddingVertical: 9,
        width: widthToDP('41.94')
    },
    appButtonText: {
        ////fontFamily: 'Poppins-Regular',
        fontSize: 10,
        color: "#fff",
        alignSelf: "center",
    }
});

export default ButtonHalf;