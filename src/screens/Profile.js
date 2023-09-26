import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { dishes } from '../data/dummydata';
import DishCard from '../reuseable/DishCard';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign'


const Profilescreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', alignItems:'center',}}>
            <Text style={styles.heading}>SPECIAL FOR YOU!</Text>
            <AntDesign name="gift" size={30} color="#FFF" />
            </View>
            
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {dishes.map((dish) => (
                   <DishCard dish={dish}/>
                ))}
            </ScrollView>
            <View style={styles.about}>
                <Text style={styles.about}>Our mission is to make customers happy. Our mission is to be the most sustainable restaurant in New York by sourcing our ingredients locally, supplementing produce with herbs grown on our rooftop garden, and giving back to the community through urban farming education.</Text>
                <View style={styles.menu}>
                    <TouchableOpacity onPress={() => { navigation.navigate('Gallery') }} >
                        <Text style={styles.text}>About us</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
};




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#008080',
        padding: 10,
        
    },
    heading: {
        fontSize: 22,
        margin: 20,
        color: '#fff',
        fontFamily: 'Poppins-ExtraBoldItalic',
    },
    
    background: {
        padding: 40
    },
    about: {
        backgroundColor: '#fff',
        color: '#008080', borderBottomRightRadius: 80,
        borderTopLeftRadius: 80,
        textAlign: 'justify',
        padding: 12,
        fontFamily: 'Poppins-LightItalic',
    },
    menu: {
        paddingLeft: 92,
        paddingRight: 92,
    },
    text: {
        color: '#fff',
        backgroundColor: '#008080',
        textAlign: 'center',
        padding: 14,
        marginBottom: 10,
        borderBottomLeftRadius: 25,
        borderTopRightRadius: 25,
        fontWeight: 'bold',
        fontSize: 14,
    },
});

export default Profilescreen;