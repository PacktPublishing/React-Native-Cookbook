import React from 'react';
import {
    StyleSheet,
    TouchableNativeFeedback
} from 'react-native';
import BaseButton from './BaseButton';

export default class Button extends BaseButton {
    render() {
        return (
            <TouchableNativeFeedback onPress={this._onButtonPress}>
                {this.renderButtonContent(styles)}
            </TouchableNativeFeedback>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        padding : 20,
        backgroundColor : '#009688'
    },
    label: {
        color : 'white',
        fontSize : 14,
        textAlign : 'center'
    }
});