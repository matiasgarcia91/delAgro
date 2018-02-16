import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default class LoginFooter extends PureComponent {
  render() {
    const { text, linkText, customStyles, link } = this.props;
    return (
      <View style={[styles.container, customStyles]}>
        <Text style={styles.text}>{text}</Text>
        <Text style={[styles.text, styles.link]} onPress={link}>{linkText}</Text>
      </View>
    );
  }
}

LoginFooter.propTypes = {
  text: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  link: PropTypes.func.isRequired,
  customStyles: PropTypes.shape(),
};

LoginFooter.defaultProps = {
  customStyles: {},
};
