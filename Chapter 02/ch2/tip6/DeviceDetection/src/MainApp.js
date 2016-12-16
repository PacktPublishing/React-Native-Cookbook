import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Dimensions from './utils/Dimensions';
import UserList from './UserList'
import UserDetail from './UserDetail'
import data from './data.json';

class MainApp extends Component {
  renderMaster() {
    return (
      <UserList contacts={data.results} />
    );
  }

  renderDetail() {
    if (Dimensions.isTablet()) {
      return (
        <UserDetail contact={data.results[0]} />
      );
    }
  }

  render() {
    return (
      <View style={styles.content}>
        {this.renderMaster()}
        {this.renderDetail()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default MainApp;
