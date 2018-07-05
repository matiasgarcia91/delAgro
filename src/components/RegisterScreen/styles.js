import { StyleSheet } from 'react-native';

import { colors } from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.creamBackground,
  },
  logoContainer: {
    marginBottom: 60,
    height: 80,
    flex: 1,
    justifyContent: 'flex-end',
  },
  formContainer: {
    flex: 5,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    marginBottom: 40,
  },
  titleText: {
    marginTop: -40,
    marginBottom: 20,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.darkGreen,
  },
  icon: {
    width: 50,
    height: 30,
    marginTop: 35,
    marginLeft: 25,
    flex: 1,
  },
  arrow: {
    color: colors.navButtonGreen,
  },
});
