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
import HockeyApp from 'react-native-hockeyapp';

class TestDeployApp extends Component {
  componentWillMount() {
    HockeyApp.configure('0edcf6aea0474744aa2ae0f416f33cde', true);
  }

  componentDidMount() {
    HockeyApp.start();
    HockeyApp.checkForUpdate();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native with HockeyApp!
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

AppRegistry.registerComponent('TestDeployApp', () => TestDeployApp);
