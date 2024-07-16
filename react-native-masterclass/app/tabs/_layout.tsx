import { Ionicons } from "@expo/vector-icons";
import { Tabs, useNavigation } from "expo-router";
import React from "react";

export default function Layout(props: any) {
  const nav: any = useNavigation();

  function icone(nome: string) {
    return (props: any) => (
      <Ionicons
        name={nome as any}
        size={18}
        color={props.focused ? "#3a98ff" : "#000"}
      />
    );
  }

  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: icone("home-outline"),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="cursos"
        options={{
          title: "Cursos",
          tabBarIcon: icone("play-outline"),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="configuracao"
        options={{
          title: "Configuração",
          tabBarIcon: icone("settings-outline"),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="mais"
        options={{
          title: "Opções",
          tabBarIcon: icone("menu"),
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            nav?.openDrawer();
          },
        }}
      ></Tabs.Screen>
    </Tabs>
  );
}
