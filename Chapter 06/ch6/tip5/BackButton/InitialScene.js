import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  PixelRatio,
  ScrollView
} from 'react-native';

import Button from './Button';
export default class InitialScene extends Component {
  render () {
    return (
      <ScrollView style={styles.scrollView}>
        <Text style={styles.row}>
          Route: {this.props.route.key}
        </Text>
        <Button
          text="Next"
          onPress={this.props.onPushRoute}
        />
        <Button
          text="Back"
          onPress={this.props.onPopRoute}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  navigator: {
    flex: 1,
  },
  scrollView: {
    marginTop: 64
  },
  row: {
    padding: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: '#CDCDCD',
  },
  rowText: {
    fontSize: 17,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '500',
  },
});
