import { StyleSheet } from 'react-native';
import { FONT, SIZES, COLORS } from '../../constants';

const styles = StyleSheet.create({
  dashWrapper: {
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: '#36454F',
  },
  mainContainer: {
    marginHorizontal: 6,
    // height: '100%',
    flex: 1,
  },
  groupListContainer: {
    marginTop: 20,
    height: '100%',
  },
});

export default styles;
