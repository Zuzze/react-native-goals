import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";

/**
 * Component to enter text and add it too the list by a press oof a button
 * @param {*} props
 * @param {function} props.onAddGoal
 * @param {function} props.onCancel
 * @param {boolean} props.visible
 */
const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const handleGoalInputChange = text => {
    setEnteredGoal(text);
  };

  const handleGoalSubmit = () => {
    // trigger event for parent
    props.onAddGoal(enteredGoal);
    // clear goal input
    setEnteredGoal("");
  };

  const handleGoalCancel = () => {
    props.onCancel();
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={handleGoalInputChange}
          value={enteredGoal}
          style={styles.input}
          placeholder="add goal"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color="gray" onPress={handleGoalCancel} />
          </View>
          <View style={styles.button}>
            <Button
              title="Add"
              style={styles.addButton}
              onPress={handleGoalSubmit}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: "80%",
    borderColor: "gray",
    borderRadius: 30,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
    marginTop: 30
  },
  button: {
    // note that in react native you cannot add width to button directly, you must wrap it into view
    width: "45%"
  }
});

export default GoalInput;
