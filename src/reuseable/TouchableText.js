import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const TouchableText = ({ text, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.text, style]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text:{
    color:'black',
    fontWeight:'bold'
  }
});

export default TouchableText;
