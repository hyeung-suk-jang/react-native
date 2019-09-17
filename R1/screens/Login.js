import React, {Component} from 'react';

import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

class Main extends Component {
  render() {
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <Text>로그인 화면!</Text>
      </View>
    );
  }
}

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrap: {
    backgroundColor:'#A50000',
    width:261,
    height:78,
    borderRadius:15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25
  },
  button: {
    fontSize:35,
    color:'#fff'
  },
  link: {
    textAlign:'center',
    fontSize:22,
    textDecorationLine: 'underline',
  }
});
