import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';


const DATA = [
  {
    id: '1', 
    title: 'Item 1'
  },
  {
    id: '2', 
    title: 'Item 2'
  },
  {
    id: '3', 
    title: 'Item 3'
  },
  {
    id: '4', 
    title: 'Item 4'
  },
  {
    id: '5', 
    title: 'Item 5'
  },
  {
    id: '6', 
    title: 'Item 6'
  },
  {
    id: '7', 
    title: 'Item 7'
  },
  {
    id: '8', 
    title: 'Item 8'
  },
  {
    id: '9', 
    title: 'Item 9'
  },{
    id: '10', 
    title: 'Item 10'
  },
];


const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.additionalText}>Additional Text Here</Text>
  </View>
);

const App = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  item: {
    backgroundColor: '#f08080',
    padding: 25,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  additionalText: {
    fontSize: 14,
    color: '#fff',
  },
});

export default App;



