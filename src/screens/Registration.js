import { GoogleSigninButton, GoogleSignin } from "@react-native-google-signin/google-signin";
import React, { useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet, } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import auth from '@react-native-firebase/auth'
import ImagePicker from 'react-native-image-crop-picker'
import storage from '@react-native-firebase/storage';
import messaging from '@react-native-firebase/messaging';

const Registration = ({ navigation }) => {

  const signInWithGoogle = async () => {
    try {
      const res = await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

      const { idToken } = await GoogleSignin.signIn();

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      auth().signInWithCredential(googleCredential);

    } catch (error) {
      console.log('error ==>>', error);
    }

  }

  // const pickImage = async () => {
  //   ImagePicker.openPicker({
  //     width: 300,
  //     height: 400,
  //     mediaType:'image'
  //   }).then(image => {
  //     console.log(image);
  //     uploadIMage(image.path)
  //   });
  // }

  // const uploadIMage = async (path) => {
  //   let fileNameArray = path?.split('/')
  //   let fileName = fileNameArray[fileNameArray?.length - 1]
  //   const reference = storage().ref(fileName)
  //   await reference.putFile(path);
  //   const url = await reference.getDownloadURL()
  //     console.log(url);

  // }



// pic ImageBase,videos,files etc . and show downloding process
  const pickImage = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        mediaType: 'video',
      });

      const fileName = Date.now() + "_" + image.path.split('/').pop();
      const reference = storage().ref(fileName);

      const task = reference.putFile(image.path);

      task.on('state_changed', (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      });

      await task;

      const url = await reference.getDownloadURL();
      console.log('Image uploaded');
      console.log('Download URL', url);
    } catch (error) {
      console.error('Error uploading', error);
    }
  }


  // send notification through firebase

  React.useEffect(() => {
    const getFCMToken = async () => {
      try {
        const fcmToken = await messaging().getToken();
        if (fcmToken) {
          console.log('FCM Token:', fcmToken);
         
        } else {
          console.log('No FCM token available');
        }
      } catch (error) {
        console.error('Error obtaining FCM token:', error);
      }
    };
    getFCMToken();
  }, [])


  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardstyle}>
          <Text style={styles.heading}>Android Developers</Text>
          <View style={styles.line}></View>
          <Text style={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('SignupScreen') }}>
            <Text style={styles.buttonText} >Signup</Text>
            <Icon name="googleplus" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('LoginScreen') }}>
            <Text style={styles.buttonText} >Login</Text>
            <Icon name="login" size={20} color="white" />
          </TouchableOpacity>

          <GoogleSigninButton
            onPress={() => signInWithGoogle()}
          />

          <TouchableOpacity style={styles.button} onPress={() => { pickImage() }}>
            <Text style={styles.buttonText} >UPLAOD</Text>
            <Icon name="login" size={20} color="white" />
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardstyle: {
    width: "85%",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    color: '#fff',
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  heading: {
    fontSize: 28,
    marginBottom: 10,
    color: '#fff',
    padding: 5,
    fontFamily: 'Poppins-BoldItalic',
  },
  line: {
    width: "100%",
    height: 3,
    backgroundColor: "#ff4500",
    marginBottom: 10,
  },
  paragraph: {
    textAlign: "center",
    marginBottom: 10,
    color: '#fff',
    textAlign: 'justify',
    paddingVertical: 15,
    fontFamily: 'Poppins-Italic',
  },
  button: {
    backgroundColor: "#ff4500",
    padding: 15,
    borderRadius: 9,
    alignItems: "center",
    margin: 8,
    flexDirection: 'row'
  },
  buttonText: {
    color: "white",
    fontWeight: 'bold',
    paddingHorizontal: 11
  },
});

export default Registration;
