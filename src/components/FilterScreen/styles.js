import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 8,
    backgroundColor: colors.creamBackground,
  },
  formContainer: {
    flex: 5,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    marginBottom: 50,
    marginTop: 25,
  },
  bigButton: {
    marginTop: 30,
    padding: 10,
    width: 150,
    height: 45,
  },
  titleText: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.darkGreen,
    marginTop: 25,
  },
  priceContainer: {
    flexDirection: 'row',
    marginHorizontal: 40,
    justifyContent: 'space-between',
  },
  priceText: {
    paddingTop: 32,
  },
});
