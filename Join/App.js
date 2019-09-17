import React, {Component} from 'react';

import { createAppContainer} from 'react-navigation';
import {createStackNavigator,} from 'react-navigation-stack';

import mainpage from './screens/Main';
import joinpage from './screens/Join';
import loginpage from './screens/Login';
import elements from './screens/Elements';

/*
react-native-navigation 설치 : https://facebook.github.io/react-native/docs/navigation
react-native-elements 설치 : https://react-native-training.github.io/react-native-elements/docs/getting_started.html
npm install react-native-simple-radio-button 설치 : https://www.npmjs.com/package/react-native-simple-radio-button
npm install react-native-vector-icons : https://blog.roto.codes/react-native-react-native-vector-icons/
npm cache clean --force
npm rebuild

*/

const App = createStackNavigator(
  {
    Main: {screen: mainpage},
    Join: {screen: joinpage},
	Login:{screen: loginpage},
	Elements:{screen:elements},
  },

  {initialRouteName: 'Main', headerMode: 'none'},
);

export default createAppContainer(App);
