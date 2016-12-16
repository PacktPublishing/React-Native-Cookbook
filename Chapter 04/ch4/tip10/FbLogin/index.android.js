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
  View
} from 'react-native';

import FBSDK from 'react-native-fbsdk';

const {
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager
} = FBSDK;

class FbLogin extends Component {
  componentWillMount() {
      this.setState({status : undefined, userName : undefined});
  }

  onLoginFinished = (error, result) => {
    var status;

    if (error) {
      status = `Error: ${error.message}`;
    } else if (result.isCancelled) {
      status = 'Login Cancelled';
    } else {
      AccessToken.getCurrentAccessToken().then(
        (data) => {
          status = `Success! UserID: ${data.userID}`;
          this.setState({status});
          this.getUserInfo(data);
        }
      )
    }

    this.setState({status});
  }

  onLogoutFinished = () => {
    this.setState({status : 'Logged Out'});
  }

  getUserInfo(accessToken) {
    const infoRequest = new GraphRequest('/me',null,this.onGraphResponse);

    new GraphRequestManager().addRequest(infoRequest).start();
  }

  onGraphResponse = (error, result) => {
    this.setState({userName : result.name});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native Facebook Login!
        </Text>
        <Text style={styles.instructions}>
          To get started, press Login!
        </Text>
        <LoginButton
          publishPermissions={["publish_actions"]}
          onLoginFinished={this.onLoginFinished}
          onLogoutFinished={this.onLogoutFinished}/>

        <View>
          <Text>Login Status:</Text>
          <Text>{this.state.status}</Text>
          <Text>User Name:</Text>
          <Text>{this.state.userName}</Text>
        </View>
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
});

AppRegistry.registerComponent('FbLogin', () => FbLogin);
