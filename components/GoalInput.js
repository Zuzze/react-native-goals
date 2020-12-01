import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal
} from "react-native";

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
      <Image style={styles.image} source={require("../assets/shapes.png")} />
      <View style={styles.inputContainer}>
        <Text style={styles.title}>Add Goal</Text>
        <TextInput
          onChangeText={handleGoalInputChange}
          value={enteredGoal}
          style={styles.input}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={handleGoalCancel}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleGoalSubmit}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
    backgroundColor: "#222",
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    flex: 1,
    width: "100%"
  },
  title: {
    color: "#eee",
    fontSize: 20,
    fontFamily: "montserrat-bold",
    paddingBottom: 40
  },
  input: {
    width: "80%",
    backgroundColor: "#333",
    borderColor: "transparent",
    borderRadius: 30,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    color: "white",
    fontFamily: "montserrat",
    fontSize: 16
  },
  buttonContainer: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
    marginTop: 30
  },
  button: {
    width: "45%",
    backgroundColor: "#6862CC",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  cancelButton: {
    width: "45%",
    backgroundColor: "#D9A3DD",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "white",
    fontFamily: "montserrat",
    fontSize: 16
  }
});

export default GoalInput;
