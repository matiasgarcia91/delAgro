import { StyleSheet } from 'react-native';

import { colors } from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.creamBackground,
    height: 420,
    borderBottomWidth: 2,
    borderBottomColor: colors.lightGrey,
    justifyContent: 'flex-start',
  },
  videoContainer: {
    flex: 4,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
    width: 350,
    flex: 1,
  },
  footer: {
    flex: 1,
  },
});
