import { StyleSheet } from 'react-native';
import { COLORS, FONT } from '../../../constants';

const styles = StyleSheet.create({
  gameName: {
    color: COLORS.white,
    fontSize: 22,
    fontFamily: FONT.header,
    fontWeight: 500,
    letterSpacing: 0.6,
  },
  genreItem: {
    height: '100%',
  },
  genreInfo: {
    display: 'flex',
    flexDirection: 'row',
    // alignItems: 'center',
  },
  genreList: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
  },
  genreName: {
    color: 'lightgrey',
    fontStyle: 'italic',
    fontSize: 12,
    display: 'flex',
    maxWidth: 'fit-content',
    // flex: 1,
    flexWrap: 'wrap',
    marginRight: 10,
  },
  multiplayerModes: {
    display: 'flex',
    flexDirection: 'column',
  },
  searchedItemGameInfo: {
    height: '100%',
    justifyContent: 'center',
    marginLeft: 10,
    flex: 1,
  },
  searchResultsItemCover: {
    height: '100%',
    width: 70,
    zIndex: 2,
  },
  searchResultsWrapper: {
    width: '100%',
    height: 300,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  searchResultItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'white',
    borderBottomStyle: 'solid',
    borderBottomWidth: 2,
    height: 100,
  },
  searchResultsContainer: {
    width: '100%',
  },
  steamIcon: {
    top: -1,
    marginLeft: 5,
  },
});

export default styles;
