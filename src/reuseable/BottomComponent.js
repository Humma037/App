import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const BottomComponent = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 15,
          left: 18,
          right: 10,
          borderRadius: 15,
          height: 70,
          backgroundColor: '#ffffff',
          borderColor: '#000',
          borderWidth: 1,
          width: 350,
        },
        tabBarShowLabel: false, // Hide tab labels
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="HiddenScreen1"
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="home"
              color={focused ? 'black' : 'gray'}
              size={35}
              style={{
                backgroundColor: focused ? '#CDF886' : 'transparent',
                paddingVertical: 5,
                paddingHorizontal: 35,
                borderRadius: 8,
                marginHorizontal: 5,
              }}
            />
          ),
        }}
      >
        {() => null}
      </Tab.Screen>
      <Tab.Screen
        name="HiddenScreen2"
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="user"
              color={focused ? 'black' : 'gray'}
              size={35}
              style={{
                backgroundColor: focused ? '#CDF886' : 'transparent',
                paddingVertical: 10,
                paddingHorizontal: 35,
                borderRadius: 8,
                marginHorizontal: 5,
              }}
            />
          ),
        }}
      >
        {() => null}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default BottomComponent;
