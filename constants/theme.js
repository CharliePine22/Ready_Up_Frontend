const COLORS = {
  primary: '#26bcff',
  secondary: '#444262',
  tertiary: '#FF7754',
  gaming: '#22518c',
  gray: '#83829A',
  gray2: '#C1C0C8',
  white: '#F3F4F8',
  lightWhite: '#FAFAFC',
  transparent: '#000000',
};

const FONT = {
  regular: 'GaliverSans',
  // regular: "DMRegular",
  medium: 'DMSans-Medium',
  bold: 'DMSans-Bold',
  videogame: 'Pdark',
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
