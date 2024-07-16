import { Stack } from "expo-router";
import React from "react";

export default function Layout(props: any) {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Inicio",
        }}
      ></Stack.Screen>
    </Stack>
  );
}
