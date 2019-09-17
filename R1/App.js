import React, {Component} from 'react';

import { createAppContainer} from 'react-navigation';
import {createStackNavigator,} from 'react-navigation-stack';

import mainpage from './screens/Main';
import joinpage from './screens/Join';
import loginpage from './screens/Login';
import elements from './screens/Elements';



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
