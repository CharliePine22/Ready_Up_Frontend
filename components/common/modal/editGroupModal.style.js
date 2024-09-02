import { StyleSheet } from "react-native";
import { COLORS, FONT } from "../../../constants";

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, .5)",
  },
  closeModalBtn: {
    position: "absolute",
    top: 5,
    right: 5,
  },
  formTextHeader: {
    fontFamily: FONT.header,
    fontSize: 38,
    color: COLORS.white,
  },
  groupSettingsWrapper: {
    display: "flex",
    height: "100%",
    width: "100%",
  },
  memberList: {
    display: "flex",
    backgroundColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: COLORS.white,
  },
  memberName: {
    color: COLORS.white,
    fontSize: 18,
    paddingVertical: 8,
    paddingHorizontal: 5,
  },
  memberListContainer: {
    flex: 1,
  },
  modalView: {
    margin: 20,
    backgroundColor: "rgb(69, 73, 78)",
    borderRadius: 5,
    borderColor: "white",
    bordedrStyle: "solid",
    borderWidth: 2,
    paddingVertical: 40,
    paddingHorizontal: 25,
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "88%",
    maxWidth: 500,
    maxHeight: 420,
  },
  modalActions: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
  },
  modalText: {
    marginBottom: 25,
    textAlign: "center",
    color: "white",
    fontSize: 26,
    fontFamily: FONT.videogame,
    lineHeight: 25,
  },
});

export default styles;
