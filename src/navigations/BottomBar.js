// BottomBar.js (Your existing BottomBar component)

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screen/Home';
import Setting from '../Screen/Setting';
import AntDesign from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const BottomBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 15,
          left: 15,
          right: 15,
          borderRadius: 15,
          height: 70,
          backgroundColor: '#ffffff',
          borderColor: '#000',
          borderWidth: 1,
        },
        tabBarShowLabel: false, // Hide tab labels
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="home"
              color={focused ? 'black' : 'gray'}
              size={35}
              style={{
                backgroundColor: focused ? '#CDF886' : 'transparent',
                paddingVertical: 5, // Vertical padding
                paddingHorizontal: 35, // Horizontal padding
                borderRadius: 8,
                marginHorizontal: 5, // Horizontal margin
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="user"
              color={focused ? 'black' : 'gray'}
              size={35}
              style={{
                backgroundColor: focused ? '#CDF886' : 'transparent',
                paddingVertical: 10, // Vertical padding
                paddingHorizontal: 35, // Horizontal padding
                borderRadius: 8,
                marginHorizontal: 5, // Horizontal margin
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomBar;
