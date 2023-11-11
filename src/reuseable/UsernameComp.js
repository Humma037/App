import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';

const UsernameComp = ({ style, textStyle }) => {
  const [fullName, setFullName] = useState('Loading...');

  useEffect(() => {
    const user = auth().currentUser;

    if (user && user.displayName) {
      setFullName(user.displayName);
    }
  }, []);

  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.username, textStyle]}>{fullName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  username: {
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'YourFontFamily',
  },
});

export default UsernameComp;
