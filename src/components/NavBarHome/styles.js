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
    height: 80,
  },
  icon: {
    alignSelf: 'flex-start',
    width: 50,
    height: 50,
    marginTop: 12,
    flex: 1,
  },
  menuIcon: {
    paddingLeft: 20,
    color: colors.navButtonGreen,
  },
  iconn: {
    color: colors.navButtonGreen,
  },
  filter: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    marginTop: 15,
    flex: 1,
    paddingLeft: 20,
    marginLeft: 30,
  },
  upload: {
    alignSelf: 'flex-start',
    resizeMode: 'contain',
    width: 50,
    height: 50,
    marginTop: 15,
    flex: 1,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    marginLeft: 70,
    marginTop: 1,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
