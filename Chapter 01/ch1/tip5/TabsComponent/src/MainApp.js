import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TabBarIOS
} from 'react-native';

const homeIcon = require('./images/home.png');
const favIcon = require('./images/star.png');
const blogIcon = require('./images/notebook.png');
const profileIcon = require('./images/user.png');

class MainApp extends Component {
  state = {
    selected: 'home',
  };

  selectTab(id) {
    this.setState({
      selected: id,
    });
  }

  renderTab(options) {
    return (
      <TabBarIOS.Item
        title={options.title}
        selected={this.state.selected === options.id}
        onPress={() => this.selectTab(options.id)}
        icon={options.icon}
      >
        <View style={styles.container}>
          <Image source={options.icon} style={styles.icon} />
          <Text style={styles.title}>{options.title}</Text>
        </View>
      </TabBarIOS.Item>
    );
  }

  render() {
    return (
      <TabBarIOS
        tintColor="#42b49a"
      >
        {this.renderTab({title: 'Home', id: 'home', icon: homeIcon})}
        {this.renderTab({title: 'Favorites', id: 'favorites', icon: favIcon})}
        {this.renderTab({title: 'Blog', id: 'blog', icon: blogIcon})}
        {this.renderTab({title: 'Profile', id: 'profile', icon: profileIcon})}
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginTop: 20,
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: '#42b49a'
  },
});

export default MainApp;
