import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../../constants';

const styles = StyleSheet.create({
  groupDetailsWrapper: {
    backgroundColor: COLORS.white,
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: 1,
  },
  groupHeader: {
    flex: 1,
    // justifyContent: "center",
    alignItems: 'center',
    width: '100%',
  },
  memberListContainer: {
    width: '100%',
    flexDirection: 'row',
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
