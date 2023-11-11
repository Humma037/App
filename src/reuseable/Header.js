import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = ({ activeButton }) => {
  const navigation = useNavigation();

  const handleButton1Press = () => {
    if (activeButton !== 'For You') {
      navigation.navigate('Home');
    }
  };

  const handleButton2Press = () => {
    if (activeButton !== 'Following') {
      navigation.navigate('Following');
    }
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={[
          styles.button,
          activeButton === 'For You' ? styles.buttonPressed : null
        ]}
        onPress={handleButton1Press}
      >
        <Text style={styles.buttonText}>For You</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          activeButton === 'Following' ? styles.buttonPressed : null
        ]}
        onPress={handleButton2Press}
      >
        <Text style={styles.buttonText}>Following</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 15,
    borderColor: '#000',
    borderWidth: 1,
    paddingHorizontal: 7,
    paddingVertical: 8,
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 5,
    borderRightWidth: 5,
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 44,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 12,
    backgroundColor: 'white',
  },
  buttonPressed: {
    backgroundColor: '#CDF886',
    borderColor: 'black',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default Header;
