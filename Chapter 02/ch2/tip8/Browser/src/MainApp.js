import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Navigator,
} from 'react-native';
import Browser from './BrowserView';

class MainApp extends Component {

  state = {
    links: [
      {title:'My Blog', url: 'https://medium.com/@crysfel/latest'},
      {title:'Google', url: 'https://www.google.com/'},
      {title:'Yahoo', url: 'https://www.yahoo.com/'},
      {title:'Facebook', url: 'https://facebook.com/'},
    ],
  };

  onPressButton(url) {
    this.refs.navigator.push({ url });
  }

  renderButton = (btn, index) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => this.onPressButton(btn.url)}
        style={styles.btn}
      >
        <Text style={styles.text}>{btn.title}</Text>
      </TouchableOpacity>
    );
  }

  renderScene = (route, navigator) => {
    if (route.url) {
      return (
        <Browser url={route.url} navigator={navigator} />
      );
    }

    return (
      <View style={styles.content}>
        <Text>Home</Text>
        <View>
          {this.state.links.map(this.renderButton)}
        </View>
      </View>
    );
  }

  render() {
    return (
      <Navigator
        ref="navigator"
        renderScene={this.renderScene}
        initialRoute={{}}
        configureScene={(route) => (
          Navigator.SceneConfigs.FloatFromBottom
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    flex: 1,
    margin: 10,
    backgroundColor: '#c0392b',
    borderRadius: 3,
    padding: 10,
    paddingRight: 30,
    paddingLeft: 30,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default MainApp;
