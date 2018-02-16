import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import DrawerHomeNavigator from '../navigation/DrawerHomeNavigator';

class DrawerRootContainer extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <DrawerHomeNavigator />
      </View>
    );
  }
}

export default connect(null)(DrawerRootContainer);
