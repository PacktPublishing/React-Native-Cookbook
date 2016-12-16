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
  NavigationExperimental
} from 'react-native';

const {
  StateUtils : NavigationStateUtils
} = NavigationExperimental;


import Navigator from './Navigator';


class BackButton extends Component {

  componentWillMount() {
    this.state = {
      navigationState : {
        index : 0,
        routes : [
          {
            key : 'Initial'
          }
        ]
      }
    };
  }

  _onNavigationChange = (type) => {
    let navigationState = this.state.navigationState,
        newNavigationState;

    switch (type) {
      case 'push':
        newNavigationState = NavigationStateUtils.push(navigationState, {
          key : 'Route-'+Date.now()
        });
        break;

      case 'pop':
        newNavigationState = NavigationStateUtils.pop(navigationState);
        break;
    }

    if(newNavigationState !== navigationState) {
      this.setState({navigationState : newNavigationState});
    }
    
  }
  
  
  render() {
    return (
      <Navigator
        navigationState={this.state.navigationState}
        onNavigationChange={this._onNavigationChange}
      />
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

AppRegistry.registerComponent('BackButton', () => BackButton);
