import React, { Component, PropTypes } from 'react';
import {
  ActivityIndicator,
  LayoutAnimation,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const { any, bool, func, string } = PropTypes;

class Button extends Component {

  static propTypes = {
    label: string,
    onPress: func,
    loading: bool,
    style: any,
  };

  static defaultProps = {
    loading: false,
    onPress: emptyFn,
  };

  onPressButton = () => {
    const { loading, onPress } = this.props;

    LayoutAnimation.easeInEaseOut();
    onPress(!loading);
  }

  renderActivityIndicator() {
    if (this.props.loading) {
      return (
        <ActivityIndicator size="small" color="#fff" />
      );
    }
  }

  renderLabel() {
    const { label, loading } = this.props;
    if(!loading) {
      return (
        <Text style={styles.label}>{label}</Text>
      );
    }
  }

  render() {
    const { loading, style } = this.props;

    return (
      <TouchableOpacity
        style={[
          styles.main,
          style,
          loading ? styles.loading : null,
        ]}
        activeOpacity={0.6}
        onPress={this.onPressButton}
      >
        <View>
          {this.renderLabel()}
          {this.renderActivityIndicator()}
        </View>
      </TouchableOpacity>
    );
  }
}

function emptyFn() {}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#e67e22',
    borderRadius: 20,
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
  },
  label: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  loading: {
    padding: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default Button;
