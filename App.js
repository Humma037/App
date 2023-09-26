
// import DrawerNav from './src/navigations/DrawerNav'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackNav } from './src/navigations/StackNav';
import { Button, StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LogLevel, OneSignal } from 'react-native-onesignal';
import { Provider } from 'react-redux';
import store from './src/redux/store';

// const { Component } = require("react");

// const App = () => {
//   return (
//     <NavigationContainer>
// {/* <StackNav /> */}
//       {/* <BottomBar/> */}
//       <DrawerNav
//         options={{
//           drawerItemStyle: { display: 'none' }
//         }}
//       />
//     </NavigationContainer>
//   );
// };

// export default App;
// const styles = StyleSheet.create({});

const App = () => {
  // const [user, setuser] = useState(auth().currentUser)

  React.useEffect(() => {
    GoogleSignin.configure({
      webClientId: '83127863669-7jolbsjlg0ajpgm1fbi0qctsevt3ak4b.apps.googleusercontent.com',
    });
  }, [])


  // React.useEffect(() => {
  //   // Remove this method to stop OneSignal Debugging

  //   // OneSignal Initialization
  //   OneSignal.initialize("b793fc7f-3c28-4b4d-bd33-2bc253377ffe");
  //   OneSignal.Debug.setLogLevel(LogLevel.Verbose);


  //   // requestPermission will show the native iOS or Android notification permission prompt.
  //   // We recommend removing the following code and instead using an In-App Message to prompt for notification permission
  //   OneSignal.Notifications.requestPermission(true);

  //   // Method for listening for notification clicks
  //   OneSignal.Notifications.addEventListener('click', (event) => {
  //     console.log('OneSignal: notification clicked:', event);
  //   });
  // }, [])



  // DEEP LINK



  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNav />
      </NavigationContainer>
    </Provider>
  );
};


const styles = StyleSheet.create({});

// const App = () => {
//   const [email, setemail] = useState('')
//   const [pass, setpass] = useState('')

//   const register = () => {
//     if (email && pass) {
//       auth().createUserWithEmailAndPassword(email, pass)
//         .then((user) => {
//           console.log("USER REGISTERED ==>>>", user);
//           Alert.alert("USER REGISTERED")
//         })
//         .catch((error) => {
//           console.log("ERROR", error);
//           Alert.alert(error.code)
//         })
//     } else {
//       Alert.alert("email or pass empty")
//     }
//   }

//   const logout = () => {
//     auth().signOut()
//       .then(() => { })
//   }

//   const login = () => {
//     if (email && pass) {
//       auth().signInWithEmailAndPassword(email, pass)
//         .then((user) => {
//           console.log("USER REGISTERED ==>>>", user);
//           Alert.alert("USER LOGGED IN")
//         })
//         .catch((error) => {
//           console.log("ERROR", error);
//           Alert.alert(error.code)
//         })
//     } else {
//       Alert.alert("email or pass empty")
//     }
//   }

//   React.useEffect(() => {
//     const subscribe = auth().onAuthStateChanged((user) => {
//       console.log("USER ==>>>", user);
//       Alert.alert(JSON.stringify(user?.uid || user))
//     })

//     return subscribe
//   }, [])


//   return (
//     <View style={{
//       justifyContent: 'center',
//       alignItems: 'center',
//       flex: 1,
//       backgroundColor: "#FFFFFF"
//     }}>
//       <TextInput
//         placeholder='email'
//         placeholderTextColor={"red"}
//         style={{
//           borderWidth: 2,
//           width: '80%',
//           height: 50,
//           marginVertical: 10,
//           color: "#000000"
//         }}
//         value={email}
//         onChangeText={(txt) => {
//           setemail(txt)
//         }}
//       />

//       <TextInput
//         placeholder='password'
//         placeholderTextColor={"red"}
//         style={{
//           borderWidth: 2,
//           width: '80%',
//           height: 50,
//           marginVertical: 10,
//           color: "#000000"
//         }}
//         value={pass}
//         onChangeText={(txt) => setpass(txt)}

//       />

//       <Button title='REGISTER' onPress={() => register()} />
//       <Button title='SIGN IN' onPress={() => login()} />
//       <Button title='LOGOUT' onPress={() => logout()} />


//     </View>
//   )
// };

export default App;





/*
cd android
cd app
keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000

*/


