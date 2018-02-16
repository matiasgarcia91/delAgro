import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function MainButton({ onPress, title, style, icon, disabled }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
    >
      <View style={[styles.mainButton, style]}>
        <View style={{ flex: 3, alignItems: icon.length ? 'flex-start' : 'center' }}>
          <Text style={styles.text}>{ title }</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

MainButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  style: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]),
  icon: PropTypes.string,
  disabled: PropTypes.bool,
};

MainButton.defaultProps = {
  style: 0,
  icon: '',
  disabled: false,
};
