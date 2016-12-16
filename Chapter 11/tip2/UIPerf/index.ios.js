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
  TouchableOpacity
} from 'react-native';

import Button from './Button';

export default class UIPerf extends Component {
  componentWillMount() {
    this.setState({counter: 0});  
  }

  onButtonPress = () => {
    this.setState(function (prevState) {
      return {counter: prevState.counter+1};
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native UI Perf Enhancements!
        </Text>
        <Text style={styles.instructions}>
          This is an example of a Pure Button Component
        </Text>
        <View style={styles.container}>
          <Text>Counter : {this.state.counter}</Text>
          <TouchableOpacity onPress={this.onButtonPress}>
            <Button buttonLabel="Increment Counter"></Button>
          </TouchableOpacity>
        </View>
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
    marginTop : 50,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('UIPerf', () => UIPerf);
