import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const App = () => {
  const [storedData, setStoredData] = useState(null);

  const setData = async () => {
    try {
      await AsyncStorage.setItem('myKey', 'Humma, here!');
      console.log('saved data');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };


  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('myKey');
      if (value !== null) {
        setStoredData(value);
        console.log('retrieved data:', value);
      } else {
        console.log('No data found.');
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.Buttons}>
        <TouchableOpacity onPress={setData} >
          <Text style={styles.text}>Set Data</Text>
        </TouchableOpacity>
        {/* <Text style={styles.text} onPress={getData}>Get Data</Text> */}
        <TouchableOpacity onPress={getData} >
          <Text style={styles.text}>Get Data</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  Buttons: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    backgroundColor: "#ffff00",
    color: '#000',
    paddingHorizontal: 35,
    paddingVertical: 18,
    borderRadius: 15,
    marginTop: 10,
    fontWeight: 'bold'
  },
});

export default App;