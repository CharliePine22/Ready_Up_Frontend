import { StyleSheet } from 'react-native';
import { COLORS, FONT } from '../../../constants';

const styles = StyleSheet.create({
  addMemberBtn: {
    position: 'absolute',
    top: -34,
    left: 67,
  },
  buttonClose: {
    backgroundColor: 'red',
  },
  centeredView: {
    flex: 1,
    position: 'absolute',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, .5)',
  },
  closeBtn: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  emptyListContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  emptyListText: {
    color: COLORS.white,
    textAlign: 'center',
    fontSize: 16,
  },
  formTextHeader: {
    fontFamily: FONT.header,
    fontSize: 38,
    color: COLORS.white,
  },
  groupFormContainer: {
    width: '100%',
    paddingHorizontal: 10,
  },
  groupFormWrapper: {
    marginTop: 10,
  },
  groupNameForm: {
    marginBottom: 15,
  },
  groupNameInput: {
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: COLORS.white,
    color: COLORS.white,
    paddingVertical: 10,
    paddingHorizontal: 5,
    fontSize: 18,
    marginTop: 2,
  },
  groupNameInputError: {
    borderColor: 'red',
  },
  memberInvited: {
    color: COLORS.white,
    fontSize: 18,
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  memberListContainer: {
    backgroundColor: 'black',
    height: 150,
    // width: '100%',
  },
  modalActions: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
  },
  modalText: {
    marginBottom: 10,
    textAlign: 'center',
    color: COLORS.white,
    fontSize: 30,
    fontFamily: FONT.videogame,
    lineHeight: 35,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'rgb(69, 73, 78)',
    borderRadius: 5,
    borderColor: 'white',
    bordedrStyle: 'solid',
    borderWidth: 2,
    paddingVertical: 50,
    paddingHorizontal: 25,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '88%',
    maxWidth: 500,
  },
  videoGameBtn: {
    lineHeight: 16,
    height: 40,
    textAlign: 'center',
    display: 'inline-block',
    width: 40,
    borderRadius: 100,
    backgroundColor: 'red',
    margin: 5,
    backgroundColor: 'red',
    paddingLeft: 5,
  },
});

export default styles;
