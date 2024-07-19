import React from "react";
import { StyleSheet, Text, View } from "react-native";

export interface StatementProps {
  statement: string;
}

export default function Statement(props: Readonly<StatementProps>) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.statement}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#852E9C",
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  text: {
    color: "white",
    fontSize: 23,
    textAlign: "center",
    fontWeight: "bold",
    opacity: 0.8,
  },
});
