import { StyleSheet, Text, View } from "react-native";
import { Home } from "./src/screens/Home";
import { Login } from "./src/screens/Login";
import { Register } from "./src/screens/Register";

import { SafeAreaView } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        {/* <Register /> */}
        {/* <Login /> */}
        <Home />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
