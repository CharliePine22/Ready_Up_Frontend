import { StyleSheet } from "react-native";
import { COLORS, FONT } from "../../../constants";

const styles = StyleSheet.create({
  buttonClose: {
    backgroundColor: "red",
  },
  centeredView: {
    flex: 1,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, .5)",
  },
  closeBtn: {
    position: "absolute",
    top: 5,
    right: 5,
  },
  formTextHeader: {
    fontFamily: FONT.header,
    fontSize: 30,
    color: COLORS.white,
  },
  groupForm: {
    marginTop: 10,
  },
  groupNameInput: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: COLORS.white,
    color: COLORS.white,
    paddingVertical: 5,
    paddingHorizontal: 2,
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
    marginBottom: 10,
    textAlign: "center",
    color: COLORS.white,
    fontSize: 24,
    fontFamily: FONT.videogame,
    lineHeight: 25,
  },
  modalView: {
    margin: 20,
    backgroundColor: "rgb(69, 73, 78)",
    borderRadius: 5,
    borderColor: "white",
    bordedrStyle: "solid",
    borderWidth: 2,
    paddingVertical: 35,
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
  },
  videoGameBtn: {
    lineHeight: 16,
    height: 40,
    textAlign: "center",
    display: "inline-block",
    width: 40,
    borderRadius: 100,
    backgroundColor: "red",
    margin: 5,
    backgroundColor: "red",
    paddingLeft: 5,
  },
});

export default styles;
