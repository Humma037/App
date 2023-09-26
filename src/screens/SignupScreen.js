import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { useDispatch } from 'react-redux'
import { updateUser } from '../redux/actions/userActions';
import axios from 'axios';

const SignupScreen = ({ navigation }) => {
    const [Fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setisLoading] = useState(false);
    const dispatch = useDispatch()

    const SignUp = async () => {
        try {
            setisLoading(true)
            const userdata = await auth().createUserWithEmailAndPassword(email, password);
            const user = userdata.user;


            const userData = {
                Fullname,
                email,
                uid: user?.uid
            };

            await firestore().collection('users').doc(user.uid).set(userData);
            setisLoading(false)
        }
        catch (error) {
            setisLoading(false)
            console.error('Error Firestore: ', error);
            Alert.alert('Signup Failed', error.message);
        }
    };

    const updateUser_ = () => {
        dispatch(updateUser({ name: Fullname }))
    }
    const user = {
        firstname: 'tahaa',
        lastname: 'faruqi'
    }

    const jUser = JSON.stringify(user) // JS TO JSON
    const pUser = JSON.parse(jUser) // JSON TO JS

    const abc = [
        {
            firstname: 'umair'
        },
        {
            firestore: 'ali'
        },
    ]

    useEffect(() => {
        fetch('https://fakestoreapi.com/carts/user/2')
            .then(res=>res.json())
            .then(json=>console.log(json))
    }, [])

    const requestApi = () => {
        axios.post('https://fakestoreapi.com/auth/login', {
            username: "mor_2314",
            password: "83r5^_"
        },

        )
            .then((data) => {
                console.log(data.data);
            })
            .catch((err) => {
                console.log(err);
            })



    }

    const TOKEN = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXIiOiJtb3JfMjMxNCIsImlhdCI6MTY5NTczMDgyMX0.-ip3WHCEufja0cpIRxm0uqdIXYWi5HxSaP4VvYkP4Xw`

    const getAllUsers = () => {
        fetch('https://fakestoreapi.com/users')
            .then(res => res.json())
            .then(json => console.log(json))
    }

    React.useEffect(() => {
        requestApi(0)
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.cardstyle}>
                    <Text style={styles.heading}>Android Developers</Text>
                    <View style={styles.inputContainer}>
                        <Icon name="user" size={20} style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Full Name"
                            keyboardType="default"
                            value={Fullname}
                            onChangeText={(text) => setFullname(text)}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Icon name="envelope" size={20} style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            keyboardType="email-address"
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Icon name="lock" size={20} style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            secureTextEntry
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                        />
                    </View>
                    <TouchableOpacity style={styles.loginButton} onPress={updateUser_}>
                        {
                            isLoading ?
                                <ActivityIndicator />
                                :
                                <Text style={styles.buttonText}>Sign Up</Text>
                        }
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardstyle: {
        width: '85%',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        color: '#fff',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
    },
    heading: {
        fontSize: 28,
        marginBottom: 10,
        color: '#fff',
        padding: 5,
        fontFamily: 'Poppins-BoldItalic',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#bdb76b',
        marginBottom: 20,
    },
    icon: {
        marginRight: 10,
        color: '#fff',
    },
    input: {
        flex: 1,
        fontSize: 16,
        paddingVertical: 10,
        color: '#fff',
    },
    loginButton: {
        backgroundColor: '#ff4500',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default SignupScreen;
