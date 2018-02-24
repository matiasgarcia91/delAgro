import { StyleSheet } from 'react-native';

import { colors } from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.creamBackground,
  },
  logoContainer: {
    flex: 1,
    marginTop: -40,
  },
  formContainer: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    marginBottom: 40,
  },
  titleText: {
    marginTop: -40,
    marginBottom: 30,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.darkGreen,
  },
});
