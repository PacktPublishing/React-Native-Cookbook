import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  PixelRatio,
  TouchableOpacity
} from 'react-native';

export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity
          style={styles.row}
          onPress={this.props.onPress}>
          <Text style={styles.buttonText}>
              {this.props.text}
          </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    padding: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: '#CDCDCD',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '500',
  }
});