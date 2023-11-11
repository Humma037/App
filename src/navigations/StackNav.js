import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from '../Screen/MainScreen';
import BottomBar from './BottomBar';
import Login from '../Screen/Login';
import ResetPassword from '../Screen/ResetPassword';
import Register from '../Screen/Register';
import Setting from '../Screen/Setting';
import Following from '../Screen/Following';
import EditProfile from '../Screen/EditProfile';
import DeleteAccount from '../Screen/DeleteAccount';
import OpenCard from '../Screen/OpenCard';
import FollowScreen from '../Screen/FollowScreen';
import ForYou from '../Screen/ForYou';
import UserProfile from '../Screen/UserProfile';

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={BottomBar} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="Following" component={Following} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="DeleteAccount" component={DeleteAccount} />
      <Stack.Screen name="OpenCard" component={OpenCard} />
      <Stack.Screen name="FollowScreen" component={FollowScreen} />
      <Stack.Screen name="ForYou" component={ForYou} />
      <Stack.Screen name="UserProfile" component={UserProfile} />
    </Stack.Navigator>
  );
};

export default StackNav;