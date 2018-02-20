import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 8,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  footer: {
    flex: 2,
    backgroundColor: colors.creamBackground,
    flexDirection: 'row',
  },
  captureButton: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#d11427',
    borderRadius: 70,
  },
  rec: {
    width: 10,
    height: 10,
    backgroundColor: '#d11427',
    borderRadius: 10,
    marginTop: 8,
    marginRight: 12,
  },
  galleryButton: {
    height: 70,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainers: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
});
