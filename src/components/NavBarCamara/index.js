import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text, Alert } from 'react-native';
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

  onPressCancel = () => {
    const { video } = this.props;
    const noVideoLoaded =  video === null;
    if (noVideoLoaded){
      this.navigateBack();
    } else {
      Alert.alert(
        '',
        '¿Está seguro que desea salir?',
        [
          { text: 'Aceptar', onPress: this.navigateBack },
          { text: 'Cancelar', onPress: () => null, style: 'cancel' },
        ],
        { cancelable: true }
      );
    }
  }

  render() {
    const {title, onNextPress, video} = this.props;
    const noVideoLoaded =  video === null;
    return (
      <View style={styles.bar} >
        <TouchableOpacity onPress={this.onPressCancel}>
          <Text style={styles.sideButtons}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
        <TouchableOpacity disabled={noVideoLoaded} onPress={onNextPress || this.navigate}>
          <Text style={[styles.sideButtons, noVideoLoaded ? { opacity: 0.5 } : null]}>Siguiente</Text>
        </TouchableOpacity>
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
