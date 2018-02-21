import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export default StyleSheet.create({
  bar: {
    backgroundColor: colors.creamBackground,
    height: 80,
    flexDirection: 'row',
    paddingTop: 40,
    paddingBottom: 20,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: colors.lightGrey,
    elevation: 1,
    shadowColor: colors.darkGreen,
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  sideButtons: {
    marginLeft: 20,
    fontSize: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.darkGreen,
  },
});
