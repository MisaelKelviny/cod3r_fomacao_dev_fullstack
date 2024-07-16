import Botao from "@/components/Botao";
import styles from "@/contants/styles";
import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function TelaStackPrimeiro() {
  return (
    <View style={styles.centralizado}>
      <Text>Tela inicial</Text>
      <Botao>
        <Link style={{ color: "#fff" }} href={"/stack/nova"}>
          ir para tela nova
        </Link>
      </Botao>
    </View>
  );
}
