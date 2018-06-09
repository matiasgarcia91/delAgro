import { StyleSheet } from 'react-native';

import { colors } from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.creamBackground,
  },
  formContainer: {
    flex: 5,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    marginBottom: 50,
    marginTop: 20,
    paddingTop: 20,
  },
  logoContainer: {
    marginTop: 30,
    flex: 1,
    justifyContent: 'flex-end',
  },
  logoBottomContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom:40,
    width:350,
    height:200
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  titleText: {
    marginBottom: 10,
    marginTop: 40,
    fontSize:30,
    flex:1,
    justifyContent: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center'

  },
  bigButton: {
    marginTop: 50,
    padding: 10,
    width: 250,
    height: 50,
  },
});
