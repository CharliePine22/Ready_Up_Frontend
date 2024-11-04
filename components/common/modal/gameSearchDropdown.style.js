import { StyleSheet } from 'react-native';
import { COLORS, FONT } from '../../../constants';

const styles = StyleSheet.create({
  gameSearchDropdownWrapper: {
    height: 180,
    width: '100%',
    backgroundColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: COLORS.white,
    position: 'absolute',
    top: 100,
    left: 0,
    zIndex: 2,
  },
});
export default styles;
