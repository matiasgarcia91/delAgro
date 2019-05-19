import { StyleSheet } from 'react-native';

import { colors, global } from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.creamBackground,
    maxHeight: 80,
    paddingHorizontal: 10,
  },
  textContainer: {
    height: 65,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 10,
  },
  buttonContainer: {
    justifyContent: 'flex-start',
    marginTop: 12,
    alignItems: 'flex-end',
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
    color: colors.darkGreen,
  },
  border: {
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: colors.lightGrey,
  },
});
