import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isAddingGoal, setIsAddingGoal] = useState(false);

  const handleAddGoal = goal => {
    // goals cana be in previous state snapshot
    // to make sure you have latest goals, use arrow function
    // FlatList requires an array with objects including "key"
    // if you want to use custom prop insteqd of key, set "keyExtractor={myProp}" to FlatList
    // FlatList gives better performanace than ScrollView on Lists that you don't know how many items you have
    // react render will batch all hooks setters together so not rendering twice even they are separate
    setGoals(currentGoals => [
      ...currentGoals,
      { key: Math.random().toString(), value: goal }
    ]);
    setIsAddingGoal(false);
  };

  const handleDeleteGoal = goalKey => {
    setGoals(currentGoals => {
      return currentGoals.filter(goal => goal.key !== goalKey);
    });
  };

  const handleCancelGoal = () => {
    setIsAddingGoal(false);
  };

  return (
    <View style={styles.container}>
      <Text>Goals 2020</Text>

      <Button
        title="Add New Goal"
        style={{ marginVertical: 10 }}
        onPress={() => setIsAddingGoal(true)}
      />

      <GoalInput
        visible={isAddingGoal}
        onAddGoal={handleAddGoal}
        onCancel={handleCancelGoal}
      />

      <Text>Goals</Text>
      <FlatList
        data={goals}
        renderItem={goal => (
          <GoalItem onDelete={handleDeleteGoal} id={goal.item.key}>
            {goal.item.value}
          </GoalItem>
        )}
      ></FlatList>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    //flex: 1,
    backgroundColor: "#fff"
    // alignItems: "center",
    // justifyContent: "center"
  },

  goalItem: {
    backgroundColor: "aliceblue",
    borderRadius: 30,
    padding: 20,
    marginVertical: 10,
    width: "100%"
  }
});
