import { connect } from 'react-redux';
import { changeVisibleItemsChange } from '../actions/homeScreen';

import HomeScreen from '../components/HomeScreen';

export default connect(null, { changeVisibleItemsChange })(HomeScreen);
