import React, { 
    PureComponent
} from 'react';

import {
    StyleSheet,
    Text,
    View
} from 'react-native';


export default class Button extends PureComponent {
    render() {
        return (
            <View style={styles.button}>
                <Text style={styles.buttonText}>{this.props.buttonLabel}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  button : {
    padding: 20,
    margin: 10,
    backgroundColor : 'blue'
  },
  buttonText : {
    color : 'white',
    textAlign : 'center'
  }
});
