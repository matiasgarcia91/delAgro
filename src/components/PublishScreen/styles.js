import { StyleSheet } from 'react-native';

import { colors } from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.creamBackground,
  },
  formContainer: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    marginBottom: 40,
    paddingTop: 22,
  },
});
