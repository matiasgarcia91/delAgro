import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export default StyleSheet.create({
  bar: {
    backgroundColor: colors.creamBackground,
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 15,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: colors.lightGrey,
    elevation: 1,
    shadowColor: colors.darkGreen,
    shadowOpacity: 1,
    shadowRadius: 4,
    height: 75,
    alignItems: 'center',
  },
  sideButtons: {
    marginLeft: 20,
  },
  title: {
    marginTop: 12,
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.darkGreen,
  },
  icon: {
    alignSelf: 'flex-start',
    width: 50,
    height: 50,
    marginTop: 12,
    flex: 1,
  },
  backButton: {
    paddingLeft: 20,
    color: colors.navButtonGreen,
  },
});
