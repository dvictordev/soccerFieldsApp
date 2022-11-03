import React from "react";
import { Text, View } from "react-native";
import { ActiveButton } from "../../components/ActiveButton";
import { Header } from "../../components/Header";

import field from "../../assets/field.png";

import { styles } from "./styles";
import { Match } from "../../components/Match";
import { ScheduleModal } from "../../components/ScheduleModal";
import ball from "../../assets/ball.png";

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <View style={styles.buttons}>
          <ScheduleModal label="Agendar" source={ball} />
          <ScheduleModal label="Locais" source={field} />
        </View>
        <View style={styles.matchsHeader}>
          <Text>Minhas partidas</Text>
          <Text>2</Text>
        </View>
        <View>
          <Match />
          <Match />
        </View>
      </View>
    </View>
  );
}
