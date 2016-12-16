import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  NavigationExperimental,
  BackAndroid
} from 'react-native';

import InitialScene from './InitialScene';

const {
  CardStack : NavigationCardStack
} = NavigationExperimental;

export default class Navigator extends Component {
  constructor(props, context) {
    super(props, context);

    this._onPushRoute = this.props.onNavigationChange.bind(null, 'push');
    this._onPopRoute = this.props.onNavigationChange.bind(null, 'pop');

    BackAndroid.addEventListener('hardwareBackPress', this.onAndroidBackPress);
  }

  onAndroidBackPress = () => {
    if(this.props.navigationState.index) {
      this._onPopRoute();
      return true;
    }

    return false;
  }

  _renderScene = (sceneProps) => {
    return (
      <InitialScene
        route={sceneProps.scene.route}
        onPushRoute={this._onPushRoute}
        onPopRoute={this._onPopRoute}
      />
    );
  }

  render() {
    return (
      <NavigationCardStack
        onNavigationBack={this._onPopRoute}
        navigationState={this.props.navigationState}
        renderScene={this._renderScene}
        style={{flex:1}}
      />
    );
  }
}