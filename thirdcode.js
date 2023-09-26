import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const image = { uri: 'https://background-free-vector.jpg' };

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={require('./src/images/leaves-frame-board.png')} resizeMode="cover" style={styles.image}>
      <Text style={styles.heading}>Welcome</Text>
      <Text style={styles.text}>"I am a resilient individual with a passion for growth, constantly striving to learn and embrace new challenges, while spreading positivity and inspiring others along the way."</Text>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading:{
    fontSize:35, 
    textAlign:'center', 
    color:'#fff', 
    fontWeight:'bold', 
    padding:15
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 15,
    lineHeight: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    padding:17,
  },
});

export default App;





