import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  ImageBackground,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import headBackground from "../../assets/headBackground.png";
import logo from "../../assets/logo.png";

import { styles } from "./styles";
import { Input } from "../../components/Input";
import { HeaderDef } from "../../components/HeaderDef";

interface loginProps {
  email: string;
  password: string;
}

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // function handleLogin({ email, password }: loginProps) {
  //   fetch();
  // }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.headBack}>
        <HeaderDef />

        <View style={styles.body}>
          <Input
            style={styles.inputform}
            onChangeText={(e) => setEmail(e)}
            label="Usuario"
          />

          <Input
            onChangeText={(e) => setPassword(e)}
            style={styles.inputform}
            secureTextEntry
            label="Senha"
          />

          <TouchableOpacity activeOpacity={0.6} style={styles.logBtn}>
            <Text style={styles.login}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7} style={styles.registerBtn}>
            <Text style={styles.register}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
