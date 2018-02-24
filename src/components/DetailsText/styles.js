import { StyleSheet } from 'react-native';

import { colors } from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.creamBackground,
    justifyContent: 'flex-start',
  },
  textContainer: {
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  caption: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  text: {
    fontSize: 12,
  },
});
