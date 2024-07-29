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
    top: 20,
  },
  gameCaseContainer: {
    height: 220,
    // backgroundColor: 'white',
    width: 160,
    border: '2px dotted black',
    borderRadius: 5,
  },
  groupDetailsWrapper: {
    backgroundColor: '#36454F',
    position: 'absolute',
    top: 3,
    height: '100%',
    width: '100%',
    zIndex: 1,
    overflowY: 'auto',
  },
  gamesListGameName: {
    color: COLORS.white,
    fontFamily: FONT.base,
    marginVertical: 5,
    height: 20,
  },
  gamesPlayedListWrapper: {
    width: 'auto',
    maxHeight: 320,
    backgroundColor: 'black',
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  groupHeader: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    marginTop: 60,
  },
  groupName: {
    fontFamily: FONT.videogame,
    fontSize: 60,
    color: COLORS.white,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -3, height: 4 },
    textShadowRadius: 2,
  },
  headerFont: {
    fontFamily: FONT.header,
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: { width: -1, height: 2 },
    textShadowRadius: 2,
    marginTop: 12,
  },
  memberListContainer: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 10,
  },
  memberList: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default styles;
