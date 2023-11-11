import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import logoImage from '../assets/Images/logo.jpeg';

const MainView = () => {
    return (
        <View style={styles.container}>
            <View style={styles.mainView}>
                <Image source={logoImage} style={[styles.logo, styles.elevation]} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#EAFF87', 
        height: '35%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 130, 
        height: 170,
        marginTop: 20,
        marginRight: 190
    },
    mainView: {
        flexDirection: 'row'
    }
});

export default MainView;
