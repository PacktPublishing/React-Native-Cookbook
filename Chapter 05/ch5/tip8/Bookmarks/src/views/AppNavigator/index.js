import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setConnectivity } from '../../redux/modules/network/actions';
import Categories from '../Categories';
import {
  Navigator,
  NetInfo,
  Platform,
  StyleSheet,
} from 'react-native';

class AppNavigator extends Component {
  componentWillMount() {
    NetInfo.addEventListener(
      'change',
      this.onConnectivityChange,
    );
  }

  componentWillUnmount() {
    NetInfo.removeEventListener(
      'change',
      this.onConnectivityChange,
    );
  }

  onConnectivityChange = (reach) => {
    this.props.dispatch(setConnectivity(reach));
  }

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

export default connect()(AppNavigator);
