import { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [addModal, setAddModal] = useState(false);
  const addGoal = (enteredGoal) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), value: enteredGoal },
    ]);
    setAddModal(false);
  };

  const deleteHandler = (key) => {
    setCourseGoals(courseGoals.filter((goal) => goal.key != key));
  };
  const cancelModal = () => {
    setAddModal(false);
  };
  return (
    <View style={styles.screen}>
      <Button title='Add New Goal' onPress={() => setAddModal(true)} />
      <GoalInput visible={addModal} goalAdd={addGoal} onCancel={cancelModal} />
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            onDelete={() => deleteHandler(itemData.item.key)}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 50 },
});
