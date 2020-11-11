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
        <Text>{props.children}</Text>
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
    backgroundColor: "aliceblue",
    borderRadius: 30,
    padding: 20,
    marginVertical: 10,
    width: "100%"
  }
});

export default GoalItem;
