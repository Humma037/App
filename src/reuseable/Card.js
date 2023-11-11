import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';
import ProfileInfoComp from './ProfileImageComp';
import LikeButton from '../reuseable/LikeButton';
import UsernameComp from '../reuseable/UsernameComp';

const Card = ({ navigation }) => {
  const [profileData, setProfileData] = useState({
    fullName: 'Loading..',
    profilePictureURL: null,
  });

  useEffect(() => {
    const userId = auth().currentUser ? auth().currentUser.uid : null;

    if (userId) {
      // Retrieve user's profile data
      const userProfileRef = storage().ref(`profilePictures/${userId}`);
      userProfileRef
        .getDownloadURL()
        .then((downloadURL) => {
          setProfileData((prevData) => ({
            ...prevData,
            profilePictureURL: downloadURL,
          }));
        })
        .catch((error) => {
          console.error('Error getting profile picture URL:', error);
        });

      // Fetch the user's display name
      const user = auth().currentUser;
      if (user && user.displayName) {
        setProfileData((prevData) => ({
          ...prevData,
          fullName: user.displayName,
        }));
      }
    }
  }, []);

  return (
    <View style={styles.card}>
      <Image
        source={require('../assets/Images/cardImage.png')}
        style={styles.image}
        onPress={() => {
          navigation.navigate('OpenCard');
        }}
      />
      <View style={styles.bottomContainer}>
        <ProfileInfoComp profileData={profileData} />
        <UsernameComp style={styles.usernameContainer} textStyle={styles.usernameText} />
        <View style={styles.space} />
        <LikeButton />
      </View>
      <Text style={styles.CardText}>
        Lorem Ipsum is simply dummy text of the printing.
      </Text>
      <Text style={styles.HashTags}>#Lorem Ipsum #Lorem</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 182,
    borderRadius: 15,
    margin: 5,
    padding: 7,
    backgroundColor: 'white',
    elevation: 5,
    borderWidth: 1,
    borderBottomWidth: 6,
    borderRightWidth: 6,
    borderColor: 'black',
    alignItems: 'center',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    marginTop: 10,
    width: 135,
    marginRight: 25,
  },
  image: {
    width: 163,
    height: 150,
    borderRadius: 10,
  },
  space: {
    width: 10,
  },
  CardText: {
    width: 165,
    fontSize: 7,
    color: '#000',
    paddingHorizontal: 5,
  },
  HashTags: {
    width: 160,
    fontSize: 7,
    color: '#4F99DD',
    paddingBottom: 3,
    paddingTop: 3,
  },
  usernameText: {
    fontSize: 11,
    color: 'black', 
  },
});

export default Card;
