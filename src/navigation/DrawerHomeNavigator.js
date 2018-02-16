import { DrawerNavigator } from 'react-navigation';

import Home from '../components/HomeScreen';
import Camera from '../components/CameraScreen';

const DrawerHomeNavigator = DrawerNavigator({
  Home: { screen: Home },
  Camera: { screen: Camera },
});

export default DrawerHomeNavigator;
