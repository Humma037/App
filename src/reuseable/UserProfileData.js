import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const ProfileInfoComp = ({ profileData }) => {
    return (
        <View style={styles.container}>
            <View style={styles.profileImageWrapper}>
                {profileData && profileData.profilePictureURL ? (
                    <Image
                        source={{ uri: profileData.profilePictureURL }}
                        style={styles.profileImage}
                    />
                ) : (
                    <View style={styles.profileIcon}>
                        <Icon name="user" size={18} color="black" />
                    </View>
                )}
            </View>
            <Text style={styles.username}>
                {profileData && profileData.fullName
                    ? profileData.fullName
                    : 'Loading..'}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginLeft: 2,
        width:120
    },
    profileImageWrapper: {
        width: 32,
        height: 32,
        borderRadius: 75,
        overflow: 'hidden',
        marginRight: 6,
        borderWidth: 1,
    },
    profileImage: {
        width: '100%',
        height: '100%',
    },
    profileIcon: {
        alignItems: 'center',
        marginTop: 5,
    },
    username: {
        fontSize: 10,
        fontWeight: 'bold',
        color: 'black', 
      },
});

export default ProfileInfoComp;
