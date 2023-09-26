import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { dishes } from '../data/dummydata'
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign'
const DishDetail = (props) => {
    const { dish } = props.route.params
    const [detail, setDetail] = useState('')
    useEffect(() => {
        var data = dishes?.filter((item) => item.id == dish)
        console.log(data)
        if (data) {
            setDetail(data[0])
        }
    }, [])
    return (
        <View>
            <AntDesign name="QQ" size={20} color="#900" />
            <Image source={require('../images/images.ttt.jpg')} style={styles.image} />
            <View style={styles.background}>
                <Text style={styles.paragraph}>“Need food and a good place to eat? Welcome to our humble place where you can eat good food peacefully.” “We see our customers as invited guests to a party, and we are the hosts. It’s our job every day to make every important aspect.” –</Text>
                <Text style={styles.orderNow}>“You know, food is such – it’s a hug for people.”</Text>
                <View style={styles.menu}>
                    <TouchableOpacity onPress={() => { navigation.navigate('Menu') }} >
                        <Text style={styles.text}>Order Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default DishDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#008080',
        padding: 10
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
    },
    orderNow: {
        fontSize: 20,
        color: '#fff',
        padding: 15,
        fontWeight: 'bold'
    },
    menu: {
        paddingLeft: 28,
        paddingRight: 170,
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
        fontSize: 16,
        marginTop: 10
    },
})    