import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';

const ProfileImageComp = ({style}) => {
  const [profilePictureURL, setProfilePictureURL] = useState(null);

  useEffect(() => {
    const userId = auth().currentUser ? auth().currentUser.uid : null;

    if (userId) {
      // Retrieve user's profile picture
      const userProfileRef = storage().ref(`profilePictures/${userId}`);
      userProfileRef
        .getDownloadURL()
        .then((downloadURL) => {
          setProfilePictureURL(downloadURL);
        })
        .catch((error) => {
          console.error('Error getting profile picture URL:', error);
        });
    }
  }, []);

  return (
    <View style={[styles.container, style]}>
      {profilePictureURL ? (
        <Image source={{ uri: profilePictureURL }} style={styles.profileImage} />
      ) : (
        <View style={styles.profileIcon}>
          <Icon name="user" size={50} color="black" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 75,
    overflow: 'hidden',
    marginRight: 10,
    borderWidth: 1,
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  profileIcon: {
    alignItems: 'center',
    marginTop:15
  },
});

export default ProfileImageComp;
