import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';
import ProfileImageComp from '../reuseable/ProfileImageComp';
import UsernameComp from '../reuseable/UsernameComp';
import TouchableText from '../reuseable/TouchableText';
import IconCounter from '../reuseable/IconCounter';
import BottomComponent from '../reuseable/BottomComponent';

const OpenCard = ({ navigation }) => {
    const [profileData, setProfileData] = useState({
        fullName: 'Loading..',
        profilePictureURL: null,
    });

    useEffect(() => {
        const userId = auth().currentUser ? auth().currentUser.uid : null;

        if (userId) {
            // Retrieve user's profile data
            const userProfileRef = storage().ref(`profilePictures/${userId}`);
            userProfileRef
                .getDownloadURL()
                .then((downloadURL) => {
                    setProfileData((prevData) => ({
                        ...prevData,
                        profilePictureURL: downloadURL,
                    }));
                })
                .catch((error) => {
                    console.error('Error getting profile picture URL:', error);
                });

            // Fetch the user's display name
            const user = auth().currentUser;
            if (user && user.displayName) {
                setProfileData((prevData) => ({
                    ...prevData,
                    fullName: user.displayName,
                }));
            }
        }
    }, []);

    return (
        <View style={styles.Container}>
            <ProfileImageComp profileData={profileData} style={styles.TopprofileImageStyle} />
            <View style={styles.card}>
                <Image
                    source={require('../assets/Images/cardImage.png')}
                    style={styles.image}
                />
                <View style={styles.bottomContainer}>
                    <ProfileImageComp profileData={profileData} style={styles.profileImageStyle} />
                    <UsernameComp profileData={profileData} style={styles.usernameStyle} />
                    <TouchableText
                        text=".Follow"
                        onPress={() => {
                            navigation.navigate('FollowScreen');
                        }}
                        style={styles.accountRegister}
                    />
                </View>
                <View style={styles.bottom}>
                    <View style={styles.cardTextSpace}>
                        <Text style={styles.CardText}>
                            Lorem Ipsum is simply dummy text of the printing.
                        </Text>
                        <Text style={styles.HashTags}>#Lorem Ipsum #Lorem</Text>
                    </View>
                    <View style={styles.Counter}>
                        <IconCounter />
                    </View>
                </View>
            </View>
            <BottomComponent/>
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    TopprofileImageStyle:{
        width: 90,
        height: 90,
        position:'absolute',
        top:12,
        left:18,
        zIndex:1
    },
    card: {
        width: '93%',
        height: '80%',
        borderRadius: 25,
        margin: 5,
        padding: 10,
        backgroundColor: 'white',
        elevation: 5,
        borderWidth: 1,
        borderBottomWidth: 6,
        borderRightWidth: 6,
        borderColor: 'black',
        marginTop:55,
        marginLeft:15    
    },
    bottomContainer: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
        marginTop: 10,
        width: 135,
        marginRight: 55,
    },
    image: {
        width: 330,
        height: 450,
        borderRadius: 20,
    },
    space: {
        width: 10,
    },
    CardText: {
        width: 250,
        fontSize: 12,
        color: '#000',
        paddingHorizontal: 5,
        alignItems: 'flex-start',
    },
    HashTags: {
        width: 280,
        fontSize: 12,
        color: '#4F99DD',
        paddingTop: 3,
    },
    profileImageStyle: {
        width: 60,
        height: 60
    },
    usernameStyle: {
        fontSize: 25,
        color: 'red',
        width: 100
    },
    cardTextSpace: {
        paddingBottom: 25
    },
    accountRegister: {
        color: '#4F99DD',
        fontSize: 16,
        // marginRight:0
    },
    Counter: {
        height: 60,
        marginBottom: 40,
        paddingBottom: 35
    },
    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});

export default OpenCard;
