import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    // marginTop: SIZES.medium,
    flex: 1,
    alignItems: "center",
    marginHorizontal: 15,
    width: "100%",
  },
  inputContainer: {
    flex: 1,
    position: "relative",
    width: "100%",
  },
  inputIcon: {
    position: "absolute",
    right: 40,
    top: 26,
  },
  loginBtn: {
    padding: 12,
    marginTop: 0,
    marginBottom: 10,
    marginHorizontal: "auto",
    textAlign: "center",
    color: COLORS.white,
    backgroundColor: COLORS.gaming,
    borderRadius: 3,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.7,
    width: "100%",
  },
  loginText: {
    color: COLORS.white,
    textAlign: "center",
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
  },
  signInText: {
    color: COLORS.white,
    marginTop: 10,
  },
  textInput: {
    paddingVertical: 18,
    paddingHorizontal: 30,
    backgroundColor: "rgba(0,0,0,.6)",
    marginVertical: 8,
    // borderRadius: 50,
    color: COLORS.white,
    borderColor: COLORS.white,
    borderWidth: 1,
    borderStyle: "solid",
    fontSize: SIZES.medium,
    fontFamily: FONT.bold,
    // flex: 1,
  },
});

export default styles;
