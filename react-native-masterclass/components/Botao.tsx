import React, { ReactNode } from "react";
import { Pressable, PressableProps, StyleSheet } from "react-native";

export interface BotaoProps extends PressableProps {
  children: ReactNode;
}

export default function Botao({ children, ...props }: BotaoProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.8 : 1,
        },
        styles.botao,
      ]}
      {...props}
    >
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: "#3a7eff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
});
