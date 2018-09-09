import { StyleSheet } from 'react-native';
import { colors } from '../../../styles';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.creamBackground,
    padding: 22,
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    height: 400,
    marginHorizontal: 40,
  },
  greenText: {
    color: '#2C5D3D',
    fontSize: 18,
  },
  mail: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 6,
  },
  contactItem: {
    marginVertical: 6,
  },
  phone: {
    marginTop: 3,
    fontWeight: 'bold',
  },
});
