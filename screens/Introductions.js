import React from 'react';
import { Text, SafeAreaView, StyleSheet,Image } from 'react-native';

export default class Introduction extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.poolagraph}>
        FIRST AID APP
        </Text>
        <Text style={styles.paragraph}>
          This is a first aid app,It will tell you necessary instructions in
          case of and emergency,go to the next page to type your problem and we
          will solve it :)
        </Text>
        <Image 
        source={require('../assets/first_aud.webp')}
        style={styles.image} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#10399b',
    padding: 8,
  },
  paragraph: {
    marginTop: 80,
    fontSize: 29,
    fontWeight: 'bold',
     textAlign: 'center',
    fontFamily:'georgia',
    color:'red',
    shadowColor:'black',
    shadowRadius:10,
  },
  image: {
    alignSelf:'center',
    marginTop:40,
  },
   
  poolagraph: {
    color:'red',
    fontWeight:'bold',
    fontFamily:'Georagia',
    textAlign: 'center',
     fontSize: 45,
     backgroundColor:'aqua',
     borderRadius:20,


  } 
});
