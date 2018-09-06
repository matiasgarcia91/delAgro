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
    alignItems: 'flex-start',
    paddingLeft: 15,
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  caption: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  row: {
    flexDirection: 'row',
    marginVertical: 3,
  },
  text: {
    fontSize: 15,
    marginLeft: 5,
    flex: 1,
  },
  button: {
    width: 150,
  },
});
