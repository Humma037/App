import React, { useState } from 'react';
import { StyleSheet, Text, View,  TouchableOpacity, Image, } from 'react-native';

const HomeScreen = ({ navigation }) => {
    const [isSwitch, setisSwitch] = useState(false)
    return (
        <View style={styles.container}>
            <Image source={require('../images/image.hhhh.jpg')} style={styles.image} resizeMode={'contain'} />
            <View style={styles.background}>
                <Text style={styles.paragraph}>A healthy diet is essential for good health and nutrition. It protects you against many chronic noncommunicable diseases, industrially-produced trans-fats, are essential for healthy diet.</Text>
                <Text style={styles.order}>What whould you like to Order?</Text>
                <View style={styles.menu}>
                    <TouchableOpacity onPress={() => { navigation.navigate('Profile') }} >
                        <Text style={styles.text}>Check Menu</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: 280,
        resizeMode: 'cover',
        borderBottomLeftRadius: 180,
    },
    background: {
        backgroundColor: '#008080',
        height: 450,
        borderTopRightRadius: 180,
        marginTop: 10,
    },
    paragraph: {
        width: '90%',
        textAlign: 'left',
        color: '#fff',
        padding: 15,
        marginTop: 25,
        fontFamily: 'Poppins-LightItalic',
    },
    order: {
        fontSize: 20,
        color: '#fff',
        padding: 10,
        fontFamily:'Poppins-Italic'
    },
    menu: {
        paddingLeft: 15,
        paddingRight: 190,
    },
    text: {
        color: '#008080',
        textAlign: 'center',
        padding: 15,
        backgroundColor: '#fff5ee',
        marginBottom: 20,
        borderBottomLeftRadius: 25,
        borderTopRightRadius: 25,
        fontWeight: 'bold',
        marginTop: 5,
        fontSize: 16
    },
});

export default HomeScreen;
