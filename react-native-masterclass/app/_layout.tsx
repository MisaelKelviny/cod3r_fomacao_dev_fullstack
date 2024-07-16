import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{ headerShown: false }}>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Home",
            title: "Bem-vindo",
            drawerIcon: () => (
              <Ionicons name="home-outline" size={18} color={"#3a98ff"} />
            ),
          }}
        />
        <Drawer.Screen
          name="primeiro"
          options={{
            drawerLabel: "Ínicio",
            title: "Primeiro componente",
            drawerIcon: () => (
              <Ionicons
                name="heart-circle-outline"
                size={18}
                color={"#3a98ff"}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="contador"
          options={{
            drawerLabel: "Contador",
            title: "Contador",
            drawerIcon: () => (
              <Ionicons name="add" size={18} color={"#3a98ff"} />
            ),
          }}
        />
        <Drawer.Screen
          name="formulario"
          options={{
            drawerLabel: "Formulário",
            title: "Formulário",
            drawerIcon: () => (
              <Ionicons name="checkbox-outline" size={18} color={"#3a98ff"} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
