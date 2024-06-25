import { StyleSheet } from 'react-native';
import { FONT, SIZES, COLORS } from '../../../constants';

const styles = StyleSheet.create({
  groupBoxWrapper: {
    display: 'flex',
    width: '100%',
    backgroundColor: COLORS.white,
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderBottomColor: 'black',
    borderTopColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  groupName: {
    fontSize: SIZES.xLarge,
    fontFamily: FONT.regular,
  },
  innerGroupBox: {
    flexDirection: 'row',
  },
  memberCountContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  memberCount: {
    fontSize: FONT.large,
    fontWeight: 900,
    marginLeft: 3,
    marginTop: 2,
  },
});

export default styles;
