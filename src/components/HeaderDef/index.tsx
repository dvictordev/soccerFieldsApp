import React from "react";
import { Image, ImageBackground, View } from "react-native";

import headBackground from "../../assets/headBackground.png";
import logo from "../../assets/logo.png";

import { styles } from "./styles";

export function HeaderDef() {
  return (
    <ImageBackground source={headBackground} style={styles.headImg}>
      <Image source={logo} />
    </ImageBackground>
  );
}
