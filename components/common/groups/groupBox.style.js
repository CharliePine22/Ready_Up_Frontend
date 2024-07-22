import { StyleSheet } from 'react-native';
import { FONT, SIZES, COLORS } from '../../../constants';

const styles = StyleSheet.create({
  groupBoxWrapper: {
    display: 'flex',
    width: '100%',
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderBottomColor: 'black',
    borderTopColor: 'black',
    borderStyle: 'solid',
    borderWidth: 2,
    boxShadow: '0px 3px 3px rgba(0,0,0,.6)',
  },
  groupBannerImage: {
    flex: 1,
    justifyContent: 'center',
    // height: 100,
    // width: 500,
    height: '100%',
    width: '100%',
  },
  groupName: {
    fontSize: 30,
    fontFamily: FONT.regular,
    color: COLORS.white,
  },
  innerGroupBox: {
    flexDirection: 'row',
  },
  lowerSection: {
    marginTop: 30,
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
    color: COLORS.white,
  },
  readyCount: {
    fontSize: FONT.large,
    fontWeight: 900,
    marginLeft: 3,
    marginTop: 1,
    color: COLORS.white,
  },
});

export default styles;
