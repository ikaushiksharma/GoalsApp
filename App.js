import { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoal = (enteredGoal) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), value: enteredGoal },
    ]);
  };
  return (
    <View style={styles.screen}>
      <GoalInput goalAdd={addGoal} />
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem onDelete={() => {}} title={itemData.item.value} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 50 },
});
