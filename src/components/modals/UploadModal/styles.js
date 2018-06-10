import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.creamBackground,
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    height: 400,
    marginHorizontal: 40
  },
  sideButtons: {
    color: '#2C5D3D',
    fontSize: 18
  },
  title: {
  },
  lineStyle:{
        borderWidth: 0.5,
        borderColor:'black',
        margin:10,
    }
});
