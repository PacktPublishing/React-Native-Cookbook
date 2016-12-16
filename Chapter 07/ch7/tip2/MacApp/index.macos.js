/**
 * Sample React Native Desktop App
 * https://github.com/ptmt/react-native-macos
 */
 import React, { Component } from 'react';
 import ReactNative from 'react-native-macos';
 const {
   AppRegistry,
   StyleSheet,
   Text,
   View,
   NativeModules,
   TextInput,
   Switch,
   NativeAppEventEmitter,
   TouchableWithoutFeedback
 } = ReactNative;

import Button from 'react-native-button';

const HelloManager = NativeModules.HelloManager;

class MacApp extends Component {
  componentWillMount() {      
    this.subscription = NativeAppEventEmitter.addListener('GreetingResponse', (response) => {
      this.displayResult(response.greeting);
    });

    this.setState({
      greetingMessage: undefined,
      isAdmin: false
    });
  }

  componentWillUnmount() {
    this.subscription.remove();
  }
  
  displayResult = (result) => {
    this.refs.userName.blur();
    this.setState({ greetingMessage: result });
  }
  
  onBackgroundPress = () => { 
    this.refs.userName.blur();  
  }

  greetUserCallback = () => {
    const state = this.state;

    HelloManager.greetUser(state.userName, state.isAdmin, this.displayResult);
  }

  greetUserPromise = () => {
    const state = this.state;
    const promise = HelloManager.greetUserWithPromises(state.userName, state.isAdmin);
    promise.then(this.displayResult);
  }

  greetUserEvent = () => {
    const state = this.state;

    HelloManager.greetUserWithEvent(state.userName, state.isAdmin);
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onBackgroundPress}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>iOS Native Modules</Text>
          </View>
          <View style={styles.inputContainer}>
            <Text>User Name:</Text>
            <TextInput 
              ref="userName" 
              autoCorrect={false}
              style={styles.inputField} 
              placeholder="User Name" 
              onChangeText={(text) => this.setState({ userName: text }) }/>      
          </View>
          
          <View style={styles.rowContainer}>
            <View style={styles.flexContainer}>
              <Text>Objective-C: </Text>

              <Button
                containerStyle={styles.buttonContainer}
                style={styles.buttonStyle}
                onPress={this.greetUserCallback}>
                Greet (callback)
              </Button>
              <Button
                containerStyle={styles.buttonContainer}
                style={styles.buttonStyle}
                onPress={this.greetUserPromise}>
                Greet (promise)
              </Button>
              <Button
                containerStyle={styles.buttonContainer}
                style={styles.buttonStyle}
                onPress={this.greetUserEvent}>
                Greet (events)
              </Button>
            </View>
          </View>

          <View style={styles.flexContainer}>
            <Text>Response: </Text>
            <Text>{this.state.greetingMessage}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  header: {
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#607D8B',
    paddingTop: 16
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center'
  },
  inputContainer: {
    height: 48,
    flexDirection: 'row',
    margin: 10
  },
  flexContainer: {
    flex: 1
  },
  rowContainer: {
    flexDirection: 'row'
  },
  inputField: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 5,
    marginRight: 5
  },
  radio: {
    marginTop: 5
  },

  buttonContainer: {
    width: 150,
    padding: 10,
    margin: 5,
    height: 40,
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: '#FF5722'
  },
  swiftButtonContainer: {
    backgroundColor: '#4CAF50'
  },
  buttonStyle: {
    fontSize: 16,
    color: 'white'
  }
});

AppRegistry.registerComponent('MacApp', () => MacApp);
