import React, {Component} from 'react';

import {StyleSheet, View, Text} from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';

class Main extends Component {
	constructor(props) {
    super(props);
    this.state = {
      images: [
        'https://source.unsplash.com/1024x768/?nature',
        'https://source.unsplash.com/1024x768/?water',
        'https://source.unsplash.com/1024x768/?girl',
        'https://source.unsplash.com/1024x768/?tree'
      ]
    };
  }
	
	onLayout = e => {
		this.setState({
			width: e.nativeEvent.layout.width
		});
	};

  render() {

    return (
		<View style={styles.container} onLayout={this.onLayout}>
            <SliderBox
                images={this.state.images}
                sliderBoxHeight={200}
                onCurrentImagePressed={index =>
                    console.warn(`image ${index} pressed`)
                }
                parentWidth={this.state.width}
            />
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
