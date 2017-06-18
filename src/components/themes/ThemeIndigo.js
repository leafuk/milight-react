import {
  indigo700, indigo500, indigo100,
  pinkA200, grey900, grey600, grey400,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';

export default {
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: '#15182D',
    primary2Color: indigo700,
    primary3Color: indigo100,
    accent1Color: pinkA200,
    accent2Color: grey400,
    accent3Color: grey600,
    textColor: grey900,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey400,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: '#15182D',
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
};
