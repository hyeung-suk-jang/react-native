import React, {Component} from 'react';

import {StyleSheet, View, Text} from 'react-native';

class Main extends Component {
  render() {
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
		  <Text style={styles.hello}>Hello World!</Text>
	</View>
    );
  }
}

export default Main;

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
