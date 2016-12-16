import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

class MainApp extends PureComponent {
  state = {
    result: '',
  };

  onLoad = async () => {
    this.setState({ result: 'Loading, please wait...' });

    const response = await fetch('https://my-bookmarks-api.herokuapp.com/api/bookmarks', {
      method: 'GET',
    });

    const result = await response.text();

    this.setState({ result });
  }

  render() {
    const { result } = this.state;

    return (
      <View style={styles.container}>
        <View>
          <TextInput
            style={styles.preview}
            value={result}
            placeholder="Result..."
            editable={false}
            multiline
          />
          <TouchableOpacity onPress={this.onLoad} style={styles.btn}>
            <Text>Load data</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  preview: {
    backgroundColor: '#bdc3c7',
    width: 300,
    height: 400,
    padding: 10,
    borderRadius: 5,
    color: '#333',
    marginBottom: 50,
  },
  btn: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 3,
    marginTop: 10,
  },
});

export default MainApp;
