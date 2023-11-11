import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Switch, ActivityIndicator } from 'react-native';
import ScreenBackButton from '../reuseable/ScreenBackButton';
import ProfileData from '../reuseable/ProfileData ';
import SimpleButton from '../reuseable/SimpleButton';
import TouchableText from '../reuseable/TouchableText';
import SignOutModal from '../reuseable/SignOutButton';
import auth from '@react-native-firebase/auth';


const Setting = ({ navigation }) => {
  const [switchValue, setSwitchValue] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [isSignOutModalVisible, setIsSignOutModalVisible] = useState(false);

  const toggleSwitch = () => {
    setSwitchValue((previousValue) => !previousValue);
    // You can perform actions based on the switch value here
  };
  const showSignOutModal = () => {
    setIsSignOutModalVisible(true);
  };

  const closeSignOutModal = () => {
    setIsSignOutModalVisible(false);
  };

  // handleSignOut
  const handleSignOut = () => {
    setIsSigningOut(true);

    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!');
      })
      .catch((error) => {
        console.error('Error signing out:', error.message);
      })
      .finally(() => {
        setIsSigningOut(false);
        setIsSignOutModalVisible(false);
        navigation.navigate('Login');
      });
  };

  return (
    <View style={styles.container}>
      <View>
        <ScreenBackButton title="My Profile" onBackPress={() => { navigation.navigate('Home'); }} />
      </View>
      <ScrollView>
        <ProfileData />
        <View style={styles.ProfileContainer}>
          <Text style={styles.heading}>Account</Text>
          <View style={styles.ButtonsContainer}>
            <SimpleButton title="Edit Profile" onPress={() => { navigation.navigate('EditProfile'); }} />
            <SimpleButton title="My Wish List" />
            <SimpleButton title="Notifications" />
          </View>
          <View style={styles.Profile}>
            <Switch
              value={switchValue}
              onValueChange={toggleSwitch}
              trackColor={{
                false: 'gray', 
                true: 'green',
              }}
              style={styles.switch}
            />
            <Text style={styles.heading}>Support</Text>
            <View style={styles.ButtonsContainer}>
              <SimpleButton title="Terms of Service" />
              <SimpleButton title="Privacy Policy" />
            </View>
          </View>
        </View>
        <View style={styles.TouchableTextContainer}>
          <TouchableText
            text="Delete your account"
            onPress={() => { navigation.navigate('DeleteAccount'); }}
            style={styles.TouchableText}
          />
          <TouchableText
            text="Log out"
            style={styles.TouchableText}
            onPress={showSignOutModal}
          />
          <SignOutModal
          visible={isSignOutModalVisible}
          onSignOut={handleSignOut}
          onCancel={closeSignOutModal}
        />
           {isSigningOut && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large"/>
          </View>
        )}
        </View>
      </ScrollView>
    </View>
  );
}

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    color: 'black',
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginVertical: 3,
    fontSize: 17
  },
  ButtonsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableTextContainer: {
    marginBottom: 100,
  },
  TouchableText: {
    color: 'red',
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginVertical: 22,
    fontSize: 17
  },
  switch: {
    position:'absolute',
    right:35,
    top:-47,
    transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
  },
 
});
