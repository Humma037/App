import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import Gallery from '../screens/Gallery';
import HomeScreen from '../screens/HomeScreen';
import Profile from '../screens/Profile';
import DishDetail from '../screens/DishDetail';
import Task from '../screens/Task';
import TodayScreen from '../screens/TodayScreen';
import BottomBar from './BottomBar';
import Registration from '../screens/Registration';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import auth from '@react-native-firebase/auth'
import PasswordReset from '../screens/PasswordResetScreen';

export const StackNav = () => {
    const [user, setuser] = React.useState(auth().currentUser?.uid)
    console.log(auth().currentUser);
    React.useEffect(() => {
      const subscribe =  auth().onAuthStateChanged((user_) => {
           setTimeout(() => {
            setuser(user_)
           }, 3000)
            console.log(user_);
        })
        return subscribe
    }, [])
    
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#008080' }, headerTintColor: '#fff', headerShown: false, }}>
            {
                user ?
                    <>
                        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
                    </>
                    :
                    <>
                        <Stack.Screen name="Registration" component={Registration} />
                        <Stack.Screen name="SignupScreen" component={SignupScreen} />
                        <Stack.Screen name="LoginScreen" component={LoginScreen} />
                        <Stack.Screen name="PasswordReset" component={PasswordReset} />
                    </>
            }
            {/* <Stack.Screen name="Today" component={TodayScreen} />
            <Stack.Screen name="BottomBar" component={BottomBar} />
            <Stack.Screen name="Task" component={Task} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Gallery" component={Gallery} />
            <Stack.Screen name="DishDetail" component={DishDetail} /> */}
        </Stack.Navigator>
    )
}


