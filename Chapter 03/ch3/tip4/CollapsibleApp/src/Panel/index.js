import React, { Component, PropTypes } from 'react';
import {
  View,
  LayoutAnimation,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const { any, bool, func, string } = PropTypes;

class Panel extends Component {

  static propTypes = {
    children: any,
    title: string,
    expanded: bool,
    onCollapse: func,
    onExpand: func,
    style: any,
  };

  static defaultProps = {
    expanded: false,
    onCollapse: emptyFn,
    onExpand: emptyFn,
  };

  constructor(props) {
    super(props);

    this.state = {
      height: this.props.expanded ? null : 0,
    };
  }

  onToggle = () => {
    LayoutAnimation.spring();
    this.setState({
      height: this.state.height === null ? 0 : null,
    })
  }

  render() {
    const { children, style, title } = this.props;
    const { height } = this.state;

    return (
      <View style={[styles.main, style]}>
        <TouchableOpacity onPress={this.onToggle}>
          <Text style={styles.title}>
            {title}
          </Text>
        </TouchableOpacity>
        <View style={{ height }}>
          {children}
        </View>
      </View>
    );
  }
}

function emptyFn() {}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    borderRadius: 3,
    overflow: 'hidden',
  },
  title: {
    fontWeight: 'bold',
    padding: 15,
  }
});

export default Panel;
