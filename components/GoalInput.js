import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const handleGoalInputChange = text => {
    setEnteredGoal(text);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={handleGoalInputChange}
        value={enteredGoal}
        style={styles.input}
      />
      <Button title="Add" onPress={() => props.onAddGoal(enteredGoal)} />
    </View>
  );
};

const styles = StyleSheet.create({
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
  }
});

export default GoalInput;