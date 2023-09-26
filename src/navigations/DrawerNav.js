import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import DrawerHome from '../screens/DrawerHome';
import DrawerGallery from '../screens/DrawerGallery'; 
import DrawerContacts from '../screens/DrawerContacts';
import Mapscreen from '../screens/Mapscreen';
import StreetView from '../screens/StreetView';
import CameraGallery from '../screens/CameraGallery';


const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={DrawerHome} />
      <Drawer.Screen name="DrawerGallery" component={DrawerGallery} />
      <Drawer.Screen name="Contacts" component={DrawerContacts} />
      <Drawer.Screen name="Mapscreen" component={Mapscreen}/>
      <Drawer.Screen name="StreetView" component={StreetView}/>
      <Drawer.Screen name="CameraGallery" component={CameraGallery}/>
    </Drawer.Navigator>
  );
};

export default DrawerNav;           
