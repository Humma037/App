import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import StreetView from 'react-native-streetview';
import AntDesign from 'react-native-vector-icons/Entypo';


const StreetView1 = (props) => {
  return (
    <View style={styles.container}>
      <StreetView
        style={styles.streetView}
        allGesturesEnabled={true}
        coordinate={{
          'latitude': props.route.params.latitude,
          'longitude': props.route.params.longitude,
        }}
        pov={{
          tilt: parseFloat(0),
          bearing: parseFloat(0),
          zoom: parseInt(1)
        }}
      />
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => { navigation.navigate('Mapscreen') }} >
          <AntDesign name="arrow-bold-right" size={60} color='#000000' />
          <Text style={{ color: '#000', fontSize: 13, fontWeight:'bold'}}>Go back</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  streetView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  menu: {
    position:'absolute',
    bottom:20,
    right:20,
  },
});


export default StreetView1; 