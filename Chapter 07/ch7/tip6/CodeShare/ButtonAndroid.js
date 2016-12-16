import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback
} from 'react-native';


const ButtonAndroid = ({label, onPress}) => (
    <TouchableNativeFeedback onPress={onPress}>
        <View style={styles.button}>
            <Text style={styles.label}>{label}</Text>
        </View>
    </TouchableNativeFeedback>
);

export default ButtonAndroid;

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