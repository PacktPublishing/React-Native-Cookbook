import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import store from './redux';

class MainApp extends Component {
  render() {
    return (
      <View style={styles.container} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MainApp;
