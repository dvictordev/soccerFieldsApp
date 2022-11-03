import { Box, Button, Center, FormControl, Modal, Select } from "native-base";
import { View, ImageProps, Text } from "react-native";
import { useState, useEffect } from "react";

import { styles } from "./styles";
import { Input } from "../Input";
import { ActiveButton } from "../ActiveButton";
import { SelectComponent } from "../SelectComponent";

interface LocalModalProps extends ImageProps {
  label: string;
}

export interface localsProps {
  id: string;
  hours: string[];
  local: string;
  bannerUrl: string;
  fieldType: string;
}

export function ScheduleModal({ label, ...rest }: LocalModalProps) {
  const [locals, setLocals] = useState<any>([]);

  // useEffect(() => {
  //   fetch("http://192.168.1.11:3333/local")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  function handleGetLocals() {
    fetch("http://192.168.1.11:3333/local")
      .then((res) => res.json())
      .then((data) => setLocals(data));
  }

  const [showModal, setShowModal] = useState(false);
  return (
    <View>
      <ActiveButton
        label={label}
        {...rest}
        onPress={() => {
          handleGetLocals();
          setShowModal(true);
        }}
      />
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content style={styles.body}>
          <Modal.CloseButton />
          <Text style={styles.header}>{label}</Text>
          <Modal.Body>
            <FormControl>
              <SelectComponent locals={locals} />
              {/* <Box maxWidth={400}>
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
                  {locals.map((item) => {
                    return (
                      <Select.Item
                        key={item.id}
                        label={item.local}
                        value={item.local}
                      />
                    );
                  })}
                </Select>
              </Box> */}
            </FormControl>
            <FormControl mt="1">
              <Input label="Email" />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                Cancel
              </Button>
              <Button
                onPress={() => {
                  setShowModal(false);
                }}
              >
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </View>
  );
}
