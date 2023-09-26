import { StyleSheet, Text, View,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const DishCard = (props) => {
    const {dish}=props
    const navigation=useNavigation()
    return (
        <TouchableOpacity
            key={dish.id}
            style={styles.dishContainer}
            onPress={() => navigation.navigate('DishDetail', { dish: dish?.id })}>
            <Image source={dish.image} style={styles.dishImage} />
            <Text style={styles.dishName}>{dish.name}</Text>
            <Text style={styles.dishPrice}>{dish.price}</Text>
        </TouchableOpacity>
    )
}

export default DishCard

const styles = StyleSheet.create({
    dishContainer: {
        marginRight: 10,
        alignItems: 'center',
    },
    dishImage: {
        width: 150,
        height: 150,
        borderTopLeftRadius: 40,
        borderBottomRightRadius: 40,
        backgroundColor: '#fff'
    },
    dishName: {
        fontSize: 16,
        marginTop: 5,
        color: '#fff',
        fontFamily: 'Poppins-ExtraBoldItalic',

    },
    dishPrice: {
        fontSize: 14,
        color: '#fff',
    },
})