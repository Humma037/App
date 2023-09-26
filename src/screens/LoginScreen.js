import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, BackHandler } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'
import {useSelector} from 'react-redux'

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setphone] = useState('')
  const [confirm, setconfirm] = useState(null)
  const [code, setcode] = useState('')
  const [resetPassword, setResetPassword] = useState(false);
  const user = useSelector((state) => state.userReducer)
  const store = useSelector((state) => state)


  const handleSignIn = async () => {
    if (!email.includes('mail')) {
      Alert.alert('Invalid Email');
      return;
    }

    if (password.length === 0) {
      Alert.alert('Password is required');
      return;
    }

    try {
      auth().signInWithEmailAndPassword(email, password)
        .then(() => {
          Alert.alert('logged in');
        })
        .catch((error) => {
          Alert.alert(error.code);
        })
    } catch (error) {
      console.error('Error', error);
      Alert.alert('Try again');
    }
  };

  // forgotPassword  
  const handleForgotPassword = () => {
    navigation.navigate('PasswordResetScreen'); 
  };


  // BackHandler
  // useEffect(() => {
  //   const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
  //     BackHandler.exitApp();
  //     return true;
  //   });

  //   return () => {
  //     backHandler.remove();
  //   };
  // }, []);

  // signInWithPhoneNumber
  const sendCode = async () => {
    if (phone) {
      try {
        const confirmation = await auth().signInWithPhoneNumber(phone)
        console.log(JSON.stringify(confirmation));
        setconfirm(confirmation)
      } catch (error) {
        Alert.alert(error.code)
        console.log(error);
      }
    }
  }

  const codeConfirm = async () => {
    if (code) {
      try {
        await confirm.confirm(code)
      } catch (error) {
        Alert.alert(error.code)
      }
    }
  }



  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login {user.name}</Text>
      {/* <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      /> */}

      {
        confirm ?
          <TextInput
            style={styles.input}
            placeholder="Code"
            value={code}
            onChangeText={(text) => setcode(text)}
          />
          :
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={phone}
            onChangeText={(text) => setphone(text)}
          />
      }
      <TouchableOpacity style={styles.loginButton} onPress={() => {
        if (confirm) {
          codeConfirm()
        } else {
          sendCode()
        }
      }}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* ResetPassword */}
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
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
    fontSize: 28,
    marginBottom: 20,
    color: '#ff4500',
    fontFamily: 'Poppins-BoldItalic',
  },
  input: {
    width: '80%',
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 5,
    color: '#fff',
  },
  loginButton: {
    backgroundColor: '#ff4500',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  subheading: {
    fontSize: 20,
    color: '#ff4500',
    marginTop: 30,
  },
  cancelText: {
    color: '#ff4500',
    marginTop: 30,
  },
  forgotPassword:{
    padding:20,
    color:'#fff'
  }
});

export default LoginScreen;
