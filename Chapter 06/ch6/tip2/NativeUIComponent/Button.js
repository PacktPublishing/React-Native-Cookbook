import React, { Component } from 'react';
import { requireNativeComponent } from 'react-native';


export default class Button extends Component {
    render() {
        return <ButtonView {...this.props} />;
    }
}

Button.propTypes = {
    buttonText : React.PropTypes.string,
    onTap : React.PropTypes.func
};

var ButtonView = requireNativeComponent('ButtonView', Button);