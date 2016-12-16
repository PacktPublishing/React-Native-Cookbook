import React, { Component } from 'react';
import {
  Animated,
  Easing,
  Dimensions,
  StyleSheet,
} from 'react-native';

const { width, height } = Dimensions.get('window');
const cloudImage = require('./images/cloudy.png');
const imageWidth = 80;

class MainApp extends Component {
  componentWillMount() {
    this.animatedValue = new Animated.Value();
  }

  componentDidMount() {
    this.startAnimation();
  }

  startAnimation () {
    this.animatedValue.setValue(width);
    Animated.timing(
      this.animatedValue,
      {
        toValue: -imageWidth,
        duration: 6000,
        easing: Easing.linear,
      }
    ).start(() => this.startAnimation());
  }

  render() {
    return (
      <Animated.Image
        style={[
          styles.image,
          { left: this.animatedValue },
        ]}
        source={cloudImage}
      />
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: imageWidth,
    position: 'absolute',
    top: height/3,
    width: imageWidth,
  },
});

export default MainApp;
