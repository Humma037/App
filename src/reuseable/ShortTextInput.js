import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const ShortTextInput = ({ placeholder, onChangeText, secureTextEntry }) => {
  return (
    <View style={styles.inputContainer}>

      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#767676"
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '43.5%',
    backgroundColor: 'white',
    flexDirection: 'row',
    borderWidth: 1,
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderColor: 'black',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginBottom: 15,
    margin: 5
  },
  //   inputIcon: {
  //     paddingVertical: 10
  //   },
  input: {
    flex: 1,
    color: '#000',
  },
});

export default ShortTextInput;
