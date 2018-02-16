import { StyleSheet } from 'react-native';

import { colors } from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.creamBackground,
  },
  formContainer: {
    flex: 5,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    marginBottom: 50,
    marginTop: 30,
  },
  bigButton: {
    marginTop: 50,
    padding: 10,
    width: 150,
    height: 45,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.darkGreen,
    marginBottom: 20,
  },
  logoContainer: {
    marginTop: 60,
    flex: 1,
    justifyContent: 'flex-end',
  },
});
