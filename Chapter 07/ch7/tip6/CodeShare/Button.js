import React, { Component } from 'react';
import {
    Platform,
    UnimplementedView
} from 'react-native';
import ButtonIOS from './ButtonIOS';
import ButtonAndroid from './ButtonAndroid';

export default class Button extends Component {
    render() {
        if(Platform.OS === 'ios') {
            return <ButtonIOS {...this.props}/>
        } else if(Platform.OS === 'android') {
            return <ButtonAndroid {...this.props}/>
        } else {
            return <UnimplementedView/>
        }
    }
}