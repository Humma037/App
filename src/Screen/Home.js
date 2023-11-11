import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation from React Navigation
import Header from '../reuseable/Header';
import Card from '../reuseable/Card';

const Home = () => {
  const navigation = useNavigation(); // Get the navigation object

  const handleCardPress = () => {
    // Navigate to the OpenCard screen when a card is pressed
    navigation.navigate('OpenCard');
  };

  return (
    <View>
      <Header activeButton="For You" />
      <ScrollView style={styles.CardContainer}>
        <View style={styles.Card}>
          <TouchableOpacity onPress={handleCardPress}>
            <Card />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCardPress}>
            <Card />
          </TouchableOpacity>
        </View>
        <View style={styles.Card}>
          <TouchableOpacity onPress={handleCardPress}>
            <Card />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCardPress}>
            <Card />
          </TouchableOpacity>
        </View>
        <View style={styles.ThirdRowCards}>
          <View style={styles.Card}>
            <TouchableOpacity onPress={handleCardPress}>
              <Card />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCardPress}>
              <Card />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  CardContainer: {
    marginTop: 80,
  },
  Card: {
    flexDirection: 'row',
  },
  ThirdRowCards: {
    marginBottom: 90,
  },
});

export default Home;
