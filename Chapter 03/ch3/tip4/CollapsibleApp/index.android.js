/**
 * Expanding and Collapsing containers
 * @author Crysfel Villa
 * @flow
 */

import React from 'react';
import { AppRegistry, UIManager } from 'react-native';
import MainApp from './src/MainApp';

const EnableAnimations = () => {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  return <MainApp />;
}

AppRegistry.registerComponent('CollapsibleApp', () => EnableAnimations);
