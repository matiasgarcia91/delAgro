import { StyleSheet } from 'react-native';

import { colors, global } from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.creamBackground,
    paddingTop: 10,
    maxHeight: 65,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 15,
  },
  favContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingRight: 25,
    flex: 1,
  },
  favStar: {
    height: 38,
    width: 38,
    marginRight: 4,
  },
  favText: {
    fontSize: 10,
    marginTop: 3,
    marginRight: 3,
  },
  countText: {
    fontSize: global.midFontSize,
    fontWeight: 'bold',
    color: colors.darkGreen,
  },
  priceText: {
    fontSize: global.midFontSize,
    fontWeight: 'bold',
    color: colors.darkGreen,
    marginTop: 1,
  },
});
