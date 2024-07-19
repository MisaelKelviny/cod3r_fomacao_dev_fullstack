import { Pressable, StyleSheet, Text, View } from "react-native";

export interface ResultProps {
  points: number;
  questionTotal: number;
  restart: () => void;
}

export default function Result(props: Readonly<ResultProps>) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Você acertou</Text>
      <Text style={styles.emphasis}>
        {Math.round((props.points / props.questionTotal) * 100)}%
      </Text>
      <Pressable style={styles.button} onPress={props.restart}>
        <Text style={styles.buttonText}>Reiniciar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#000",
    padding: 15,
  },
  text: {
    color: "#bbb",
    fontSize: 20,
  },
  emphasis: {
    color: "white",
    fontSize: 60,
    fontWeight: "900",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#2E9D48",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
  },
});
