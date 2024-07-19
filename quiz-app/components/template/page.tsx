import { ReactNode } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

export interface PageProps {
  children: ReactNode;
}

const background = require("@/assets/images/background.jpg");

export default function Page(props: Readonly<PageProps>) {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={styles.image}
        imageStyle={{ opacity: 0.4 }}
        source={background}
      >
        {props.children}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  image: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
