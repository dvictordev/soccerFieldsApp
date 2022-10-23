import { StyleSheet } from "react-native";
import { THEME } from "../../theme/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headBack: {
    alignItems: "center",
    justifyContent: "center",
  },
  headImg: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: -20,
    width: 420,
    height: 416,
  },
  body: {
    paddingHorizontal: 17,
    paddingTop: 20,
  },
  label: {
    color: THEME.colors.PRIMARY,
    marginBottom: -10,
    marginLeft: 5,
  },
  inputform: {
    height: 57,
    width: 310,
    marginVertical: 18,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: THEME.colors.PRIMARY,
  },
  logBtn: {
    width: 180,
    height: 50,
    borderWidth: 1,
    borderColor: THEME.colors.PRIMARY,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  login: {
    color: THEME.colors.PRIMARY,
    fontWeight: "bold",
    fontSize: 18,
  },
  registerBtn: {
    width: 308,
    height: 50,
    backgroundColor: THEME.colors.PRIMARY,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginTop: 18,
  },
  register: {
    color: THEME.colors.TEXT_PRIMARY,
    fontSize: 18,
    fontWeight: "bold",
  },
});
