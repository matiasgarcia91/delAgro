import { StyleSheet } from 'react-native';

import { colors, global } from '../../styles';

export default StyleSheet.create({
  mainButton: {
    backgroundColor: colors.lightGreen,
    borderWidth: 0,
    marginBottom: 0,
    alignSelf: 'center',
    height: 40,
    width: 143,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: global.baseBorderRadius,
    flexDirection: 'row',
  },
  text: {
    textAlign: 'center',
    fontSize: global.buttonFontSize,
    color: colors.white,
  },
});
