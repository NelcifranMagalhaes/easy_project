import React from 'react';
import {  Text, View ,Image,StyleSheet} from 'react-native';

export default class PeopleDetailPage extends React.Component{

    render(){
        const {people} = this.props.navigation.state.params;
        
        return (
            <View style={styles.container}>
                        <Image style={styles.avatar}
                        source={{uri: people.picture.large}}/>
                <View style={styles.detailContainer}>
                    <View style={styles.line}>
                        <Text style={[styles.cell,styles.label]}>Email: </Text>
                        <Text style={styles.cell}>{people.email}</Text>
                    </View>
                </View>
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
        
    },

    detailContainer: {
        backgroundColor: '#e2f9ff',
        marginTop: 20,
        elevation: 1
    },

    line: {
        flexDirection: 'row',
        paddingTop: 3,
        paddingBottom: 3,
        borderWidth: 1,
        borderColor: '#C5C5C5'
    },

    cell:{
        fontSize: 18,
        paddingLeft: 5,
    },

    label:{
        fontWeight: 'bold',
    }
});