import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/AntDesign';

const TextInputComponent = ({ iconName, placeholder, onChangeText, secureTextEntry }) => {
  return (
    <View style={styles.inputContainer}>

      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#767676"
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
      <View style={styles.inputIcon}>
        <FontAwesome name={iconName} size={23} color="#767676" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '90%',
    backgroundColor: 'white',
    flexDirection: 'row',
    borderWidth: 1,
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderColor: 'black',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    padding: 2,
  },
  inputIcon: {
    paddingVertical: 10
  },
  input: {
    flex: 1,
    color: '#000',
  },
});

export default TextInputComponent;
