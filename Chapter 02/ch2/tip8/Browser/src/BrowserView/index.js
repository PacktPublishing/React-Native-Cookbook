import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  WebView,
  StyleSheet,
} from 'react-native';

class BrowserView extends Component {
  static propTypes = {
    url: PropTypes.string,
    navigator: PropTypes.object,
  };

  goBack() {
    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.toolbar}
          onPress={() => this.goBack()}
        >
          <Text style={styles.text}>Back</Text>
        </TouchableOpacity>
        <WebView
          source={{ uri: this.props.url }}
          style={styles.content}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toolbar: {
    backgroundColor: '#e74c3c',
    padding: 20,
  },
  text: {
    color: '#fff',
  },
  content: {
    flex: 1,
  },
});

export default BrowserView;
