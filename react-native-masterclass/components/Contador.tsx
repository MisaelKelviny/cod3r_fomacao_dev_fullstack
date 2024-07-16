import styles from "@/contants/styles";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, View } from "react-native";
import Botao from "./Botao";

export interface ContadorProps {
  valorInicial?: number;
}

export default function Contador({ valorInicial }: ContadorProps) {
  const [numero, setNumero] = useState(valorInicial ?? 0);

  return (
    <View style={styles.centralizado}>
      <Text style={{ fontSize: 50 }}>{numero}</Text>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <Botao onPress={() => setNumero(numero + 1)}>
          <Ionicons name="add" size={24} color={"white"} />
        </Botao>
        <Botao onPress={() => setNumero(numero - 1)}>
          <Ionicons name="remove" size={24} color={"white"} />
        </Botao>
      </View>
    </View>
  );
}
