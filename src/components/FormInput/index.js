import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TextInput, View, Text } from 'react-native';

import styles from './styles';

class FormInput extends PureComponent {
  render() {
    const { label } = this.props;
    return (
      <View style={styles.container}>
        { label &&
          <Text style={styles.label}>{label}</Text>
        }
        <TextInput
          style={styles.textInput}
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
};

FormInput.defaultProps = {
  inputRef: () => {},
  label: null,
};

export default FormInput;
