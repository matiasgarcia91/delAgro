import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export default StyleSheet.create({
  bar: {
    backgroundColor: colors.creamBackground,
    flex: 1,
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 15,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: colors.lightGrey,
    elevation: 1,
    shadowColor: colors.darkGreen,
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  icon: {
    alignSelf: 'flex-start',
    resizeMode: 'contain',
    width: 100,
    height: 50,
    marginTop: 15,
    flex: 1,
    paddingLeft: 20,
    marginRight: 30,
  },
  filter: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    marginTop: 15,
    flex: 1,
    paddingLeft: 20,
    marginLeft: 30,
  },
  upload: {
    alignSelf: 'flex-start',
    resizeMode: 'contain',
    width: 50,
    height: 50,
    marginTop: 15,
    flex: 1,
  //  paddingLeft: 20,
  //  marginLeft: 30,
  },
  logoContainer: {
    flex: 1,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    alignSelf: 'center',
    justifyContent:'center'
  },
  ghost: {
    alignSelf: 'center',
    width: 100,
    flex: 1,
    marginHorizontal: 8,
  },
  imageText: {
    flex:1,
    flexDirection: 'column',
    width:100,
    justifyContent:'center',
    fontSize: 6,

  }
});
