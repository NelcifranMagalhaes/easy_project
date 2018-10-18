import React from 'react';
import {  Text, View, ActivityIndicator } from 'react-native';
import PeopleList from '../components/PeopleList';
import axios from 'axios';

export default class PeoplePage extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {
      peoples: [],
      loading: false,
    };
  }

  componentDidMount(){

    setTimeout(() => {

      this.setState({loading: true});
      axios
      .get('https://randomuser.me/api/?nat=br&results=15')
      .then(response =>{
        const {results} = response.data;
        this.setState({
          peoples: results,
          loading: false,
          });      
      })

    },1500)

  }
  
  
  render() {
    return (
      <View>
      {
        this.state.loading
        ? <ActivityIndicator size = "large" color="#6ca2f7"/> //para renderizar ou não o loading
        :null
      }
      
        <PeopleList peoples={this.state.peoples}
        onPressItem={pageParams=>{
          this.props.navigation.navigate('PeopleDetail',pageParams);
        }}/>
      </View>
      
    );
  }
}

