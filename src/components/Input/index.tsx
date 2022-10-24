import React from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";

import { styles } from "./styles";
type InputProps = TextInputProps & {
  label: string;
};

export function Input({ label, ...rest }: InputProps) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} {...rest}></TextInput>
    </View>
  );
}
