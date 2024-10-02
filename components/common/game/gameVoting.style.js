import { StyleSheet } from "react-native";
import { COLORS, FONT } from "../../../constants";

const styles = StyleSheet.create({
  gameCaseContainer: {
    height: 275,
    backgroundColor: "rgba(0,0,0,.4)",
    width: 175,
    justifyContent: "center",
    borderColor: COLORS.white,
    borderWidth: 2,
    borderRadius: 5,
    marginTop: 5,
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 7,
    shadowColor: "black",
  },
  gameCaseCover: {
    flex: 1,
    justifyContent: "center",
    height: "100%",
    width: "100%",
    backgroundSize: "100% 100%",
  },
  gameInfo: {
    textAlign: "center",
    color: COLORS.white,
    fontFamily: FONT.base,
    fontSize: 16,
    letterSpacing: -0.1,
    position: "relative",
  },
  gameInfoHeader: {
    color: COLORS.white,
    fontSize: 28,
    fontFamily: FONT.header,
    textShadowColor: "black",
    textShadowOffset: {
      height: 2,
      width: -1,
    },
    textShadowRadius: 2,
  },
  gameMessage: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 600,
    textAlign: "center",
    fontFamily: FONT.bold,
    paddingHorizontal: 5,
  },
  gameSelectionActions: {
    width: "100%",
    alignItems: "center",
    marginTop: 25,
  },
  gameSelectionBtn: {
    textAlign: "center",
    display: "inline-block",
    margin: 5,
    paddingVertical: 12,
    paddingLeft: 5,
    backgroundColor: "lightgray",
    textShadowColor: "black",
    textShadowOffset: {
      height: -1,
      width: -1,
    },
    textShadowRadius: 0,
    width: "80%",
    maxWidth: 200,
    borderRadius: 7,
    shadowColor: "gray",
    shadowOpacity: 1,
    shadowOffset: {
      height: 5,
      width: 0,
    },
    shadowRadius: 0,
    cursor: "pointer",
    marginBottom: 15,
  },
  gameSelectionBtnPressed: {
    shadowOpacity: 0,
    top: 2,
  },
  gameSelectionBtnText: {
    fontFamily: FONT.btnFont,
    fontWeight: 900,
    textAlign: "center",
    fontSize: 13,
    textShadowColor: "white",
    textShadowOffset: {
      height: 1,
      width: 1,
    },
    textShadowRadius: 0,
    color: "gray",
  },
  gameSelectionContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 25,
    width: "100%",
  },
  gameSelectionDetails: {
    alignItems: "center",
    maxWidth: "53%",
  },
  votedGameInfoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    textAlign: "center",
    marginVertical: 15,
  },
  votedGameInfoWrapper: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  votingIcon: {
    color: COLORS.white,
    position: "absolute",
  },
});

export default styles;
