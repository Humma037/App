import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import HeadingComp from '../reuseable/HeadingComp';
import ScreenBackButton from '../reuseable/ScreenBackButton';
import CustomButton from '../reuseable/CustomButton';
import auth from '@react-native-firebase/auth';

const DeleteAccount = ({navigation}) => {
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const user = auth().currentUser;
    if (user) {
      setUserEmail(user.email);
    }
  }, []);

  return (
    <View style={styles.container}>
      <ScreenBackButton title="My Profile" onBackPress={() => { navigation.navigate('Setting'); }} />
      <View style={styles.centered}>
        <Image source={require('../assets/Images/SplashScreenLogo.jpeg')} style={styles.image} />
        <HeadingComp text="Delete your Willio account" size={30} style={styles.heading} />
        <Text style={styles.Text}>
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
        </Text>
        <Text style={styles.Text}>
          If you're ready to leave forever, we'll send an email with the final step to:
        </Text>
        {userEmail && <Text style={styles.userEmail}>{userEmail}</Text>}
        <CustomButton title="Send deletion email" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 13,
  },
  heading: {
    marginVertical: 10,
    width: 260,
    textAlign: 'center',
    lineHeight: 40,
  },
  image: {
    width: 150,
    height: 160,
    marginVertical: 20,
  },
  Text: {
    color: 'black',
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 13,
  },
  userEmail: {
    color: 'black',
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 13,
    fontWeight: 'bold',
  },
});

export default DeleteAccount;
