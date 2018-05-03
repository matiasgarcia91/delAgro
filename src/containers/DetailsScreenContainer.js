import { connect } from 'react-redux';

import DetailsScreen from '../components/DetailsScreen';
import { getStaticData } from '../reducers/lots';

function mapStateToProps({ lots: { selected } }) {
  const { breed, category } = selected;
  return { category: category.name, breed: breed.name, selected };
}

export default connect(mapStateToProps, { getStaticData })(DetailsScreen);
