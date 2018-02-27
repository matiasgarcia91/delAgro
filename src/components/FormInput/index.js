import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TextInput, View, Text } from 'react-native';

import styles from './styles';

class FormInput extends PureComponent {
  render() {
    const { label, multiline } = this.props;
    const extraHeight = multiline ? { height: 120 } : null;
    return (
      <View style={[styles.container, extraHeight]}>
        { label &&
          <Text style={styles.label}>{label}</Text>
        }
        <TextInput
          style={[styles.textInput, extraHeight]}
          returnKeyType={'next'}
          blurOnSubmit={false}
          underlineColorAndroid="transparent"
          ref={this.props.inputRef}
          {...this.props}
        />
      </View>
    );
  }
}

FormInput.propTypes = {
  inputRef: PropTypes.func,
  label: PropTypes.string,
  multiline: PropTypes.bool,
};

FormInput.defaultProps = {
  inputRef: () => {},
  label: null,
  multiline: false,
};

export default FormInput;
