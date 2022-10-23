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
        <ImageBackground source={headBackground} style={styles.headImg}>
          <Image source={logo} />
        </ImageBackground>

        <View style={styles.body}>
          <Text style={styles.label}>Login</Text>
          <TextInput
            style={styles.inputform}
            onChangeText={(e) => setEmail(e)}
          />

          <Text style={styles.label}>Senha</Text>
          <TextInput
            onChangeText={(e) => setPassword(e)}
            style={styles.inputform}
            secureTextEntry
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
