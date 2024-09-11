import { StyleSheet } from 'react-native';
import { COLORS, FONT } from '../../../constants';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, .5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'rgb(69, 73, 78)',
    borderRadius: 5,
    borderColor: 'white',
    bordedrStyle: 'solid',
    borderWidth: 2,
    paddingVertical: 35,
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
  button: {
    borderRadius: 2,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: 'red',
  },
  currentSelectedGame: {
    textShadowColor: 'black',
    textShadowOffset: {
      height: 1,
      width: -1,
    },
    backgroundColor: 'green',
    textShadowRadius: 4,
  },
  gameNameInput: {
    width: '100%',
    color: COLORS.white,
    borderStyle: 'solid',
    borderColor: COLORS.white,
    borderWidth: 2,
    paddingVertical: 8,
    paddingHorizontal: 5,
  },
  gameSelectBtn: {
    backgroundColor: 'green',
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
    marginBottom: 25,
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontFamily: FONT.videogame,
    lineHeight: 25,
  },
  previousGamesList: {
    height: 300,
    // height: 232,
    width: '100%',
    backgroundColor: 'black',
    borderStyle: 'solid',
    borderColor: 'white',
    borderWidth: 1,
  },
  previousGamesListShortened: {
    height: 'auto',
  },
  previousGamesListGameName: {
    color: 'white',
    fontSize: 18,
    fontFamily: FONT.bold,
    textTransform: 'uppercase',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  textStyle: {
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: FONT.btnFont,
    fontSize: 18,
    textShadowColor: 'maroon',
    textShadowOffset: {
      height: -1,
      width: -1,
    },
    textShadowRadius: 1,
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
    // backgroundImage: 'linear-gradient(left top, pink 3%, red 22%, maroon 99%)',
    paddingLeft: 5,
  },
});

export default styles;
