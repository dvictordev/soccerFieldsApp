import React from "react";
import { Image, Text, View } from "react-native";

import stadium from "../../assets/stadium.png";

import { styles } from "./styles";

export function Match() {
  return (
    <View style={styles.container}>
      <Image source={stadium} />
      <View style={styles.matchInfo}>
        <Text style={styles.title}>Arena fut 7</Text>
        <Text style={styles.subtitle}>16/12 as 20:00hr</Text>
      </View>
    </View>
  );
}
