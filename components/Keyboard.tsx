import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import KeyboardButton from "./KeyboardButton";

export default function MyComponent() {
  const keyboardOptions = [
    { title: "C", color: "#353c4a", textColor: "#f2f4f7"},
    { title: "+/-", color: "#353c4a", textColor: "#f2f4f7" },
    { title: "%", color: "#353c4a", textColor: "#f2f4f7" },
    { title: "/", color: "#4d7ad6", textColor: "#f2f4f7" },
    { title: "7", color: "#ffff", textColor: "#383b40" },
    { title: "8", color: "#ffff", textColor: "#383b40"},
    { title: "9", color: "#ffff", textColor: "#383b40"},
    { title: "X", color: "#4d7ad6", textColor: "#f2f4f7" },
    { title: "4", color: "#ffff", textColor: "#383b40"},
    { title: "5", color: "#ffff", textColor: "#383b40"},
    { title: "6", color: "#ffff", textColor: "#383b40"},
    { title: "-", color: "#4d7ad6", textColor: "#f2f4f7" },
    { title: "1", color: "#ffff", textColor: "#383b40"},
    { title: "2", color: "#ffff", textColor: "#383b40"},
    { title: "3", color: "#ffff", textColor: "#383b40"},
    { title: "+", color: "#4d7ad6", textColor: "#f2f4f7" },
    { title: ".", color: "#ffff", textColor: "#383b40"},
    { title: "0", color: "#ffff", textColor: "#383b40"},
    { title: "Del", color: "#ffff", textColor: "#383b40"},
    { title: "=", color: "#4d7ad6", textColor: "#f2f4f7" },
  ];
  

  const [number, setNumber] = useState("");
  const handlePress = (newNumber: string) => {
    setNumber(number + newNumber);
  };

  return (
    <View style={styles.container}>
      {keyboardOptions.map((buttonValue, index) => (
        <KeyboardButton
          key={index}
          character={buttonValue.title.toString()}
          onPress={() => handlePress(buttonValue.toString())}
          bgColor={buttonValue.color}
          textColor={buttonValue.textColor}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 10,
    marginTop: 30,
    backgroundColor: "#F5F5F5"
  },
});
