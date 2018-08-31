import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableHighlight, Text } from 'react-native';
import { NavigationActions } from 'react-navigation';

import styles from './styles';

export default class NavBarCamara extends PureComponent {
  navigate = () => {
    const navigateToDetails = NavigationActions.navigate({
      routeName: 'Publish',
      params: { video: this.props.video },
    });
    this.props.navigation.dispatch(navigateToDetails);
  };

  navigateBack = () => {
    const navigateHome = NavigationActions.navigate({
      routeName: 'HomeIn',
    });
    this.props.navigation.dispatch(navigateHome);
  }

  render() {
    const {title, onNextPress} = this.props;
    return (
      <View style={styles.bar} >
        <TouchableHighlight onPress={this.navigateBack}>
          <Text style={styles.sideButtons}>Cancelar</Text>
        </TouchableHighlight>
        <TouchableHighlight>
          <Text style={styles.title}>{title}</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={onNextPress || this.navigate}>
          <Text style={styles.sideButtons}>Siguiente</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

NavBarCamara.propTypes = {
  navigation: PropTypes.shape(),
  video: PropTypes.string,
};

NavBarCamara.defaultProps = {
  navigation: {},
  video: '',
};
