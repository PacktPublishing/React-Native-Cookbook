import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';
import Notification from './Notification'

class MainApp extends Component {

  state = {
    nofify: false,
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  };

  onToggleNotification = () => {
    this.setState({
      notify: !this.state.notify,
    });
  }

  render() {
    const notify = this.state.notify
      ? <Notification
          autoHide
          message={this.state.message}
          onClose={this.onToggleNotification}
        />
    : null;

    return (
      <View>
        <Text style={styles.toolbar}>Main toolbar</Text>
        <View style={styles.content}>
          <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
          <TouchableOpacity
            onPress={this.onToggleNotification}
            style={styles.btn}
          >
            <Text style={styles.text}>Show notification</Text>
          </TouchableOpacity>
          <Text>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
          {notify}
        </View>
      </View>
    );
  }
  }

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#8e44ad',
    color: '#fff',
    fontSize: 22,
    padding: 20,
    textAlign: 'center',
  },
  content: {
    padding: 10,
    overflow: 'hidden',
  },
  btn: {
    margin: 10,
    backgroundColor: '#9b59b6',
    borderRadius: 3,
    padding: 10,
  },
  text: {
    textAlign: 'center',
    color: '#fff',
  },
});

export default MainApp;
