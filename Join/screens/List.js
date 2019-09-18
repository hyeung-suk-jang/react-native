import React, {Component} from 'react';

import {StyleSheet, View, Text, TouchableOpacity,TextInput} from 'react-native';

class Main extends Component {
  render() {
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonWrap}
          onPress={() => {
            navigation.navigate('HelloWorld');
          }}>
           <Text style={styles.button}>Hello World</Text>
        </TouchableOpacity>	
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
            navigation.navigate('LoginServer');
          }}>
				<Text style={styles.button}>로그인 서버연동</Text>
		</TouchableOpacity>
		<TouchableOpacity style={styles.buttonWrap}
          onPress={() => {
            navigation.navigate('Tabmenu');
          }}>
				<Text style={styles.button}>탭메뉴</Text>
		</TouchableOpacity>
		  <TouchableOpacity style={styles.buttonWrap}
          onPress={() => {
            navigation.navigate('Test');
          }}>
				<Text style={styles.button}>테스트페이지</Text>
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
    width:320,
    height:78,
	color:'black',
	borderColor:'black',
	borderWidth:1,
    justifyContent: 'center',
    alignItems: 'center',
	marginTop:10,
    marginBottom: 25
  },
  button: {
    fontSize:35,
    color:'black'
  },
  link: {
    textAlign:'center',
    fontSize:22,
    textDecorationLine: 'underline',
  },
	formTit: {
		fontSize:22,
		lineHeight:25
	},
	formDesc: {
		borderBottomColor:'#707070',
		borderBottomWidth:1,
		height:40,
		flexDirection: 'row',
	},
	innerDesc: {
		height:40,
		lineHeight:40
	},
	botBtnWrap: {
		flexDirection: 'row',height:60,marginBottom:20
	},
	botButton: {
		flex:1,
		margin:10,
		backgroundColor:'#A50000',
		// width:261,
		height:60,
		borderRadius:15,
		justifyContent: 'center',
		alignItems: 'center',
	},
	subHeaderText: {
		fontSize:26,
    color:'#fff'
	},
});
