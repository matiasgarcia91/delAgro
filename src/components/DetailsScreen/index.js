import React, { PureComponent } from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import NavBarBack from '../../components/NavBarBack';
import CardItem from '../CardItem';
import DetailsText from '../DetailsText';
import ContactModal from '../../containers/ContactModal';
import FullScreenVideo from '../VideoPlayer/FullScreenVideo';

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
    const { selected, breed, navigation } = this.props;
    const { params } = navigation.state;
    const landscape = params ? params.fullScreen : false;
    const videoFullScreen = params && params.videofs ? params.videofs : false;
    const { modalVisble } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <ContactModal isVisible={modalVisble} toggleModal={this.toggleModal} />
        { !videoFullScreen && <NavBarBack navigation={this.props.navigation} title={'Detalles'} /> }
        { videoFullScreen && <FullScreenVideo uri={videoFullScreen} navigation={navigation} /> }
        <View style={{ flex: 8 }}>
          <ScrollView>
            <CardItem lot={selected} details navigation={navigation} />
            <DetailsText
              lot={selected}
              breed={breed}
              toggleModal={this.toggleModal}
            />
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
};

DetailsScreen.defaultProps = {
  selected: null,
  breed: '',
  category: '',
};
