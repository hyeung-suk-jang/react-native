import React, {Component} from 'react';

import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

class Main extends Component {
  render() {
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonWrap}
          onPress={() => {
            navigation.navigate('Join');
          }}>
           <Text style={styles.button}>회원가입하기</Text>
        </TouchableOpacity>
		<TouchableOpacity style={styles.buttonWrap}
          onPress={() => {
            navigation.navigate('Login');
          }}>
				<Text style={styles.button}>로그인하기</Text>
		</TouchableOpacity>	 
		<TouchableOpacity style={styles.buttonWrap}
          onPress={() => {
            navigation.navigate('Elements');
          }}>
				<Text style={styles.button}>엘리먼트체험하기</Text>
		</TouchableOpacity>	 
		
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
