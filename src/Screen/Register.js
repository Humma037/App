import React, { useState } from 'react';
import { View, StyleSheet, Text, KeyboardAvoidingView } from 'react-native';
import MainView from '../reuseable/mainView';
import TextInputComponent from '../reuseable/CustomTextInput';
import CustomButton from '../reuseable/CustomButton';
import HeadingComp from '../reuseable/HeadingComp';
import TouchableText from '../reuseable/TouchableText';
import ShortTextInput from '../reuseable/ShortTextInput';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Register = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSignUp = () => {
    if (password.length >= 8 && password === confirmPassword) {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          firestore()
            .collection('users')
            .doc(auth().currentUser.uid)
            .set({ firstName, lastName, email })
            .then(() => console.log('User data added to Firestore'))
            .catch(error => console.error('Error adding user data to Firestore:', error));
          navigation.navigate('Login');
        })
        .catch(error => console.error('Registration error:', error));
    } else {
      console.log('Password criteria not met.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <MainView />
      <HeadingComp text="Sign Up" size={30} style={styles.heading} />
      <View style={styles.LoginContainer}>
        <View style={styles.ShortInputContainer}>
          <ShortTextInput
            placeholder="First Name"
            keyboardType="default"
            onChangeText={text => setFirstName(text)}
          />
          <ShortTextInput
            placeholder="Last Name"
            keyboardType="default"
            onChangeText={text => setLastName(text)}
          />
        </View>
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
        <TextInputComponent
          iconName="eye"
          placeholder="Confirm Password"
          onChangeText={text => setConfirmPassword(text)}
          secureTextEntry={true}
        />
        <CustomButton title="Sign Up" onPress={handleSignUp} />
        <View style={styles.TextRegister}>
          <Text style={styles.accountText}>Already have an account?</Text>
          <TouchableText
            text="Sign In"
            onPress={() => {
              navigation.navigate('Login');
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
    right: 70,
  },
  LoginContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  ForgetText: {
    paddingLeft: 170,
    marginBottom: 50,
  },
  TextRegister: {
    flexDirection: 'row',
    marginTop: 40,
  },
  accountText: {
    color: '#000',
    paddingHorizontal: 8,
  },
  ShortInputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Register;
