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
    marginTop: 20,
    paddingTop: 20,
  },
  logoContainer: {
    marginTop: 60,
    flex: 1,
    justifyContent: 'flex-end',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  titleText: {
    fontSize: 22,
    color: '#ff4611',
    marginBottom: 10,
    marginTop: 40,
  },
  bigButton: {
    marginTop: 50,
    padding: 10,
    width: 250,
    height: 50,
  },
});
