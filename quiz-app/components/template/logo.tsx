import { StyleSheet, Text, View } from "react-native";

export default function Logo() {
  return (
    <View>
      <Text style={styles.title}>SPACE QUIZ</Text>
      <Text style={styles.subtitle}>Perguntas de outro mundo!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "SOLARSPACEDEMO",
    fontSize: 35,
    color: "white",
    textAlign: "center",
  },
  subtitle: {
    fontFamily: "SPACEMISSION",
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
});
