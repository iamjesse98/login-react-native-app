import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity 
} from 'react-native';

export default class Logo extends Component {

	render(){
		return(
			<View style={styles.container}>
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Username"
              placeholderTextColor = "#000"
              selectionColor="#fff"
              keyboardType="email-address"
              onSubmitEditing={()=> this.password.focus()}
              />
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Code"
              secureTextEntry={true}
              placeholderTextColor = "#000"
              ref={(input) => this.password = input}
              />  
           <TouchableOpacity style={styles.button}>
             <Text style={styles.buttonText}>{this.props.type}</Text>
           </TouchableOpacity>     
  		</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },

  inputBox: {
    width: 300,
    backgroundColor:'#d5d8d4',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 7,
    fontSize: 20,
    color:'#000',
    marginVertical: 12
  },
  button: {
    width:300,
    backgroundColor:'#66db30',
     borderRadius: 25,
      marginVertical: 40,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }
  
});