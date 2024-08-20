import { StyleSheet } from "react-native";
import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
  groupBoxWrapper: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderColor: "white",
    borderStyle: "solid",
    borderWidth: 2,
    height: 185,
  },
  groupBannerImage: {
    flex: 1,
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  groupName: {
    fontSize: 40,
    fontFamily: FONT.regular,
    color: COLORS.white,
    textShadowColor: "black",
    textShadowOffset: {
      height: 6,
      width: 6,
    },
    textShadowRadius: 3,
  },
  innerGroupBox: {
    flexDirection: "row",
  },
  lowerSection: {
    marginTop: 40,
  },
  memberCountContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  memberCount: {
    fontSize: FONT.large,
    fontWeight: 900,
    marginLeft: 3,
    marginTop: 1,
    color: COLORS.white,
  },
  readyCount: {
    fontSize: FONT.large,
    fontWeight: 900,
    marginLeft: 3,
    marginTop: 1,
    color: COLORS.white,
  },
});

export default styles;
