import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import CustomButton from '../reuseable/CustomButton';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';
import ProfileImageComp from '../reuseable/ProfileImageComp';
import UsernameComp from '../reuseable/UsernameComp';
import ScreenBackButton from '../reuseable/ScreenBackButton';

const FollowScreen = ({ navigation }) => {
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
    <View style={styles.Container}>
      <ScreenBackButton onBackPress={() => { navigation.navigate('Home'); }} />
      <View style={styles.card}>
        <View style={styles.headerContainer}>
          <Text style={styles.statText}>hazel_12</Text>
          <Text style={styles.statText}>00-00-0000</Text>
        </View>
        <View style={styles.userData}>
          <ProfileImageComp profileData={profileData} style={styles.profileImageStyle} />
          <UsernameComp profileData={profileData} style={styles.usernameStyle} />
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.stats}>
            <Text style={styles.statText}>0</Text>
            <Text style={styles.statText}>Boards</Text>
          </View>
          <View style={styles.stats}>
            <Text style={styles.statText}>0</Text>
            <Text style={styles.statText}>Followers</Text>
          </View>
          <View style={styles.stats}>
            <Text style={styles.statText}>0</Text>
            <Text style={styles.statText}>Following</Text>
          </View>
        </View>
        <CustomButton title="Follow" onPress={() => { navigation.navigate('UserProfile'); }} />
      </View>
      <ScrollView>
        <View style={styles.cardImage}>
          <View style={styles.ImagesDirection}>
            <Image
              source={require('../assets/Images/cardImage.png')}
              style={styles.image}
            />
            <Image
              source={require('../assets/Images/cardImage.png')}
              style={styles.image}
            />
          </View>
          <View style={styles.ImagesDirection}>
            <Image
              source={require('../assets/Images/cardImage.png')}
              style={styles.image}
            />
            <Image
              source={require('../assets/Images/cardImage.png')}
              style={styles.image}
            />
          </View>
          <View style={styles.ImagesDirection}>
            <Image
              source={require('../assets/Images/cardImage.png')}
              style={styles.image}
            />
            <Image
              source={require('../assets/Images/cardImage.png')}
              style={styles.image}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    height: 310,
    borderWidth: 1,
    borderBottomWidth: 6,
    borderRightWidth: 6,
    borderColor: 'black',
    justifyContent: 'center',
  },
  userData: {
    padding: 10
  },
  userName: {
    fontWeight: 'bold',
    color: 'black',
  },
  headerContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    color: 'black',
    fontSize: 12,
    width: 350,
    justifyContent: 'space-between'
  },
  date: {
    color: 'black',
  },
  profileImageStyle: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },
  userIcon: {
    borderWidth: 1,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 85,
    height: 85,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 10,
  },
  stats: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 135,
  },
  statText: {
    marginHorizontal: 10,
    color: 'black',
    fontSize: 12,
  },
  cardImage: {
    width: 370,
    borderRadius: 15,
    margin: 7,
    padding: 7,
    backgroundColor: 'white',
    elevation: 5,
    borderWidth: 1,
    borderBottomWidth: 6,
    borderRightWidth: 6,
    borderColor: 'black',
  },
  image: {
    width: 165,
    height: 200,
    borderRadius: 10,
    margin: 5 
  },
  ImagesDirection: {
    flexDirection: 'row',
  }
});

export default FollowScreen;