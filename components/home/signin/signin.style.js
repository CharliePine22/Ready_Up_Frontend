import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "green",
  },
  container: {
    // marginTop: SIZES.medium,
    flex: 1,
    alignItems: "center",
    marginHorizontal: 15,
    width: "100%",
  },
  createAccountText: {
    color: COLORS.white,
  },
  inputContainer: {
    flex: 1,
    position: "relative",
    width: "100%",
  },
  inputIcon: {
    position: "absolute",
    right: 40,
    top: 27,
  },
  textInput: {
    paddingVertical: SIZES.large,
    paddingHorizontal: 30,
    backgroundColor: "rgba(0,0,0,.6)",
    marginVertical: 8,
    borderRadius: 50,
    color: COLORS.white,
    borderColor: COLORS.white,
    borderWidth: 1,
    borderStyle: "solid",
    fontSize: SIZES.medium,
    fontFamily: FONT.bold,
    // flex: 1,
  },
  loginActions: {
    width: "100%",
    alignItems: "center",
  },
  loginActionsText: {
    width: "100%",
    textAlign: "center",
    // borderBottomColor: 'black',
    // borderBottomWidth: '1px',
    // borderStyle: 'solid',
    // marginBottom: 12,
    // lineHeight: '0.1em',
  },
  loginActionsTextInner: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    fontFamily: FONT.bold,
    fontWeight: 900,
    width: "100%",
    textAlign: "center",
    background: "#fff",
    paddingHorizontal: 10,
  },
  loginAltsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
    position: "relative",
    // top: 80,
  },
  loginAltIcon: {
    height: 36,
    width: 36,
    resizeMode: "contain",
    marginHorizontal: 15,
  },
  loginBtn: {
    padding: 12,
    marginTop: 0,
    marginBottom: 18,
    marginHorizontal: "auto",
    textAlign: "center",
    color: COLORS.white,
    backgroundColor: COLORS.gaming,
    borderRadius: 3,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.7,
    width: "95%",
  },
  loginText: {
    color: COLORS.white,
    textAlign: "center",
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
  },
});

export default styles;
