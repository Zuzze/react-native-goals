import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  View,
  Button
} from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [goals, setGoals] = useState([]);

  const handleGoalInputChange = text => {
    setEnteredGoal(text);
    console.log(text);
  };

  const handleAddGoal = () => {
    // goals cana be in previous state snapshot
    // to make sure you have latest goals, use arrow function
    setGoals(currentGoals => [...currentGoals, enteredGoal]);
    console.log("goals", goals);
  };

  return (
    <View style={styles.container}>
      <Text>Goals 2020</Text>

      <Text>Add Goal</Text>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={handleGoalInputChange}
          value={enteredGoal}
          style={styles.input}
        />
        <Button title="Add" onPress={handleAddGoal} style={{ width: "20%" }} />
      </View>

      <Text>Goals</Text>
      <ScrollView>
        {goals.map(goal => (
          <View key={goal} style={styles.goalItem}>
            <Text>{goal}</Text>
          </View>
        ))}
      </ScrollView>
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
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10
  },
  goalItem: {
    backgroundColor: "aliceblue",
    borderRadius: 30,
    padding: 20,
    marginVertical: 10,
    width: "100%"
  }
});
