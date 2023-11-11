import React, { useState } from 'react';
import { View, StyleSheet, Text, Alert, KeyboardAvoidingView } from 'react-native';
import MainView from '../reuseable/mainView';
import TextInputComponent from '../reuseable/CustomTextInput';
import CustomButton from '../reuseable/CustomButton';
import HeadingComp from '../reuseable/HeadingComp';
import auth from '@react-native-firebase/auth';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [confirmation, setConfirmation] = useState(null);

  const sendCode = async () => {
    if (email) {
      try {
        const confirmation = await auth().sendPasswordResetEmail(email);
        setConfirmation(confirmation);
        Alert.alert('Password reset email sent.');
      } catch (error) {
        Alert.alert('Error', error.message);
      }
    } else {
      Alert.alert('Please enter a valid email address.');
    }
  };

  const resendCode = async () => {
    if (email) {
      try {
        const confirmation = await auth().sendPasswordResetEmail(email);
        setConfirmation(confirmation);
        Alert.alert('Password reset email sent.');
        setEmail(''); 
      } catch (error) {
        Alert.alert('Error', error.message);
      }
    } else {
      Alert.alert('Please enter a valid email address.');
    }
  };
  

  return (
    <KeyboardAvoidingView style={styles.container}>
      <MainView />
      <HeadingComp text="Forget Password" size={30} style={styles.heading} />
      <View style={styles.LoginContainer}>
        <Text style={styles.accountText}>Enter your email we will send you a reset link.</Text>
        <TextInputComponent
          iconName="mail"
          placeholder="Email"
          onChangeText={(newText) => setEmail(newText)}
          secureTextEntry={false}
        />
        <CustomButton
          title={confirmation ? 'Confirm' : 'Send'}
          onPress={confirmation ? confirmCode : sendCode}
        />
        {confirmation && (
          <CustomButton title="Resend Code" onPress={resendCode} />
        )}
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
    top: 100,
    right: 10,
    width: '50%',
  },
  LoginContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70,
  },
  accountText: {
    color: '#000',
    width: '90%',
    marginBottom: 30,
  },
});

export default ResetPassword;
