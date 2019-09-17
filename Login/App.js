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
	  TouchableOpacity,
	TextInput,
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
        <TouchableOpacity style={styles.buttonWrap}
          onPress={() => {
			console.log('join')
          }}>
           <Text style={styles.button}>로그인하기</Text>
        </TouchableOpacity>
		<Text style={styles.formTit}>이메일(로그인 ID)</Text>
		<View style={styles.formDesc}>
					<TextInput placeholder="이메일을 입력해주세요" style={styles.innerDesc} />
				</View>
		<Text style={styles.formTit}>비밀번호(영문+숫자,8자이상)</Text>
		<View style={styles.formDesc}>
					<TextInput placeholder="비밀번호를 입력해주세요" secureTextEntry={true} style={styles.innerDesc} />
				</View>
		<View style={styles.botBtnWrap}>
					<TouchableOpacity
						style={styles.botButton}
						>
						<Text style={styles.subHeaderText}>회원가입</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.botButton}>
						<Text style={styles.subHeaderText}>로그인</Text>
					</TouchableOpacity>
				</View>
      </View>
  );
};

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

export default App;
