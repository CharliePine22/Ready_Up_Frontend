import { StyleSheet } from "react-native";
import { COLORS, FONT } from "../../../constants";

const styles = StyleSheet.create({
  searchResultsItemCover: {
    height: 75,
    width: 60,
    marginRight: 10,
  },
  searchResultsWrapper: {
    width: "100%",
    height: 250,
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
  },
  searchResultItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 5,
    borderBottomColor: "white",
    borderBottomStyle: "solid",
    borderBottomWidth: 2,
  },
  searchResultsContainer: {
    width: "100%",
  },
});

export default styles;
