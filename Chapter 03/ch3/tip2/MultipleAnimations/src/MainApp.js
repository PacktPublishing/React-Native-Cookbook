import React, { Component } from 'react';
import {
  View,
  Animated,
  Image,
  Easing,
  Dimensions,
  StyleSheet,
} from 'react-native';

const { width, height } = Dimensions.get('window');
const cloudImage = require('./images/cloud.png');
const cloudsImage = require('./images/cloudy.png');
const planeImage = require('./images/transport.png');
const cloudWidth = 60;

class MainApp extends Component {
  componentWillMount() {
    this.animatedValue = new Animated.Value();
  }

  componentDidMount() {
    this.startAnimation();
  }

  startAnimation () {
    this.animatedValue.setValue(1);
    Animated.timing(
      this.animatedValue,
      {
        toValue: 0,
        duration: 6000,
        easing: Easing.linear,
      }
    ).start(() => this.startAnimation());
  }

  render() {
    const left1 = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-cloudWidth, width],
    });

    const left2 = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-cloudWidth*5, width + cloudWidth*5],
    });


    return (
      <View>
        <Animated.Image
          style={[
            styles.cloud1,
            { left: left1 },
          ]}
          source={cloudImage}
        />
        <Animated.Image
          style={[
            styles.cloud1,
            styles.cloud2,
            { left: left2 },
          ]}
          source={cloudsImage}
        />
        <Image
          style={[
            styles.cloud1,
            styles.plane,
          ]}
          source={planeImage}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cloud1: {
    position: 'absolute',
    width: cloudWidth,
    height: cloudWidth,
    top: height/3 - cloudWidth/2,
  },
  cloud2: {
    width: cloudWidth*1.5,
    height: cloudWidth*1.5,
    top: height/2,
  },
  plane: {
    width: cloudWidth*1.3,
    height: cloudWidth*1.3,
    top: height/2 - cloudWidth,
    left: width/2 - cloudWidth/2,
  }
});

export default MainApp;
