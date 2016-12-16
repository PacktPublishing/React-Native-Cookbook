import React from 'react';
import {
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import BaseButton from './BaseButton';

export default class Button extends BaseButton {
    render() {
        return (
            <TouchableOpacity onPress={this._onButtonPress}>
                {this.renderButtonContent(styles)}
            </TouchableOpacity>
        );
    }
}

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