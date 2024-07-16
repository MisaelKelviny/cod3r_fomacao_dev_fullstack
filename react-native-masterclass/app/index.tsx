import Botao from "@/components/Botao";
import styles from "@/contants/styles";
import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { Text, View } from "react-native";

export default function TelaInicial() {
  const nav = useNavigation();

  return (
    <View style={[styles.centralizado, { gap: 10 }]}>
      <Ionicons name="logo-react" size={180} />
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 20, fontWeight: 700 }}>
          Masterclass React Native
        </Text>
        <Text style={{ fontSize: 16 }}>Esquenta formação.DEV</Text>
      </View>
      <Botao onPress={() => nav.dispatch(DrawerActions.openDrawer())}>
        <Text style={{ color: "white" }}>Exercicios</Text>
      </Botao>
    </View>
  );
}
