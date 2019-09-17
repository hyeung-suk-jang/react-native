import React, {Component} from 'react';

import {StyleSheet,Alert, Text, Button, View, TouchableOpacity, TextInput,ScrollView} 
from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
 
var radio_props = [
  {label: '남', value: 0 },
  {label: '여', value: 1 }
];

class Join extends Component {
	state = {
		email:"",
		pass1:"",
		pass2:"",
		nickname:"",
		gender:"",
		hp:"",
		authnum:"",
		age:"",
		area:""
  };

  
  _checkEmail = () => {
	if(this.state.email ==""){
		Alert.alert('이메일을 입력해주세요.');
		this.refs.userEmail.focus();
	}
  }
  _checkNick = () => {
	if(this.state.nickname ==""){
		Alert.alert('닉네임을 입력해주세요.');
		this.refs.userNick.focus();
	}
  }
  _checkHP = () =>{
	if(this.state.hp ==""){
		Alert.alert('휴대폰번호를 입력해주세요.');
		this.refs.userHP.focus();
	}
  }
  _checkAuth  = () =>{
	if(this.state.authnum ==""){
		Alert.alert('인증번호를 입력해주세요.');
		this.refs.userauth.focus();
	}
  }


  _setEmail =  text => {
	console.log(text);
	this.setState({
      email: text
    });
  }
  _setNick = text =>{
	console.log(text);
	this.setState({
		nickname:text
	});
  }
  _setHP = text =>{
	console.log(text);
	this.setState({
		hp:text
	});
  }
  _setAuthnum = text =>{
	console.log(text);
	this.setState({
		authnum:text
	});
  }

  sendData(){
	//email, pass, pass2, nick, gender
  }


  render() {
    const {navigation} = this.props;

    return (
      <ScrollView style={styles.container}>
				<View style={styles.subHeader}>
					<Text style={styles.subHeaderText}>회원가입</Text>
				</View>

				<Text style={styles.formTit}>이메일(로그인 ID)</Text>
				<View style={styles.formDesc}>
					<TextInput placeholder="이메일을 입력해주세요" style={styles.innerDesc}
					onChangeText={this._setEmail}
					 ref= "userEmail"
					/>
					<Button title="중복확인" style={styles.innerDesc} onPress={() => {
            this._checkEmail();
          }} />
				</View>
				<Text style={styles.formTit} >비밀번호</Text>
				<View style={styles.formDesc}>
					<TextInput secureTextEntry={true} style={styles.innerDesc} ref= "userPass1"/>
				</View>
				<Text style={styles.formTit}>비밀번호 확인</Text>
				<View style={styles.formDesc}>
					<TextInput secureTextEntry={true} style={styles.innerDesc} ref= "userPass2"/>
				</View>
				<Text style={styles.formTit}>닉네임</Text>
				<View style={styles.formDesc}>
					<TextInput placeholder="닉네임을 입력해주세요" style={styles.innerDesc}
					ref= "userNick" onChangeText={this._setNick}
					/><Button title="중복확인" style={styles.innerDesc} onPress={() => {
						this._checkNick();
					  }}/>
				</View>
				<Text style={styles.formTit}>성별</Text>
				<RadioForm
				  radio_props={radio_props}
				  initial={0}
				  onPress={(value) => {this.setState({value:value})}}
				/>
				<Text style={styles.formTit}>휴대폰번호</Text>
				<View style={styles.formDesc}>
					<TextInput placeholder="휴대폰번호를 입력해주세요" style={styles.innerDesc}
					  ref= "userHP" onChangeText={this._setHP}
					  />
					<Button title="인증하기" style={styles.innerDesc} onPress={() => {
						this._checkHP();
					  }}/>
				</View>
				<Text style={styles.formTit}>인증하기</Text>
				<View style={styles.formDesc}>
					<TextInput placeholder="인증번호를 입력해주세요" style={styles.innerDesc}
					   ref= "userauth" onChangeText={this._setAuth}
					  />
					<Button title="인증하기" style={styles.innerDesc}
					  onPress={() => {
						this._checkAuth();
					  }}
					  />
				</View>
				<Text style={styles.formTit}>나이</Text>
				<View style={styles.formDesc}>
					<TextInput placeholder="나이를 입력해주세요" style={styles.innerDesc}/>
				</View>
				<Text style={styles.formTit}>지역</Text>
				<View style={styles.formDesc}>
					<TextInput placeholder="지역을 입력해주세요" style={styles.innerDesc}/>
				</View>

				<View style={styles.botBtnWrap}>
					<TouchableOpacity
						style={styles.botButton}
						onPress={() => {
							navigation.goBack();
						}}>
						<Text style={styles.subHeaderText}>취소</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.botButton}
						onPress={() => {
							this.sendData();
						  }}
						>
						<Text style={styles.subHeaderText}>다음</Text>
					</TouchableOpacity>
				</View>
      </ScrollView>
    );
  }
}

export default Join;

const styles = StyleSheet.create({
  container: {
    flex: 1,
		paddingTop: 20,
		paddingLeft: 25,
		paddingRight: 25,
		paddingBottom:40,
	},
	
  link: {
    textAlign:'center',
    fontSize:22,
    textDecorationLine: 'underline',
	},

	subHeader: {
		backgroundColor:'#A50000',
    // width:261,
    height:60,
    borderRadius:15,
    justifyContent: 'center',
		alignItems: 'center',
		marginBottom:17
	},
	subHeaderText: {
		fontSize:26,
    color:'#fff'
	},
	subBot: {
		marginBottom:28
	},
	formTit: {
		fontSize:22,
		lineHeight:25
	},
	formDesc: {
		borderBottomColor:'#707070',
		borderBottomWidth:1,
		height:40,
		flex: 1,
		flexDirection: 'row',
		marginBottom:10
	},
	innerDesc: {
		flex: 1,
		height:40,
		lineHeight:40
	},
	botBtnWrap: {
		flex: 1,flexDirection: 'row',height:60,marginBottom:20
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
});
