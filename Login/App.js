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
		<Text style={styles.button}>로그인하기</Text>
		<Text style={styles.row}>ID</Text>
        <View style={styles.formDesc}>
			<TextInput placeholder="이메일을 입력해주세요" />
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
  row:{
	flex:1,
	flexDirection: 'row',
  },
  formDesc: {
		borderBottomColor:'#707070',
		borderBottomWidth:1,
		height:40,
		flex: 1,
		flexDirection: 'row',
		marginBottom:10
	},
  buttonWrap: {
    backgroundColor:'red',
    width:261,
    height:78,
    borderRadius:15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25
  },
  button: {
    fontSize:35,
    color:'#fff',
	flex:1,
  },
  link: {
    textAlign:'center',
    fontSize:22,
    textDecorationLine: 'underline',
  }
});

export default App;
