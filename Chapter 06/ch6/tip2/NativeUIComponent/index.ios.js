/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Button from './Button';
class NativeUIComponent extends Component {

  componentWillMount() {
    this.setState({
      count : 0
    });
  }
  
  onButtonTap = () => {
    let count = this.state.count;
    
    this.setState({
      count : count+1
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Button buttonText="Hello Packt" onTap={this.onButtonTap} style={{height: 40, width: 80}}/>
        <Text>Button Pressed Count: {this.state.count}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('NativeUIComponent', () => NativeUIComponent);
