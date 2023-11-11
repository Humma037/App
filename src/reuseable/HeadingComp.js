import React from 'react';
import { Text, StyleSheet } from 'react-native';

const HeadingComp = ({ text, style }) => {
  return (
    <Text style={[styles.heading, style]}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#000',
  },
});

export default HeadingComp;
