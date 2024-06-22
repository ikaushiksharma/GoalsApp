import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([
    { text: "Learn React Native", id: "1" },
    { text: "Learn Redux", id: "2" },
    { text: "Learn React Navigation", id: "3" },
    { text: "Learn React Native Paper", id: "4" },
    { text: "Learn React Native Elements", id: "5" },
    { text: "Learn React Native Vector Icons", id: "6" },
    { text: "Learn React Native Maps", id: "7" },
    { text: "Learn React Native Camera", id: "8" },
    { text: "Learn React Native Firebase", id: "9" },
    { text: "Learn React Native Push Notifications", id: "10" },
    { text: "Learn React Native Gesture Handler", id: "11" },
    { text: "Learn React Native Reanimated", id: "12" },
    { text: "Learn React Native Screens", id: "13" },
    { text: "Learn React Native Webview", id: "14" },
    { text: "Learn React Native Maps", id: "15" },
    { text: "Learn React Native Camera", id: "16" },
    { text: "Learn React Native Firebase", id: "17" },
    { text: "Learn React Native Push Notifications", id: "18" },
    { text: "Learn React Native Gesture Handler", id: "19" },
    { text: "Learn React Native Reanimated", id: "20" },
    { text: "Learn React Native Screens", id: "21" },
    { text: "Learn React Native Webview", id: "22" },
    { text: "Learn React Native Maps", id: "23" },
    { text: "Learn React Native Camera", id: "24" },
    { text: "Learn React Native Firebase", id: "25" },
    { text: "Learn React Native Push Notifications", id: "26" },
    { text: "Learn React Native Gesture Handler", id: "27" },
    { text: "Learn React Native Reanimated", id: "28" },
    { text: "Learn React Native Screens", id: "29" },
    { text: "Learn React Native Webview", id: "30" },
    { text: "Learn React Native Maps", id: "31" },
    { text: "Learn React Native Camera", id: "32" },
    { text: "Learn React Native Firebase", id: "33" },
  ]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add New Goal" color="#a065ec" onPress={startAddGoalHandler} />
        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
