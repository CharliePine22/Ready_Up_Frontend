import { StyleSheet } from 'react-native';
import { COLORS, FONT } from '../../../constants';

const styles = StyleSheet.create({
  gameName: {
    color: COLORS.white,
    fontSize: 22,
    fontFamily: FONT.header,
    marginBottom: 6,
    fontWeight: 500,
    letterSpacing: 0.6,
  },
  genreItem: {
    height: '100%',
  },
  genreItemSeperator: {
    height: '100%',
    width: 1,
    backgroundColor: COLORS.white,
    marginHorizontal: 5,
  },
  genreName: {
    color: 'lightgrey',
    fontStyle: 'italic',
    fontSize: 12,
  },
  searchedItemGameInfo: {
    height: '100%',
    justifyContent: 'center',
  },
  searchResultsItemCover: {
    height: '100%',
    width: 60,
    marginRight: 10,
    zIndex: 2,
  },
  searchResultsWrapper: {
    width: '100%',
    height: 250,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  searchResultItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 5,
    borderBottomColor: 'white',
    borderBottomStyle: 'solid',
    borderBottomWidth: 2,
    height: 90,
  },
  searchResultsContainer: {
    width: '100%',
  },
});

export default styles;
