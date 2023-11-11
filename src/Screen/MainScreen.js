import React, { useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import auth from '@react-native-firebase/auth';

const MainScreens = ({ navigation }) => {
  useEffect(() => {
    // Wait for 2 seconds
    const timeout = setTimeout(async () => {
      clearTimeout(timeout);

      // Check if the user is signed in
      const user = auth().currentUser;
      if (user) {
        // User is signed in, navigate to the home screen
        navigation.navigate('Home');
      } else {
        // User is not signed in, navigate to the login screen
        navigation.navigate('Login');
      }
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.centered}>
        <Image
          source={require('../assets/Images/SplashScreenLogo.jpeg')} 
          style={styles.image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  centered: {
    alignItems: 'center',
  },
  image: {
    width: 180, // Set the width of your image
    height: 200, // Set the height of your image
  },
});

export default MainScreens;
