import { StyleSheet } from 'react-native';

import { colors } from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.creamBackground,
  },
  logoContainer: {

    marginTop: 40,
    marginBottom: 40,
    flex: 1,
         flexDirection: 'column',
         justifyContent: 'center',
         alignItems: 'center',
         width: 100,
         height: 100,
     paddingLeft:260,
         resizeMode: 'contain',


  },
  formContainer: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    marginBottom: 40,
  },
  titleText: {
    marginTop: -40,
    marginBottom: 30,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.darkGreen,
  },
});
