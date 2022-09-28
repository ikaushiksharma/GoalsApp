import {useState} from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals,setCourseGoals]=useState([]);
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  const addGoal = () => {
    setCourseGoals(currentGoals=> [...currentGoals,enteredGoal]);
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
      <View>
      {courseGoals.map((goal,i)=> <Text key={i}>{goal}</Text>)}
      
      </View>
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
});
