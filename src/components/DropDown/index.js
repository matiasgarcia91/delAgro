import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class DropDown extends PureComponent {
  constructor(props) {
    super(props);
    this.renderSelected = this.renderSelected.bind(this);
  }

  renderSelected() {
    const { selected } = this.props;
    return selected ?
      (<View style={styles.selectedText}><Text>Hola</Text><Icon name={'angle-down'} size={20} /></View>) :
      (<View style={styles.selectedText}><Text>Seleccionar</Text><Icon name={'angle-down'} size={20} /></View>);
  }

  render() {
    const { label, values, onChange } = this.props;
    return (
      <View style={styles.container}>
        { label &&
          <Text style={styles.label}>{label}</Text>
        }
        <Dropdown
          label=''
          data={values}
          onChangeText={onChange}
          dropdownOffset={{ top: 90, left: 0 }}
          rippleInsets={{ top: 0 }}
          renderBase={this.renderSelected}
          valueExtractor={item => item.id}
          labelExtractor={item => item.name}
        />
      </View>
    );
  }
}

DropDown.propTypes = {
  label: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  selected: PropTypes.shape(),
  onChange: PropTypes.func.isRequired,
};

DropDown.defaultProps = {
  selected: null,
};
