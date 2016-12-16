import React, { PureComponent } from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

const endpoint = 'https://my-bookmarks-api.herokuapp.com/api/bookmarks';

class MainApp extends PureComponent {
  state = {
    result: '',
    title: '',
    url: '',
  };

  onLoad = async () => {
    this.setState({ result: 'Loading, please wait...' });

    const response = await fetch(endpoint, {
      method: 'GET',
    });

    const result = await response.text();

    this.setState({ result });
  }

  onSave = async () => {
    const { title, url } = this.state;

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify({
        category_id: 1,
        title,
        url,
      }),
    });

    const result = await response.json();

    if (result.success === false) {
      Alert.alert('Error', 'There was an error while saving the bookmark');
    } else {
      Alert.alert('Sucess', 'Bookmark successfully saved');
      this.onLoad();
    }
  }

  onTitleChange = (title) => this.setState({ title });
  onUrlChange = (url) => this.setState({ url });

  render() {
    const { result, title, url } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.toolbar}>Add a new bookmark</Text>
        <ScrollView style={styles.content}>
          <TextInput
            style={styles.input}
            onChangeText={this.onTitleChange}
            value={title}
            placeholder="Title"
          />
          <TextInput
            style={styles.input}
            onChangeText={this.onUrlChange}
            value={url}
            placeholder="URL (http://example.com)"
          />
          <TouchableOpacity onPress={this.onSave} style={styles.btn}>
            <Text>Save!</Text>
          </TouchableOpacity>
          <TextInput
            style={[styles.input, styles.preview]}
            value={result}
            placeholder="Result..."
            editable={false}
            multiline
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  toolbar: {
    backgroundColor: '#3498db',
    color: '#fff',
    textAlign: 'center',
    padding: 25,
    fontSize: 20,
  },
  content: {
    flex: 1,
    padding: 10,
  },
  preview: {
    backgroundColor: '#bdc3c7',
    flex: 1,
    height: 500,
  },
  input: {
    backgroundColor: '#ecf0f1',
    borderRadius: 3,
    height: 40,
    padding: 5,
    marginBottom: 10,
    flex: 1,
  },
  btn: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 3,
    marginBottom: 30,
  },
});

export default MainApp;
