import React from "react";
import {
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  Image,
  ImageProps,
} from "react-native";

import { styles } from "./styles";

type ActiveButtonProps = TouchableOpacityProps &
  ImageProps & {
    label: string;
  };

export function ActiveButton({ label, ...rest }: ActiveButtonProps) {
  return (
    <TouchableOpacity style={styles.button} {...rest} activeOpacity={0.6}>
      <Image {...rest} />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}
