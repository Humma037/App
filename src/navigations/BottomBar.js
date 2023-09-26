import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Home from '../screens/Home';
import Contact from '../screens/Contact';
import User from '../screens/User';
import AntDesign from 'react-native-vector-icons/AntDesign'
import DrawerNav from './DrawerNav';

const Tab = createBottomTabNavigator();

const BottomBar = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                position: 'absolute',
                bottom: 20,
                left: 18,
                right: 18,
                borderRadius: 15,
                height: 85,
            }
        }}
        >
            <Tab.Screen name="Home" component={Home}
                options={{tabBarInactiveTintColor: "#000",
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="home" color={color} size={size}/>
                    ),  
                    tabBarItemStyle: {                  
                        padding:15
                    }             
                }}

            />
            <Tab.Screen name="Contact" component={Contact}
                options={{tabBarInactiveTintColor: "#000",
                    tabBarLabel: 'Contact',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="contacts" color={color} size={size} />
                    ),
                    tabBarItemStyle: {                  
                        padding:15
                    }
                }}
            />
            <Tab.Screen name="User" component={DrawerNav}
                options={{tabBarInactiveTintColor: "#000",
                    tabBarLabel: 'User',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="user" color={color} size={size} />
                    ),
                    tabBarItemStyle: {                  
                        padding:15
                    },
                    tabBarBadge: '14',
                    tabBarBadgeStyle: {
                        width: 20,
                        height: 20,
                        fontSize: 7, 
                        // textAlign:'center',
                        // padding:1 
                        textAlignVertical:'center',
                    bottom:5
                    },                    
                }}
            />
        </Tab.Navigator>
    );
};


export default BottomBar;
