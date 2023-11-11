import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ScreenBackButton = ({ title, onBackPress }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
        <Icon name="chevron-back-sharp" size={25} color="black" />
      </TouchableOpacity>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  backButton: {
    position: 'absolute',
    left: 10,
    borderColor:'black',
    borderWidth:1,
    padding:3,
    borderRadius:8
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black', 
  },
});

export default ScreenBackButton;
