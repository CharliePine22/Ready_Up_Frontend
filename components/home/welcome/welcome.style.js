import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginHorizontal: 0,
    marginBottom: 10,
  },
  userName: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.secondary,
  },
  appName: {
    fontFamily: FONT.videogame,
    fontSize: 66,
    color: COLORS.white,
    textAlign: 'center',
    textShadowColor: COLORS.gaming,
    textShadowOffset: { width: 2, height: 3 },
    textShadowRadius: 1,
  },
  welcomeMessage: {
    fontFamily: FONT.bold,
    fontWeight: '900',
    fontSize: SIZES.large,
    color: COLORS.white,
    marginTop: 20,
    textAlign: 'center',
    textShadowColor: COLORS.gaming,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
  },
  welcomeBtn: {
    padding: 12,
    marginTop: 15,
    marginBottom: 18,
    marginHorizontal: 30,
    textAlign: 'center',
    color: COLORS.white,
    backgroundColor: COLORS.gaming,
    borderRadius: 3,
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.7,
  },
  welcomeBtnText: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: FONT.regular,
    fontSize: 22,
    textShadowColor: 'rgba(0, 0, 0, 0.9)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
  },
  searchContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: SIZES.large,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginRight: SIZES.small,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.medium,
    height: '100%',
  },
  searchInput: {
    fontFamily: FONT.regular,
    width: '100%',
    height: '100%',
    paddingHorizontal: SIZES.medium,
  },
  searchBtn: {
    width: 50,
    height: '100%',
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBtnImage: {
    width: '50%',
    height: '50%',
    tintColor: COLORS.white,
  },
  tabsContainer: {
    width: '100%',
    marginTop: SIZES.medium,
  },
  tab: (activeJobType, item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
  tabText: (activeJobType, item) => ({
    fontFamily: FONT.medium,
    color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
});

export default styles;
