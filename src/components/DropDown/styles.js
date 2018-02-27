import { StyleSheet } from 'react-native';

import { colors, global } from '../../styles';

export default StyleSheet.create({
  container: {
    height: 70,
    padding: 5,
    marginHorizontal: 40,
    marginBottom: 10,
  },
  selectedText: {
    borderRadius: global.baseBorderRadius,
    backgroundColor: colors.white,
    height: 35,
    borderWidth: 1,
    borderColor: colors.darkGreen,
    paddingLeft: 10,
    paddingTop: 8,
  },
  label: {
    marginBottom: 5,
  },
});

export { colors };
