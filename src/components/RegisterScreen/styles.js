import { StyleSheet } from 'react-native';

import { colors } from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.creamBackground,
  },
  logoContainer: {
    marginTop: 50,
    marginBottom: 60,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    paddingLeft: 290,
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
});
