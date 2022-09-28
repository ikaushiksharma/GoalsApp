import {useState} from 'react'
import { Button, StyleSheet, Text, TextInput, View,FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals,setCourseGoals]=useState([]);
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  const addGoal = () => {
    setCourseGoals(currentGoals=> [...currentGoals,{key:Math.random().toString(),value:enteredGoal}]);
    console.log(courseGoals)
  };
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Course Goal'
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title='ADD' onPress={addGoal} />
      </View>
      <FlatList data={courseGoals} renderItem={itemData=>
        <View key={itemData.item.key} style={styles.listItem}><Text>{itemData.item.value}</Text></View>} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 50 },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderBottomColor: 'black',
    padding: 10,
  },
  listItem:{
    padding:10,
    marginVertical:10,
    backgroundColor:'#ccc',
    borderColor:'black',
    borderWidth:1,
  }
});
