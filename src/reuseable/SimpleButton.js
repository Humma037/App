import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const SimpleButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  button: {
    width: '90%',
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor:'#000',
    borderWidth:1,
    borderBottomWidth: 4,
    borderRightWidth: 4,
    margin:5
  },
  buttonText: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default SimpleButton;
