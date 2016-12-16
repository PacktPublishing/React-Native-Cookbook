import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
} from 'react-native';
import Button from './Button';

class MainApp extends Component {

  state = {
    loading: false,
  };

  onPressBtn = (loading) => {
    this.setState({ loading });
  }

  render() {
    const { loading } = this.state;

    return (
      <View style={styles.main}>
        <Text style={styles.toolbar}>Animated containers</Text>
        <View style={styles.content}>
          <Button label="Login" loading={loading} onPress={this.onPressBtn} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  toolbar: {
    backgroundColor: '#f39c12',
    color: '#fff',
    fontSize: 22,
    padding: 20,
    textAlign: 'center',
  },
  content: {
    padding: 10,
    backgroundColor: '#ecf0f1',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MainApp;
