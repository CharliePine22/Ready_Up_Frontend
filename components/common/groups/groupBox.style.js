import { StyleSheet } from 'react-native';
import { FONT, SIZES, COLORS } from '../../../constants';

const styles = StyleSheet.create({
  groupBoxWrapper: {
    display: 'flex',
    width: '100%',
    backgroundColor: COLORS.white,
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderBottomColor: 'black',
    borderTopColor: 'black',
    borderStyle: 'solid',
    borderWidth: 2,
    marginBottom: 10,
    boxShadow: '0px 3px 3px rgba(0,0,0,.6)',
  },
  groupName: {
    fontSize: 26,
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
    marginTop: 1,
  },
  readyCount: {
    fontSize: FONT.large,
    fontWeight: 900,
    marginLeft: 3,
    marginTop: 1,
  },
});

export default styles;
