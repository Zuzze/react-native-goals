import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  FlatList,
  Button,
  Image
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { AppLoading } from "expo";
import * as Font from "expo-font";

const fetchFonts = () => {
  return Font.loadAsync({
    montserrat: require("./assets/fonts/Montserrat-Regular.ttf"),
    "montserrat-bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    sofia: require("./assets/fonts/Sofia-Regular.ttf")
  });
};

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isAddingGoal, setIsAddingGoal] = useState(false);
  const [fontLoaded, setFontLoaded] = useState(false);

  // keeps splash screen open until fonts loaded
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

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
      <Image style={styles.hero} source={require("./assets/chart.png")} />
      <View style={styles.goals}>
        <View style={styles.header}>
          <Text style={styles.title}>Goals 2020</Text>

          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => setIsAddingGoal(true)}
          >
            <Text style={styles.iconButtonText}>+</Text>
          </TouchableOpacity>
        </View>

        <GoalInput
          visible={isAddingGoal}
          onAddGoal={handleAddGoal}
          onCancel={handleCancelGoal}
        />

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222"
    // alignItems: "center",
    // justifyContent: "center"
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 20
  },
  hero: {
    width: "100%",
    marginTop: -100
  },
  title: {
    color: "#fff",
    fontSize: 20,
    marginVertical: 10,
    fontFamily: "montserrat-bold"
  },
  goals: {
    backgroundColor: "#222",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -130,
    minHeight: 200,
    padding: 20
  },
  iconButton: {
    backgroundColor: "#6862CC",
    justifyContent: "center",
    alignItems: "center",
    width: 50,

    borderRadius: 20
  },
  iconButtonText: {
    color: "white",
    fontSize: 30,
    fontFamily: "montserrat"
  },
  goalItem: {
    backgroundColor: "#333",
    borderRadius: 30,
    padding: 20,
    marginVertical: 10,
    width: "100%"
  }
});
