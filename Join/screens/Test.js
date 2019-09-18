/*This is an Example of Ionicons in React Native*/
import React, {Component} from 'react';
//import react in our project
import {Platform, StyleSheet, Text, View} from 'react-native';
//import basic react native components
import Icon from 'react-native-ionicons'
//import Ionicons
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>Example of Ion Icons</Text>
        {/*Icon name used on all platforms*/}
        <Text style={styles.instructions}><Icon name="add" /></Text>
        <Icon name="information-circle-outline" />
        {/*Different Icon for different platforms*/}
        <Text style={styles.instructions}><Icon ios="ios-add" android="md-add" /></Text>
        <Icon ios="ios-add" android="md-add" />
        {/*Different Icon for different platforms*/}
        <Text style={styles.instructions}><Icon ios="ios-album" android="md-add" /></Text>
        <Icon ios="ios-albums" android="md-add" />
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    margin: 10,
  },
});