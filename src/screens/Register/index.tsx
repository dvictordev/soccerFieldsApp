import React from "react";
import { StatusBar } from "expo-status-bar";
import { HeaderDef } from "../../components/HeaderDef";
import { Input } from "../../components/Input";

import { styles } from "./styles";
import { View } from "react-native";
import { Button } from "../../components/Button";

export function Register() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <HeaderDef />
      <View style={styles.body}>
        <Input label="Usuario" />
        <Input label="Senha" />
        <Input label="Nome" />
        <Input label="Sobrenome" />
        <Button buttonTitle="Cadastre-se" style={styles.button} />
      </View>
    </View>
  );
}
