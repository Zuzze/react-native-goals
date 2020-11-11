import React from "react";
import { View, Text, StyleSheet } from "react-native";

/**
 * Component to display a single goal item
 * @param {*} props
 * @param {*} props.children goal content
 */
const GoalItem = props => {
  return (
    <View style={styles.goalItem}>
      <Text>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "aliceblue",
    borderRadius: 30,
    padding: 20,
    marginVertical: 10,
    width: "100%"
  }
});

export default GoalItem;
