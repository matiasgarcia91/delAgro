import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TextInput, View, Text } from 'react-native';

import styles from './styles';

class FormInput extends PureComponent {
  render() {
    const { label, multiline, autoCapitalize, input, type, meta } = this.props;
    const extraHeight = multiline ? { height: 120 } : null;
    const { touched, error, warning } = meta;
    return (
      <View style={[styles.container, extraHeight]}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{label}</Text>
          {touched &&
            ((error && <Text style={styles.error}>{error}</Text>) ||
            (warning && <Text style={styles.error}>{warning}</Text>))}
        </View>
        <TextInput
          {...input}
          type={type}
          style={[styles.textInput, extraHeight]}
          returnKeyType={'next'}
          blurOnSubmit={false}
          underlineColorAndroid="transparent"
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
  input: PropTypes.shape().isRequired,
  type: PropTypes.string,
  meta: PropTypes.shape(),
};

FormInput.defaultProps = {
  inputRef: () => {},
  label: null,
  multiline: false,
  autoCapitalize: 'sentences',
  type: '',
  meta: {},
};

export default FormInput;
