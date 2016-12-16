import React, { Component } from 'react';
import { requireNativeComponent, View } from 'react-native';


export default class Button extends Component {
    onChange = (event) => {
        if(this.props.onTap) {
            this.props.onTap(event.nativeEvent.message);
        }
    }

    render() {
        return <ButtonView {...this.props} onChange={this.onChange} />;
    }
}

Button.propTypes = {
    buttonText : React.PropTypes.string,
    onTap : React.PropTypes.func,
    ...View.propTypes
};

var ButtonView = requireNativeComponent('ButtonView', Button, { 
    nativeOnly: { onChange: true } 
});