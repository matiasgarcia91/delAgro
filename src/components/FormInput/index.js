import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TextInput, View, Text } from 'react-native';

import styles from './styles';

class FormInput extends PureComponent {
  render() {
    const { label, multiline, autoCapitalize } = this.props;
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
          autoCapitalize={autoCapitalize}
        />
      </View>
    );
  }
}

FormInput.propTypes = {
  inputRef: PropTypes.func,
  label: PropTypes.string,
  multiline: PropTypes.bool,
  autoCapitalize: PropTypes.string,
};

FormInput.defaultProps = {
  inputRef: () => {},
  label: null,
  multiline: false,
  autoCapitalize: 'sentences',
};

export default FormInput;
