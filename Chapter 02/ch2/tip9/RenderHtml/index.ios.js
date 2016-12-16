/**
 * Parsing html string and render native components
 * @author Crysfel Villa
 * @flow
 */
import React from 'react';
import MainApp from './src/MainApp';
import { AppRegistry } from 'react-native';

AppRegistry.registerComponent('RenderHtml', () => MainApp);
