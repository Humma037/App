import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, } from 'react-native';

const Home = ({ navigation }) => {
    const [isSwitch, setisSwitch] = useState(false)
    return (
        <View style={styles.container}>
            <Text style={styles.para}>In the journey of reaching our goals, challenges may arise that test our resolve and determination. However, it's important to remember that every obstacle is an opportunity in disguise, a chance to prove our strength and resilience. Embrace these challenges as stepping stones to growth and success.</Text>
            <View style={styles.menu}>
                <TouchableOpacity onPress={() => { navigation.navigate('User') }} >
                    <Text style={styles.text}>Press me</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000080',
    },
    para: {
        width: '100%',
        padding:20,
        textAlign:'justify',
        fontSize:18,
        marginTop: 80,
        color:'#f5f5f5'
    },
    menu: {
        alignItems:'center',
        justifyContent: 'center'
    },
    text: {
        color: '#000080',
        textAlign: 'center',
        padding: 15,
        backgroundColor: '#fff',
        fontSize: 16,
        borderRadius:10,
        fontWeight:'bold'
    },
});

export default Home;
