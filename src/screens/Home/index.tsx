import React from "react";
import { Text, View } from "react-native";
import { ActiveButton } from "../../components/ActiveButton";
import { Header } from "../../components/Header";

import ball from "../../assets/ball.png";
import field from "../../assets/field.png";

import { styles } from "./styles";
import { Match } from "../../components/Match";

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <View style={styles.buttons}>
          <ActiveButton label="agendar" source={ball} />
          <ActiveButton label="agendar" source={field} />
        </View>
        <View style={styles.matchsHeader}>
          <Text>Minhas partidas</Text>
          <Text>2</Text>
        </View>
        <View>
          <Match />
          <Match />
          <Match />
        </View>
      </View>
    </View>
  );
}
