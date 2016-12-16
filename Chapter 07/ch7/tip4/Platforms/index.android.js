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

import Toolbar from './Toolbar';

class Platforms extends Component {
  render() {
    var toolbarItems = [
      {
        id : 1,
        title : 'Action One',
        show : 'always',
        showWithText : true
      },
      {
        id : 2,
        title : 'Action Two',
        show : 'always',
        showWithText : true
      },
      {
        id : 3,
        title : 'Action Three',
        show : 'always',
        showWithText : true
      }
    ];

    return (
      <Toolbar items={toolbarItems}/>
    );
  }
}


AppRegistry.registerComponent('Platforms', () => Platforms);
