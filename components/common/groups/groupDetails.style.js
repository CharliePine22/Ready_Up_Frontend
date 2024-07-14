import { StyleSheet } from "react-native";
import { COLORS, FONT } from "../../../constants";

const styles = StyleSheet.create({
  groupDetailsWrapper: {
    backgroundColor: "#36454F",
    position: "absolute",
    height: "100%",
    width: "100%",
    zIndex: 1,
  },
  gamesListGameName: {
    color: COLORS.white,
    marginVertical: 5,
    height: 20,
  },
  gamesPlayedListWrapper: {
    width: "100%",
    backgroundColor: "black",
    alignItems: "center",
    margin: 10,
    padding: 10,
  },
  groupHeader: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    marginTop: 15,
  },
  groupName: {
    fontFamily: FONT.videogame,
    fontSize: 50,
    color: COLORS.white,
  },
  memberListContainer: {
    width: "100%",
    flexDirection: "row",
  },
  memberList: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
