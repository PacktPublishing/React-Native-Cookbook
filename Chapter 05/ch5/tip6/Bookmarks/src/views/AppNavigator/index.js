import React, { Component } from 'react';
import Categories from '../Categories';
import {
  Navigator,
  Platform,
  StyleSheet,
} from 'react-native';

class AppNavigator extends Component {

  renderScene(route, navigator) {
    return <Categories navigator={navigator} />;
  }

  render() {
    return (
      <Navigator
        style={styles.container}
        configureScene={(route) => {
          if (Platform.OS === 'android') {
            return Navigator.SceneConfigs.FloatFromBottomAndroid;
          }

          return Navigator.SceneConfigs.FloatFromBottom;
        }}
        initialRoute={{}}
        renderScene={this.renderScene}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppNavigator;
