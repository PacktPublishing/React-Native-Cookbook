import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import PostContainer from './PostContainer'
import PhotoViewer from './PhotoViewer'

const path = 'https://s3.amazonaws.com/crysfel/public/book/03/08';
const timeline = [
  { title: 'Enjoying the fireworks', image: `${path}/01.jpg` },
  { title: 'Climbing the Mount Fuji', image: `${path}/02.jpg` },
  { title: 'Check my last picture', image: `${path}/03.jpg` },
  { title: 'Sakuras are beautiful!', image: `${path}/04.jpg` },
];

class MainApp extends Component {

  state = {
    selected: null,
    position: null,
  };

  showImage = (selected, position) => {
    this.setState({
      selected,
      position,
    });
  }

  closeViewer = () => {
    this.setState({
      selected: null,
      position: null,
    });
  }

  renderViewer() {
    const { selected, position } = this.state;

    if (selected) {
      return (
        <PhotoViewer post={selected} position={position} onClose={this.closeViewer} />
      );
    }
  }

  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.toolbar}>Timeline</Text>
        <ScrollView style={styles.content}>
        {
          timeline.map((post, index) =>
            <PostContainer key={index} post={post} onPress={this.showImage} />
          )
        }
        </ScrollView>
        {this.renderViewer()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#ecf0f1',
    flex: 1,
  },
  toolbar: {
    backgroundColor: '#2c3e50',
    color: '#fff',
    fontSize: 22,
    padding: 20,
    textAlign: 'center',
  },
  content: {
    flex: 1,
  },
});

export default MainApp;
