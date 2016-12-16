import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';


const ButtonIOS = ({label, onPress}) => (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
            <Text style={styles.label}>{label}</Text>
        </View>
    </TouchableOpacity>
);
export default ButtonIOS;

const styles = StyleSheet.create({
    button: {
        padding : 8,
        backgroundColor : '#007AFF'
    },
    label: {
        color : 'white',
        fontSize : 17,
        textAlign : 'center'
    }
});