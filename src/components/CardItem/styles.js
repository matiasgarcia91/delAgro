import { StyleSheet } from 'react-native';

import { colors } from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: 450,
    justifyContent: 'flex-start',
    backgroundColor: colors.creamBackground,
    paddingTop: 15,
  },
  videoContainer: {
    height: 345,
    marginHorizontal: 10,
  },
  footer: {
    flex: 1,
  },
});
