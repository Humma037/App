import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);


  const addTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const deleteTask = index => {
    const updatedTasks = tasks.filter((something, sum) => sum !== index);
    setTasks(updatedTasks);
  };
  // const updateTask = (index, newText) => {
  //   const updatedTasks = [...tasks];
  //   updatedTasks[index].text = newText;
  //   updatedTasks[index].editing = false;
  //   setEditingIndex(-1);
  //   setTasks(updatedTasks);
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>_Todo List_</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Enter a task..." value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.addButtonLabel}>Add</Text>
        </TouchableOpacity>
      </View>


      <FlatList data={tasks}
        renderItem={({ item, index }) => (
          <View style={styles.taskItem}>
            <Text>{item}</Text>
            <TouchableOpacity style={styles.deleteButton} onPress={() => deleteTask(index)}>
              <AntDesign name="delete" size={30} color="#f08080" />
            </TouchableOpacity>
          </View>)} keyExtractor={(item, index) => index.toString()} />
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#2f4f4f',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#f08080',
    textAlign: 'center'
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 25
  },
  input: {
    flex: 1,
    height: 60,
    borderColor: '#f08080',
    borderWidth: 2,
    paddingHorizontal: 10,
    marginRight: 10,
    borderRadius: 10
  },
  addButton: {
    backgroundColor: '#f08080',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    justifyContent: 'center',
  },
  addButtonLabel: {
    color: 'white',
    fontWeight: 'bold',
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f08080',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  deleteButton: {
    backgroundColor: '#ffff',
    paddingVertical: 7,
    paddingHorizontal: 8,
    borderRadius: 22,
    justifyContent: 'center',
  },

});

export default App;
