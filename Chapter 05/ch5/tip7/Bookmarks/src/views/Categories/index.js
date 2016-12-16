import React, { Component, PropTypes } from 'react';
import {
  ListView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { loadCategories } from '../../redux/modules/categories';

class Categories extends Component {

  static propTypes = {
    categories: PropTypes.array,
  };

  state = {
    shouldLoad: false,
  };

  componentWillMount() {
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: this.ds.cloneWithRows(this.props.categories),
    };
    this.props.dispatch(loadCategories());
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps categories', nextProps.categories);
    if (this.props.categories !== nextProps.categories) {
      this.setState({
        dataSource: this.ds.cloneWithRows(nextProps.categories),
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.toolbar}>Categories</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData.name}</Text>}
          enableEmptySections
        />
      </View>
    );
  }
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
    flex: 1,
  },
  toolbar: {
    backgroundColor: '#3498db',
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
    ...Platform.select({
      ios: {
        paddingTop: 30,
      },
      android: {
        paddingTop: 10,
      },
    }),
  },
});

const mapStateToProps = (state) => {
  return {
    categories: state.categories.all,
  };
}

export default connect(mapStateToProps)(Categories);
