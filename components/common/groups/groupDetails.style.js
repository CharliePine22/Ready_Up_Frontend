import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
  groupDetailsWrapper: {
    backgroundColor: COLORS.white,
    position: "absolute",
    height: "100%",
    width: "100%",
    zIndex: 1,
  },
  groupHeader: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
