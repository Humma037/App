import React, { useState } from 'react';
import { View, StyleSheet, Text, KeyboardAvoidingView } from 'react-native';
import MainView from '../reuseable/mainView';
import TextInputComponent from '../reuseable/CustomTextInput';
import TouchableText from '../reuseable/TouchableText';
import CustomButton from '../reuseable/CustomButton';
import HeadingComp from '../reuseable/HeadingComp';
import auth from '@react-native-firebase/auth';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    if (email && password) {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          // Sign-in successful, navigate to the home screen
          navigation.navigate('Home');
        })
        .catch(error => {
          // Handle sign-in errors here
          console.error('Sign-in error:', error);
        });
    } else {
      // Handle case when email or password is missing
      console.log('Please enter both email and password.');
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <MainView />
      <HeadingComp text="Log in" size={30} style={styles.heading} />
      <View style={styles.LoginContainer}>
        <TextInputComponent
          iconName="mail"
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          secureTextEntry={false}
        />
        <TextInputComponent
          iconName="eye"
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
        />
        <TouchableText
          text="Forget Password?"
          onPress={() => {
            navigation.navigate('ResetPassword');
          }}
          style={styles.ForgetText}
        />
        <CustomButton title="Sign In" onPress={handleSignIn} />
        <View style={styles.TextRegister}>
          <Text style={styles.accountText}>Don't have an account?</Text>
          <TouchableText
            text="Sign Up"
            onPress={() => {
              navigation.navigate('Register');
            }}
            style={styles.accountRegister}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    color: 'black',
    position: 'absolute',
    top: 110,
    right: 100,
  },
  LoginContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70,
  },
  ForgetText: {
    paddingLeft: 170,
    marginBottom: 50,
  },
  TextRegister: {
    flexDirection: 'row',
    marginTop: 80,
  },
  accountText: {
    color: '#000',
    paddingHorizontal: 8,
  },
});

export default Login;
