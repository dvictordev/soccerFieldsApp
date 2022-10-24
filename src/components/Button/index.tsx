import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { styles } from "./styles";

type buttonProps = TouchableOpacityProps & {
  buttonTitle: string;
};

export function Button({ buttonTitle, ...rest }: buttonProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.buttonTitle}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
}
