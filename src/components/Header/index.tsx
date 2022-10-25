import React from "react";
import { Image, ImageBackground, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

// import user from "../../assets/user.png";
import headBackground from "../../assets/headBack.png";
import splashScreen from "../../assets/splashScreen.png";

import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.container}>
      <ImageBackground source={headBackground} style={styles.headerBack}>
        <View style={styles.headItems}>
          <Image
            source={{
              uri: "https://avatars.githubusercontent.com/u/82322388?v=4",
            }}
            style={styles.user}
          />
          <Image source={splashScreen} style={styles.logo} />
          <TouchableOpacity activeOpacity={0.7}>
            <Entypo name="menu" size={30} color={"white"} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
