import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.creamBackground,
  },
  logoContainer: {
    flex: 3.7,
  },
  logo: {
    alignSelf: 'center',
    resizeMode: 'contain',
    flex: 1,
  },
  logoBottomContainer: {
    flex: 1.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoBottom: {
    alignSelf: 'center',
    resizeMode: 'contain',
    flex: 0.55,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    marginBottom: 10,
    marginTop: 40,
    fontSize:30,
    flex:1,
    justifyContent: 'flex-start',
    alignItems: 'center'

  },
  formContainer: {
    flex: 3.8,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    marginBottom: -30,
    zIndex: 2,
  },
  bigButton: {
    flexDirection: 'row',
    marginBottom: 15,
    width: '70%',
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: colors.transparent,
  },
  bigButtonText: {
    color: colors.black,
    fontSize: 17,
  },
  text: {
    fontSize: 17,
    fontWeight: '500',
    color: colors.darkGreen,
  },
  logoCowsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flex: 2.5,
  },
  logoCows: {
    alignSelf: 'center',
    resizeMode: 'contain',
    flex: 1,
  },
});
