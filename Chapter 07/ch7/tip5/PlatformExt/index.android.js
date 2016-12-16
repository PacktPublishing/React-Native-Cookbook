/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import Button from './Button';

class PlatformExt extends Component {
  onTap() {
    console.log('android button pressed');
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Button label="Android Button" onTap={this.onTap}/>
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

AppRegistry.registerComponent('PlatformExt', () => PlatformExt);
