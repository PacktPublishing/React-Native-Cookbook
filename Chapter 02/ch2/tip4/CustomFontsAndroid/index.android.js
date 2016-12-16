/**
 * Importing  and using custom fonts on iOS
 * @author Crysfel Villa
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const CustomFontsAndroid = () => (
  <View style={styles.container}>
    <Text style={styles.base}>Welcome to React Native!</Text>
    <Text style={[styles.base, styles.italic]}>Welcome to React Native!</Text>
    <Text style={[styles.base, styles.light]}>Welcome to React Native!</Text>
    <Text style={[styles.base, styles.bold]}>Welcome to React Native!</Text>
    <Text style={[styles.base, styles.dancing]}>Welcome to React Native!</Text>
    <Text style={[styles.base, styles.indie]}>Welcome to React Native!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e74c3c',
  },
  base: {
    color: '#fff',
    fontFamily: 'Roboto',
    fontSize: 25,
    textAlign: 'center',
    margin: 5,
  },
  light: {
    fontFamily: 'roboto_thin',
    // fontWeight: '300',
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
  dancing: {
    fontFamily: 'dancingscript',
  },
  indie: {
    fontFamily: 'indieflower',
  },
});

AppRegistry.registerComponent('CustomFontsAndroid', () => CustomFontsAndroid);
