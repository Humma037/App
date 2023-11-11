import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import ScreenBackButton from '../reuseable/ScreenBackButton';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/AntDesign';
import CustomButton from '../reuseable/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import ShortTextInput from '../reuseable/ShortTextInput';
import TextInputComponent from '../reuseable/CustomTextInput';
import BirthDate from '../reuseable/birthDate';

const EditProfile = ({ navigation }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [day, setDay] = useState(''); 
  const [month, setMonth] = useState(''); 
  const [year, setYear] = useState('');

  // Load the previously selected profile picture URL when the component mounts
  useEffect(() => {
    const loadProfilePicture = async () => {
      try {
        const storedImageUrl = await AsyncStorage.getItem('profileImageUrl');
        if (storedImageUrl) {
          setImageUrl(storedImageUrl);
        }
      } catch (error) {
        console.error('Error loading profile picture:', error);
      }
    };

    loadProfilePicture();
  }, []);

  const selectProfilePicture = async () => {
    try {
      const selectedImage = await ImagePicker.openPicker({
        width: 300,
        height: 300,
        cropping: true,
      });

      const userId = auth().currentUser ? auth().currentUser.uid : null;

      if (userId) {
        const storageRef = storage().ref(`profilePictures/${userId}`);
        await storageRef.putFile(selectedImage.path);

        const downloadURL = await storageRef.getDownloadURL();

        // Persist the image URL using AsyncStorage
        await AsyncStorage.setItem('profileImageUrl', downloadURL);

        setImageUrl(downloadURL);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <View style={styles.container}>
      <ScreenBackButton
        title="My Profile"
        onBackPress={() => {
          navigation.navigate('Setting');
        }}
      />
      <View style={styles.imageContainer}>
        {imageUrl ? ( // Check if imageUrl exists, if not, it will use the default icon
          <Image source={{ uri: imageUrl }} style={styles.profileImage} />
        ) : (
          <Icon name="user" size={55} color="black" style={styles.userIcon} />
        )}
        <TouchableOpacity style={styles.editIcon} onPress={selectProfilePicture}>
          <Icon name="edit" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.ShortInputContainer}>
        <View style={styles.ShortInput}>
          <ShortTextInput
            placeholder="First Name"
            keyboardType="default"
          // onChangeText={text => setFirstName(text)}
          />
          <ShortTextInput
            placeholder="Last Name"
            keyboardType="default"
          // onChangeText={text => setLastName(text)}
          />
        </View>
        <TextInputComponent
          placeholder="username"
          keyboardType="default"
        // onChangeText={text => setLastName(text)}
        />
        <View style={styles.BirthDateContainer}>
          <BirthDate
            placeholder="DD"
            keyboardType="numeric"
            onChangeText={text => setDay(text)} 
          />

          <BirthDate
            placeholder="MM"
            keyboardType="numeric"
            onChangeText={text => setMonth(text)} 
          />

          <BirthDate
            placeholder="YYYY"
            keyboardType="numeric"
            onChangeText={text => setYear(text)} 
          />

        </View>
        <TextInputComponent
          placeholder="Current Password"
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
        />
        <TextInputComponent
          placeholder="New Password"
          onChangeText={text => setConfirmPassword(text)}
          secureTextEntry={true}
        />
        <TextInputComponent
          placeholder="Confirm Password"
          onChangeText={text => setConfirmPassword(text)}
          secureTextEntry={true}
        />
        <CustomButton title="Save" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    margin: 17
  },
  editIcon: {
    position: 'absolute',
    right: 135,
    bottom: 15,
    borderWidth: 1,
    borderColor: 'black',
    padding: 3,
    borderRadius: 30,
    backgroundColor: 'white'
  },
  ShortInputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  ShortInput: {
    flexDirection: 'row'
  },
  userIcon: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 35,
    borderRadius: 70,
    margin: 17
  },
  BirthDateContainer: {
    flexDirection: 'row'
  }
});

export default EditProfile;
