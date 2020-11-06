import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';

export default class App extends React.Component {
  constructor() {
    super();
    this.state ={
      text: '',
      displayText: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
       <Header backgroundColor = {"grey"} centerComponent = {{text: 'Monkey Chunkey', style: {color: 'black', fontSize: 20}}}/>
       <TextInput onChangeText = {(text) => {
         this.setState ({
           text: text
         })
       }} value = {this.state.text} style = {styles.inputBox}/>

      <TouchableOpacity style = {styles.goButton} onPress = {() => {
        this.setState({
          displayText: this.state.text
        })
      }}>
        <Text style = {styles.buttonText}>Go</Text>
      </TouchableOpacity>
       <Text style = {styles.displayText}>
        {this.state.displayText}
       </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },

  inputBox: {
    marginTop: 260,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    borderStyle: 'dotted'
  },

  displayText: {
    textAlign: 'center',
    fontSize: 38
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30
  }
});