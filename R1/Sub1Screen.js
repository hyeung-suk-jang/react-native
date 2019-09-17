// Sub1Screen.js
import React, { Component } from 'react';
import {Text,View} from 'react-native';
 
export default class Sub1Screen extends Component {
  state ={
     idValue:this.props.navigation.state.params.id,
     nameValue:this.props.navigation.state.params.name
  }
  render() {
    return (
      <View>
        <Text>ID</Text>
        <Text>{this.state.idValue}</Text>
        <Text>Name</Text>
        <Text>{this.state.nameValue}</Text>
      </View>
    );
  }
}