import React, { PureComponent } from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import NavBarBack from '../../components/NavBarBack';
import CardItem from '../CardItem';
import DetailsText from '../DetailsText';
import ContactModal from '../ContactModal';

export default class DetailsScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modalVisble: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    const { modalVisble } = this.state;
    this.setState({ modalVisble: !modalVisble });
  }
  render() {
    const { selected, breed, category } = this.props;
    const { modalVisble } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <ContactModal isVisible={modalVisble} toggleModal={this.toggleModal} />
        <View style={{ flex: 1 }}>
          <NavBarBack navigation={this.props.navigation} />
        </View>
        <View style={{ flex: 8 }}>
          <ScrollView>
            <CardItem lot={selected} category={category} details />
            <DetailsText lot={selected} category={category} breed={breed} toggleModal={this.toggleModal} />
          </ScrollView>
        </View>
      </View>
    );
  }
}

DetailsScreen.propTypes = {
  navigation: PropTypes.shape().isRequired,
  selected: PropTypes.shape(),
  breed: PropTypes.string,
  category: PropTypes.string,
};

DetailsScreen.defaultProps = {
  selected: null,
  breed: '',
  category: '',
};
