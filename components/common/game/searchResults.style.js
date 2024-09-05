import { StyleSheet } from 'react-native';
import { COLORS, FONT } from '../../../constants';

const styles = StyleSheet.create({
  searchResultsWrapper: {
    width: '100%',
    height: 250,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchResultItem: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default styles;
