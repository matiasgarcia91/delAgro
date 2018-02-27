import { StyleSheet } from 'react-native';

import { colors, global } from '../../styles';

export default StyleSheet.create({
  container: {
    height: 70,
    padding: 5,
    marginBottom: 15,
    marginHorizontal: 40,
  },
  textInput: {
    borderRadius: global.baseBorderRadius,
    backgroundColor: colors.white,
    height: 35,
    borderWidth: 1,
    borderColor: colors.darkGreen,
    paddingLeft: 10,
  },
  label: {
    marginBottom: 5,
  },
});

export { colors };
