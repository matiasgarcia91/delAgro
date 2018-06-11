import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export default StyleSheet.create({
  bar: {
    backgroundColor: colors.creamBackground,
    flexDirection: 'row',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: colors.lightGrey,
  },
  clearFilters: {
    backgroundColor: colors.lightGreen,
    borderWidth: 0,
    marginBottom: 0,
    alignSelf: 'center',
    height: 30,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    flexDirection: 'row',
    marginLeft: 40,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: global.buttonFontSize,
    color: colors.white,
  },
  text: {
    fontSize: 20,
    fontWeight: '400',
  },
});
