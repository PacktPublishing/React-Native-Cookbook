/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import FBSDK from 'react-native-fbsdk';

const {
  AppEventsLogger,
  ShareDialog
} = FBSDK;

class FbLogin extends Component {
  componentWillMount() {
      this.setState({shareSuccess : undefined});
  }

  onShareBtnPressed = () => {
    var shareSuccess;
    AppEventsLogger.logEvent('showShareDialog');
    const shareLinkContent = {
      contentType: 'link',
      contentUrl: "https://packtpub.com",
      contentDescription: 'Packt Pub',
    };
    ShareDialog.canShow(shareLinkContent).then((canShow) => {
      if(canShow) {
        return ShareDialog.show(shareLinkContent);
      }
    }).then((result) => {
      if(result.isCancelled) {
        shareSuccess = 'Cancelled';
        AppEventsLogger.logEvent('shareCancelled');
      } else {
        shareSuccess = 'Shared Successfully';
        AppEventsLogger.logEvent('sharedSuccessfully');
      }
      this.setState({shareSuccess});
    }, (error) => { 
      shareSuccess = 'Error';
      AppEventsLogger.logEvent('shareError');
      this.setState({shareSuccess});
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native Facebook App Event Test!
        </Text>
        <Text style={styles.instructions}>
          To get started, press Share on Facebook and once you share an App Event will be logged.
        </Text>
        <TouchableOpacity onPress={this.onShareBtnPressed}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Share on Facebook</Text>
          </View>
        </TouchableOpacity>
        <Text>Share Success: {this.state.shareSuccess}</Text>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button : {
    padding: 20,
    backgroundColor : '#fff'
  },
  buttonText : {
    fontSize: 16,
    textAlign: 'center',
    color : 'blue'
  }
});

AppRegistry.registerComponent('FbLogin', () => FbLogin);
