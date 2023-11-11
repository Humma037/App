import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const BirthDate = ({ placeholder, onChangeText, secureTextEntry }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#767676"
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        multiline={false} 
        numberOfLines={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: 'white',
    borderBottomWidth: 4,
    borderColor: 'black',
    borderWidth: 1,
    borderRightWidth: 4,
    paddingHorizontal: 29,
    paddingVertical: 2,
    marginBottom: 15,
    margin: 5,
    borderRadius: 10,
  },
  input: {
    color: '#000',
    fontSize: 14,
  },
});

export default BirthDate;
