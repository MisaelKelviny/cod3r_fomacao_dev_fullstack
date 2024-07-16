import Contador from "@/components/Contador";
import styles from "@/contants/styles";
import React from "react";
import { View } from "react-native";

export default function TelaContador() {
  return (
    <View style={styles.centralizado}>
      <Contador valorInicial={100} />
    </View>
  );
}
