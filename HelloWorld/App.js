/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <View style={styles.container}>
		  <Text style={styles.hello}>Hello World!</Text>
	</View>
  );
};

const styles = StyleSheet.create({
  container:{
	flex:1,
	justifyContent:'center',
	alignItems:'center',
	backgroundColor:'blue'
  },
  hello:{
	color:'white',
	fontSize:30,
  }
});

export default App;
