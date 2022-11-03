import { Box, Button, Center, FormControl, Modal, Select } from "native-base";
import { useState } from "react";
import { Text } from "react-native";
import { localsProps } from "../ScheduleModal";

import { styles } from "./styles";

interface SelectProps {
  locals: localsProps[];
}

export function SelectComponent(props: SelectProps) {
  const [hours, setHours] = useState<string>("");
  const [selectedLocal, setSelectedLocal] = useState<string>("");
  return (
    <Box>
      <Text style={styles.select}>Local</Text>
      <Select
        selectedValue={selectedLocal}
        placeholder="Locais"
        maxWidth={400}
        borderColor="#0FBA00"
        color={"#0FBA00"}
        padding="3"
        borderRadius={8}
        onValueChange={(value) => setSelectedLocal(value)}
      >
        {props.locals.map((item: any) => {
          return (
            <Select.Item key={item.id} label={item.local} value={item.local} />
          );
        })}
      </Select>
    </Box>
  );
}
