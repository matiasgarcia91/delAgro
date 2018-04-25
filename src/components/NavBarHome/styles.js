import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export default StyleSheet.create({
  bar: {
    backgroundColor: colors.creamBackground,
    flex: 1,
    flexDirection: 'row',
    paddingTop: 30,
    paddingBottom: 20,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: colors.lightGrey,
    elevation: 1,
    shadowColor: colors.darkGreen,
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  icon: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: 100,
    flex: 1,
    marginHorizontal: 8,
  },
  ghost: {
    alignSelf: 'center',
    width: 100,
    flex: 1,
    marginHorizontal: 8,
  },
});
