import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import db from '../localdb'
export default class Instructions extends React.Component {
  constructor(){
    super();
    this.state={
     
    }
  }
  render() {
   var emergency= this.props.route.params.emergency
  
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.paragraph}>{emergency}</Text>
        <Text>{db[emergency]}</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
