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
  Image,
  DeviceEventEmitter
} from 'react-native';

class HideContent extends Component {
  componentWillMount() {
    this.setState({
      showMask : undefined
    });

    this.subscription = DeviceEventEmitter.addListener('focusChange', this.onFocusChange);
  }
  onFocusChange = (params) => {
    this.setState({showMask : !params.appHasFocus})
  }
  componentWillUnmount() {
    this.subscription.remove();
  }
  render() {
    if(this.state.showMask) {
      return (<Image source={require('./hidden.jpg')} />);
    }
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          React Native Hide App Content
        </Text>
        <Text style={styles.instructions}>
          Shake the device to show the Dev Menu or pull down top bar to mask the application
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

AppRegistry.registerComponent('HideContent', () => HideContent);
