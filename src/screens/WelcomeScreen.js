import React, {useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'

const WelcomeScreen = ({ navigation }) => {
const [userData, setuserData] = useState({})

  const SignOut = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!');
       
      })
      .catch((error) => {
        console.error('Error signing out:', error.message);
      });
  };

  useEffect(() => {
    console.log(auth().currentUser?.uid);
    const uid = auth().currentUser?.uid
      firestore()
      .collection('users')
      .doc(uid)
      .get()
      .then((snap) => {
        if(snap){
          console.log('snap.data()', snap.data());
          setuserData(snap.data())
        }
      })
  }, [])
  

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome Android {userData?.Fullname}</Text>
      <TouchableOpacity style={styles.logoutButton} onPress={SignOut}>
        <Text style={styles.buttonText}>Log Out</Text>
        <Icon name="logout" size={20} color="white" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  heading: {
    fontSize: 25,
    marginBottom: 20,
    color: '#ff4500',
    fontFamily: 'Poppins-BoldItalic',
  },
  logoutButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    margin: 20,
    flexDirection: 'row',
    alignItems: 'center', 
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8, 
  },
  icon: {
    paddingHorizontal:10
  },
});

export default WelcomeScreen;
