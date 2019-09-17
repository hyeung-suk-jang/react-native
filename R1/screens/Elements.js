import React, {Component} from 'react';

import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import {ListItem ,Avatar , Button, ThemeProvider } from 'react-native-elements';

const theme = {
  Button: {
    raised: true,
  },
};

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  ... // more items
]

class Elements extends Component {
  
  render() {
	  return (
		<ThemeProvider theme={theme}>
		  <Button title="Hey!" />
		  <Button title="My 2nd Button" />
		 
		<Avatar
		  rounded
		  source={{
			uri:
			  'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
		  }}
		/>

		<Avatar rounded title="MD" />

		
		<Avatar
		  source={{
			uri:
			  'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
		  }}
		  showEditButton
		/>
		</ThemeProvider>
		   
	  );
	}
}

export default Elements;