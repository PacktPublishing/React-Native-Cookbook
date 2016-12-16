import React, { Component } from 'react';
import { Alert, StyleSheet, View, Text } from 'react-native';
import Orientation from 'react-native-orientation';
import Menu from './Menu';


class MainApp extends Component {

  state = {
    orientation: null,
  };

  componentWillMount() {
    const orientation = Orientation.getInitialOrientation();
    this.setState({
      orientation,
    });
  }

  componentDidMount() {
    Orientation.addOrientationListener(this.onOrientationChange);
  }

  componentWillUnmount() {
    Orientation.removeOrientationListener(this.onOrientationChange);
  }

  onOrientationChange = (orientation) => {
    this.setState({
      orientation,
    });
  }

  render() {
    return (
      <View style={styles.content}>
        <Menu orientation={this.state.orientation} />
        <View style={styles.main}>
          <Text>Main Content</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  main: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default MainApp;
