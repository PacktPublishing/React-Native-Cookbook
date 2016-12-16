import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

export default class BaseButton extends Component {
    _onButtonPress = () => {
        const onTap = this.props.onTap;
        if(onTap) {
            onTap();
        }
    }

    renderButtonContent(styles) {
        return (
            <View style={styles.button}>
                <Text style={styles.label}>{this.props.label}</Text>
            </View>
        );
    }
}