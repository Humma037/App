import React, { useRef, useState } from 'react';
import { View, StyleSheet, Animated, TouchableOpacity, Text } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Geocoder from 'react-native-geocoding';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
Geocoder.init("AIzaSyC_lmvE589o2GzQiZmlMpETebPlOx0dr2Q");
import StreetView from './StreetView';
import AntDesign from 'react-native-vector-icons/Entypo';


export default ({ navigation }) => {
    const mapRef = useRef(null);
    const translateY = useRef(new Animated.Value(0)).current;
    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const searchLocation = (data, details) => {
        const { description } = details;
        Geocoder.from(description)
            .then(json => {
                const { lat, lng } = json.results[0].geometry.location;
                setSelectedLocation({ latitude: lat, longitude: lng });
                animateToLocation({ latitude: lat, longitude: lng });
            }).catch(error => console.warn(error));
    };

    const animateToLocation = (location) => {
        if (mapRef.current) {
            const newRegion = {
                ...mapRef.current.__lastRegion,
                ...location,
            };
            mapRef.current.animateCamera(
                { center: newRegion },
                { duration: 2000 }
            );
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.autocompleteContainer}>
                <GooglePlacesAutocomplete
                    placeholder='Search'
                    placeholderTextColor="red"
                    onPress={searchLocation}
                    query={{
                        key: 'AIzaSyC_lmvE589o2GzQiZmlMpETebPlOx0dr2Q',
                        language: 'en',
                    }}
                    styles={{
                        container: {
                            flex: 1,
                        },
                        textInputContainer: {
                            flexDirection: 'row',
                        },
                        textInput: {
                            backgroundColor: '#98fb98',
                            height: 48,
                            borderRadius: 5,
                            paddingVertical: 5,
                            paddingHorizontal: 10,
                            fontSize: 15,
                            flex: 1,
                            color: '#000',
                            borderRadius: 10
                        },
                        powered: {},
                        listView: {
                            backgroundColor: 'white',
                            height: 100
                        },
                        row: {
                            backgroundColor: 'white',
                            padding: 5,
                            height: 45,
                            flexDirection: 'row',
                        },
                        separator: {
                            height: 0.8,
                            backgroundColor: '#c8c7cc',
                        },
                        description: {
                            color: '#000',
                            padding: 5
                        },
                    }}
                />
            </View>
            <PanGestureHandler
                onGestureEvent={Animated.event(
                    [{ nativeEvent: { translationY: translateY } }],
                    { useNativeDriver: false }
                )}
            >
                <Animated.View style={[styles.mapContainer, { transform: [{ translateY }] }]}>
                    <MapView
                        ref={mapRef}
                        style={styles.map}
                        provider={PROVIDER_GOOGLE}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}>
                        {selectedLocation && (
                            <Marker

                                coordinate={selectedLocation}
                                title={query}
                                description={''} />
                        )}
                    </MapView>
                    <View style={styles.menu}>
                        <TouchableOpacity onPress={() => navigation.navigate('StreetView', { longitude: selectedLocation.longitude, latitude: selectedLocation.latitude })}
                            coordinate={selectedLocation}>
                            <AntDesign name="arrow-bold-left" size={60} color='#000000' />
                            <Text style={{ color: '#000', fontSize: 11, fontWeight: 'bold' }}>See StreetView</Text>
                        </TouchableOpacity>
                    </View>
                </Animated.View>
            </PanGestureHandler>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        width: '100%',
        height: '100%',
    },
    mapContainer: {
        flex: 1,
        zIndex: 0,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        zIndex: 0,
    },
    autocompleteContainer: {
        height: 200,
        width: '90%',
        alignSelf: 'center',
        position: 'absolute',
        top: 0,
        zIndex: 9999999,
        top: 10,
    },
    menu: {
        position: 'absolute',
        bottom: '7%',
        paddingLeft: 30
    },
});