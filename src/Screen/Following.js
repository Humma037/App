import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import Header from '../reuseable/Header';
import Card from '../reuseable/Card';
import BottomBar from '../navigations/BottomBar';
const Home = () => {
  return (
    <View>
      <Header activeButton="Following" />
      <ScrollView style={styles.CardConainer}>
        <View style={styles.Card}>
          <Card />
          <Card />
        </View>
        <View style={styles.Card}>
          <Card />
          <Card />
        </View>
        <View style={styles.ThirdCard}>
          <Card />
          <Card />
        </View>
      </ScrollView>
      <BottomBar />
    </View>
  );
};


const styles = StyleSheet.create({
  CardConainer: {
    marginTop: 80,
    // marginBottom:90
  },
  Card: {
    flexDirection: 'row'
  },
  ThirdCard:{
    marginBottom:90,
    flexDirection:'row'
  }
});
export default Home;
