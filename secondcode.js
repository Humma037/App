import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decreaseCount = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./src/images/uiimage2.jpg')} />
      <Text style={styles.countText}>{count}</Text>
      <Text style={{ color: '#000080' }}>-12</Text>
      <Text style={styles.text}>LIMIT REACHED</Text>
      <View style={styles.bothbutton}>
        <TouchableOpacity onPress={decreaseCount} style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={increaseCount} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: '100%', 
    height: 300,
  },
  text: {
    color: '#000080',
    fontSize: 12,
    fontWeight: 'bold'
  },
  bothbutton: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 18,
  },
  button: {
    backgroundColor: '#000080',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
  },
  countText: {
    fontSize: 160,
    fontWeight: 'bold',
    color: '#000080',
  },
});

export default App;