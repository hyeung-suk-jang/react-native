import React, {Component} from 'react';

import { createAppContainer} from 'react-navigation';
import {createStackNavigator,} from 'react-navigation-stack';

import helloworld from './screens/HelloWorld';
import loginserverpage from './screens/LoginServer';
import joinpage from './screens/Join';
import loginpage from './screens/Login';
import elements from './screens/Elements';
import listpage from './screens/List';
import tabpage from './screens/Tabmenu';
import flatlistpage from './screens/Flatlist';
import testpage from './screens/Test';
import imageslider from './screens/ImageSlider';

/*
react-native-navigation ��ġ : https://facebook.github.io/react-native/docs/navigation
react-native-elements ��ġ : https://react-native-training.github.io/react-native-elements/docs/getting_started.html
npm install react-native-simple-radio-button ��ġ : https://www.npmjs.com/package/react-native-simple-radio-button
npm install react-native-vector-icons : https://blog.roto.codes/react-native-react-native-vector-icons/
npm cache clean --force
npm rebuild

*/

const App = createStackNavigator(
  {
	HelloWorld : {screen: helloworld},
	LoginServer : {screen: loginserverpage},
    Join: {screen: joinpage},
	Login:{screen: loginpage},
	Elements:{screen:elements},
	List:{screen:listpage},
	Tabmenu:{screen:tabpage},
	FlatList:{screen:flatlistpage},
	ImageSlider:{screen:imageslider},
	Test:{screen:testpage},
  },

  {initialRouteName: 'List', headerMode: 'none'},
);

export default createAppContainer(App);
