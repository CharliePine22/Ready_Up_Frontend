import { StyleSheet } from 'react-native';

import { FONT, SIZES, COLORS } from '../../../constants';

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'green',
  },
  container: {
    // marginTop: SIZES.medium,
    flex: 1,
    marginHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    position: 'relative',
  },
  inputIcon: {
    position: 'absolute',
    right: 40,
    top: 33,
  },
  textInput: {
    paddingVertical: SIZES.large,
    paddingHorizontal: 30,
    backgroundColor: 'rgba(0,0,0,.6)',
    marginVertical: 14,
    borderRadius: 50,
    color: COLORS.white,
    borderColor: COLORS.white,
    borderWidth: 1,
    borderStyle: 'solid',
    fontSize: SIZES.medium,
    fontFamily: FONT.bold,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
  },
});

export default styles;
