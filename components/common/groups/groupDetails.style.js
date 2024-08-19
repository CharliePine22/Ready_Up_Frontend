import { StyleSheet } from 'react-native';
import { COLORS, FONT } from '../../../constants';

const styles = StyleSheet.create({
  baseFont: {
    fontFamily: FONT.base,
    fontSize: 18,
    fontWeight: 500,
  },
  closeGroupBtn: {
    position: 'absolute',
    left: 15,
    top: 12,
  },
  gameCaseContainer: {
    height: 250,
    backgroundColor: 'rgba(0,0,0,.4)',
    width: 165,
    justifyContent: 'center',
    borderColor: COLORS.white,
    borderWidth: 2,
    borderRadius: 5,
    marginTop: 5,
    marginRight: 6,
    alignItems: 'center',
  },
  gameCaseCover: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  gameMessage: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 600,
    textAlign: 'center',
    fontFamily: FONT.bold,
    paddingHorizontal: 5,
  },
  gameSelectionActions: {
    width: '100%',
    alignItems: 'center',
    marginTop: 25,
  },
  gameSelectionBtn: {
    textAlign: 'center',
    display: 'inline-block',
    margin: 5,
    paddingVertical: 12,
    paddingLeft: 5,
    backgroundColor: 'lightgray',
    textShadowColor: 'black',
    textShadowOffset: {
      height: -1,
      width: -1,
    },
    textShadowRadius: 0,
    width: '80%',
    maxWidth: 200,
    borderRadius: 7,
    shadowColor: 'gray',
    shadowOpacity: 1,
    shadowOffset: {
      height: 5,
      width: 0,
    },
    shadowRadius: 0,
    cursor: 'pointer',
    marginBottom: 15,
  },
  gameSelectionBtnPressed: {
    shadowOpacity: 0,
    top: 2,
  },
  gameSelectionBtnText: {
    fontFamily: FONT.btnFont,
    fontWeight: 900,
    textAlign: 'center',
    fontSize: 13,
    textShadowColor: 'white',
    textShadowOffset: {
      height: 1,
      width: 1,
    },
    textShadowRadius: 0,
    color: 'gray',
  },
  gameSelectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 25,
  },
  gameSelectionDetails: {
    flex: 1,
    alignItems: 'center',
    maxWidth: '53%',
    justifyContent: 'space-around',
    // paddingVertical: 10,
  },
  gameSelectionHeader: {
    alignItems: 'center',
  },
  gamesListGameName: {
    color: COLORS.white,
    fontFamily: FONT.base,
    marginVertical: 10,
    height: 20,
    fontSize: 16,
    fontWeight: 500,
  },
  gamesPlayedListWrapper: {
    width: '80%',
    minHeight: 200,
    maxHeight: 320,
    maxWidth: 420,
    backgroundColor: 'black',
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  groupBodyWrapper: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  groupDetailsWrapper: {
    backgroundColor: '#36454F',
    position: 'absolute',
    top: 3,
    height: '100%',
    width: '100%',
    zIndex: 1,
  },
  groupHeader: {
    alignItems: 'center',
    width: '100%',
    marginTop: 60,
    flexDirection: 'column',
  },
  groupName: {
    fontFamily: FONT.videogame,
    fontSize: 60,
    color: COLORS.white,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -3, height: 4 },
    textShadowRadius: 2,
    marginBottom: 10,
  },
  headerFont: {
    fontFamily: FONT.header,
    fontSize: 45,
    color: COLORS.white,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: { width: -1, height: 2 },
    textShadowRadius: 2,
    marginTop: 15,
  },
  headerFontContainer: {
    borderBottomWidth: 2,
    borderBottomStyle: 'solid',
    borderColor: COLORS.white,
    marginBottom: 10,
    width: 'fit-content',
  },
  memberListContainer: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 25,
    maxWidth: 550,
  },
  memberList: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 'max-content',
  },
});

export default styles;
