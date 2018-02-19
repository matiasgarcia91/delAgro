import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import AppWithNavigationState from '../navigation/AppNavigator';

class RootContainer extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" />
        <AppWithNavigationState />
      </View>
    );
  }
}

export default connect(null)(RootContainer);
