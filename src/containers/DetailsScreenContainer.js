import { connect } from 'react-redux';

import DetailsScreen from '../components/DetailsScreen';

function mapStateToProps({ lots: { selected } }) {
  const { breed, category } = selected;
  return { category: category.name, breed: breed.name, selected };
}

export default connect(mapStateToProps, {})(DetailsScreen);
