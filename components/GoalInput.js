import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder='Course Goal'
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title='ADD' onPress={() => props.goalAdd(enteredGoal)} />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default GoalInput;
