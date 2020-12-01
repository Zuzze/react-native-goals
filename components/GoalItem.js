import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

/**
 * Component to display a single goal item
 * @param {*} props
 * @param {*} id
 * @param {*} props.children goal content
 * @param {function} onDelete delete goal
 */
const GoalItem = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={props.onDelete.bind(this, props.id)}
    >
      <View style={styles.goalItem}>
        <Text style={styles.text}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

/*
Touchables have multiple components such as
TouchableNativeFeedback: adds native ripple effect for android
TouchableHiighlight: background color of touched area is changed with "underlayColor" prop
TouchableOpacity: opacity of touched area is changed with "activeOpacity" prop
TouchableWithoutFeedback: no visual feedback of touch
*/

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#333",
    borderRadius: 30,
    padding: 20,
    marginVertical: 10,
    width: "100%",
    color: "#fff"
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "montserrat"
  }
});

export default GoalItem;
