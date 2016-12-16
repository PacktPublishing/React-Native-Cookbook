import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
  TouchableNativeFeedback
} from 'react-native';

const Toolbar = ({items}) => (
    <View style={{flex:1, flexDirection:'column'}}>
        {items.map(function (item, idx) {
            return (
                <TouchableNativeFeedback key={idx}>
                    <View style={{padding: 20}}>
                        <Text>{item.title}</Text>
                    </View>
                </TouchableNativeFeedback>
            )
        })}
    </View>
);
export default Toolbar;
export default class Toolbar extends Component {
    state = {
        content : undefined
    }

    onActionSelected = (position) => {
        this.setState({
            content : this.props.items[position].title
        })
    }

    render () {
        return (
            <View style={{flex:1}}>
                <ToolbarAndroid
                    actions={this.props.items}
                    style={styles.toolbar}
                    onActionSelected={this.onActionSelected}
                />
                <View style={styles.content}>
                    <Text>{this.state.title}</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#e9eaed',
        height: 56
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent : 'center'
    },
});