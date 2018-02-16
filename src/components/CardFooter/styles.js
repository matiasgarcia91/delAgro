import { StyleSheet } from 'react-native';

import { colors, global } from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.creamBackground,
    paddingBottom: 5,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 10,
    paddingVertical: 5,
  },
  buttonContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  countText: {
    fontSize: global.midFontSize,
    flex: 1,
    fontWeight: 'bold',
    color: colors.darkGreen,
  },
  weightText: {
    color: colors.darkGreen,
    fontSize: global.midFontSize,
    flex: 1,
  },
  priceText: {
    fontSize: global.midFontSize,
    fontWeight: 'bold',
    flex: 1,
    color: colors.lightGreen,
  },
});
