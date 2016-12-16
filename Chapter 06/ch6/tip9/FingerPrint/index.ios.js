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

import Button from 'react-native-button';

import TouchID from 'react-native-touch-id';

class FingerPrint extends Component {
  componentWillMount() {
    this.setState({
      authStatus : undefined
    });
  }
  
  onButtonPress = () => {
    TouchID.authenticate('React Native Cookbook')
      .then(this.onAuthSuccess)
      .catch(this.onAuthFailure);
  }

  onAuthSuccess = (success) => {
    this.setState({
      authStatus : 'Authenticated'
    });
  }
  
  onAuthFailure = (failure) => {
    this.setState({
      authStatus : 'Not Authenticated'
    }); 
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          containerStyle={styles.buttonContainer}
          style={styles.buttonStyle}
          onPress={this.onButtonPress}>
            Authenticate
        </Button>

        <Text style={styles.instructions}>Authentication Status</Text>
        <Text style={styles.welcome}>{this.state.authStatus}</Text>
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
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  buttonContainer: {
    width: 150,
    padding: 10,
    margin: 5,
    height: 40,
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: '#FF5722'
  },
  buttonStyle: {
    fontSize: 16,
    color: 'white'
  }
});

AppRegistry.registerComponent('FingerPrint', () => FingerPrint);
