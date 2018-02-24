import { StyleSheet } from 'react-native';

import { colors } from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: 450,
    justifyContent: 'flex-start',
    backgroundColor: colors.creamBackground,
  },
  videoContainer: {
    marginTop: 15,
    marginBottom: 10,
    marginLeft: 15,
    height: 345,
    width: 345,
  },
  footer: {
    flex: 1,
  },
});
