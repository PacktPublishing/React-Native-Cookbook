#React Native Cookbook
This repo contains all the code for the recipes, each recipe is a single app.

##System requirements
- Python >= 2.5.0 < 3.0.0
- Windows SDK 8.1
- node v5.10.1
- npm 3.8.3
- rnpm 1.9.0
- react-native-cli 1.0.0
- Android API 23

##Running recipes
In order to run a recipe you need to open a terminal, go to the recipe folder, install dependencies using npm and run the app using react-native cli.

    $ cd ch1/tip1/ContainersText
    $ npm install
    $ react-native run-ios
    $ react-native run-android

Make sure to install Android SKD and define the ANDROID_HOME in your environment, pointing to the SDK root folder, for example:

    # ~/.bash_profile
    export ANDROID_HOME=/Users/YOUR_USER_HOME/Library/Android/sdk;

To run the iOS version make sure to have the latest version of XCode installed in your system.
