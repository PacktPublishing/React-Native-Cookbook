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
  View,
  AppState
} from 'react-native';

class ApplicationState extends Component {
  previousAppState : undefined
  currentAppState : undefined

  componentWillMount() {
    AppState.addEventListener('change', this.onAppStateChange);
    this.currentAppState = 'active';
    this.setState({
      appStatus: 'Welcome!'
    });
  }
  
  componentWillUnmount() {
    AppState.removeEventListener('change', this.onAppStateChange);
  }

  onAppStateChange = (appState) => {
    let appStatus;
    
    this.previousAppState = this.currentAppState;
    this.currentAppState = appState;

    switch(appState) {
      case 'inactive':
        appStatus = "I'm Hiding!";
        break;
      case 'background':
        appStatus = "I'm Hidden";
        break;
      case 'active':
        appStatus = 'Welcome Back!'
        break;
    }

    this.setState({appStatus});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.state.appStatus}
        </Text>
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
});

AppRegistry.registerComponent('ApplicationState', () => ApplicationState);
