/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

import Toolbar from './Toolbar';

class Platforms extends Component {
  render() {
    var toolbarItems = [
      {
        id : 1,
        title : 'Tab One',
        type : 'contacts'
      },
      {
        id : 2,
        title : 'Tab Two',
        type : 'favorites'
      },
      {
        id : 3,
        title : 'Tab Three',
        type : 'downloads'
      }
    ];

    return (
      <Toolbar items={toolbarItems}/>
    );
  }
}

AppRegistry.registerComponent('Platforms', () => Platforms);
