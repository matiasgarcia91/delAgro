import { connect } from 'react-redux';

import DetailsScreen from '../components/DetailsScreen';
import { getStaticData } from '../reducers/lots';
import filters from '../helpers/filterStaticData';

function mapStateToProps({ lots: { categories, breeds, selected } }) {
  const { breed_id, category_id } = selected;
  const breed = breed_id ? filters.findBreed(breed_id, breeds) : '';
  const category = category_id ? filters.findCategory(category_id, categories) : '';
  return { category, breed, selected };
}

export default connect(mapStateToProps, { getStaticData })(DetailsScreen);
