import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Tasks from './components/Tasks';

import React from 'react';

export default function App() {

  const [tasks, setTasks] = React.useState('');
  const [taskItems, setTaskItems] = React.useState([]);

  function handleAddTask(){
    Keyboard.dismiss()
    setTaskItems([...taskItems, tasks])
    setTasks('')
  }

  function deleteTask(index){
    let copyItems = [...taskItems]
    copyItems.splice(index, 1)
    setTaskItems(copyItems)
  }

  return (
    <View style={styles.container} behavior="scroll">
      {/* Today's Tasks */}
      <View style={styles.textWrapper}>
        <Text style={styles.titleSection}>Today's Tasks</Text>

        <View style={styles.items}>
          {
            taskItems.map((item, index) => (
              <TouchableOpacity key={index} onPress={() => deleteTask(index)}>
                <Tasks>{item}</Tasks>
              </TouchableOpacity>
            ))
          }
        </View>
      </View>

      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.inputText}
          placeholder='write task'
          value={tasks}
          onChangeText={text => setTasks(text)}
        />
        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    justifyContent: 'space-between',
  },
  textWrapper: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  titleSection: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#E8EAED',
  },
  inputText: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderWidth: 1,
    borderColor: '#c0c0c0',
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#c0c0c0',
  },
  addText: {
    fontSize: 30,
  },
});
