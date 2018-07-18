import React from 'react';
import { Text, View } from 'react-native';

const containerStyle = {
	marginTop: 25,
	backgroundColor: '#FFFFFF',

}

const titleStyle = {
	fontSize:50
}

const Header = (props) =>(
	<View style={containerStyle}>
		<Text style={titleStyle}> Header aqui</Text>
	</View>	
	);

export default Header;