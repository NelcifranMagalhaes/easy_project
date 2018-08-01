import React from 'react';
import {  Text, View ,Image,StyleSheet} from 'react-native';

export default class PeopleDetailPage extends React.Component{

    render(){
        const {people} = this.props.navigation.state.params;
        
        return (
            <View style={styles.container}>
                        <Image style={styles.avatar}
                        source={{uri: people.picture.large}}/>
                <Text>Detail page</Text>
            </View>

        )
    }

}

const styles = StyleSheet.create({
    avatar:{
        width:null,
        height: null,
        flex: 1,
    },
    container: {
        padding: 15,
        flex: 1
        
    }
});