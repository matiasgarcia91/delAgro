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
    marginTop: 40,
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
    height: 50,
    alignItems:'center',
    justifyContent: 'center',
    position: "absolute",
  },
  arrow: {
    color: colors.navButtonGreen,
  },
});
