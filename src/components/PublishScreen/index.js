import React, { PureComponent } from 'react';
import { View, ScrollView, KeyboardAvoidingView, Platform, Keyboard, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { ProcessingManager } from 'react-native-video-processing';
import LoadingBanner from '../LoadingBanner';
import stateTranslations from '../../helpers/stateTranslations';

import NavBarPublish from '../NavBarPublish';
import styles from './styles';
import stylesFormInput from '../FormInput/styles';
import FormInput from '../FormInput';
import DropDown from '../DropDown';
import validate from './validations';

const maxLengthDescription = 250;

class PublishScreen extends PureComponent {
  constructor() {
    super();
    this.state = {
      category: null,
      breed: null,
      state: null,
      compressing: false,
      keyboardPadding: 0,
      description: '',
      errorDescription: '',
    };
    this.onChangeBreed = this.onChangeBreed.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeState = this.onChangeState.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.renderInput = this.renderInput.bind(this);
    this.keyboardDidShowListener = null;
    this.keyboardDidHideListener = null;
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow.bind(this));
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this));
  }

  componentWillUnmount() {
    this.keyboardDidShowListener ? this.keyboardDidShowListener.remove() : null;
    this.keyboardDidHideListener ? this.keyboardDidHideListener.remove() : null;
  }

  _keyboardDidShow(e) {
    if (Platform.OS === 'android') {
      this.setState({ keyboardPadding: e.endCoordinates.height });
    }
  }

  _keyboardDidHide() {
    this.setState({ keyboardPadding: 0 });
  }

  onChangeCategory(value, index, data) {
    const category = data.find(item => item.id === value);
    this.setState({ category });
  }

  onChangeBreed(value, index, data) {
    const breed = data.find(item => item.id === value);
    this.setState({ breed });
  }

  onChangeState(value, index, data) {
    const state = data.find(item => item.id === value);
    this.setState({ state });
  }


  onSubmit(values) {
    const { category, breed, state, description, errorDescription } = this.state;
    const { quantity, price, weight } = values;
    const { navigation, submitLot } = this.props;

    const options = {
      removeAudio: true,
      bitrateMultiplier: 3,
      minimumBitrate: 3000,
    };

    if (errorDescription) {
      return;
    }
    this.setState({ compressing: true });
    ProcessingManager.compress(navigation.state.params.video, options)
      .then((data) => {
        const video = Platform.OS === 'android' ? data.source : data;
        this.setState({ compressing: false });
        submitLot({
          category_id: category.id,
          breed_id: breed.id,
          state: state.id,
          quantity,
          weight,
          video,
          price,
          description,
        });
      })
      .catch((error) => {
        console.log('Error', error);
        this.setState({ compressing: false });
      });
    // }
  }

  renderInput({
    input,
    multiline,
    label,
    secureTextEntry,
    autoFocus,
    type,
    meta,
    capitalize,
  }) {
    return (<FormInput
      label={label}
      input={input}
      autoFocus={autoFocus}
      secureTextEntry={secureTextEntry}
      autoCapitalize={capitalize}
      type={type}
      meta={meta}
      multiline={multiline}
    />
    );
  }

  onChangeDescription = (text) => {
    let errorAux = '';
    if (text.length > maxLengthDescription) {
      errorAux = `Largo máximo ${maxLengthDescription}`;
    }
    this.setState({ description: text, errorDescription: errorAux });
  };

  /*
  -Issue MUUU-01
  Field component Comentarios is now rendering with renderDescription instead of renderInput
  It's using  a TextInput that has a onChangeText event that trigger a set state on description
  that then invoke onSubmit to sent all data
  We defined a constant maxLengthDescription to limit the input
  -Issue MUUU-02
  Changed label Peso to Peso (mas/menos 10kgs)
  Added inline style for Comentarios input so is centered when Platform is Android
  */
  renderDescription = (props) => {
    const { errorDescription } = this.state;
    return (
      <View style={[stylesFormInput.container, { height: 120 }]}>
        <View style={stylesFormInput.labelContainer}>
          <Text style={stylesFormInput.label}>{props.label}</Text>
          {!!errorDescription && (<Text style={stylesFormInput.error}>{errorDescription}</Text>) }
        </View>
        <TextInput
          input={props.input}
          type={props.text}
          style={[stylesFormInput.textInput, { height: 120 }, Platform.OS === 'android' ?
            { textAlignVertical: 'top' } : null]}
          returnKeyType={'next'}
          blurOnSubmit={false}
          underlineColorAndroid="transparent"
          {...this.props}
          autoCapitalize={props.autoCapitalize}
          multiline={props.multiline}
          onChangeText={this.onChangeDescription}
        />
      </View>
    );
  };

  render() {
    const { breed, category, state, compressing, keyboardPadding, description } = this.state;
    const { categories, breeds, states, handleSubmit } = this.props;
    const mapStates = states.map(item => ({ id: item, name: stateTranslations[item] }));
    const unit = (category && category.unit) || '';
    return (
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <NavBarPublish
          navigation={this.props.navigation}
          submitLot={this.onSubmit}
          handleSubmit={handleSubmit}
        />
        {compressing && <LoadingBanner title="Comprimiendo Video" />}
        <ScrollView contentContainerStyle={{ paddingBottom: keyboardPadding }} >
          <View style={styles.formContainer}>
            <DropDown label={'Categoria:'} selected={category} values={categories} onChange={this.onChangeCategory} />
            <Field
              name='quantity'
              type='number'
              label={'Cantidad:'}
              component={this.renderInput}
            />
            <DropDown label={'Raza:'} selected={breed} values={breeds} onChange={this.onChangeBreed} />
            <Field
              name='weight'
              type='number'
              label={'Peso (mas/menos 10kg):'}
              component={this.renderInput}
            />
            <DropDown label={'Departamento:'} selected={state} values={mapStates} onChange={this.onChangeState} />
            <Field
              name='price'
              type='number'
              label={`Precio ${unit}:`}
              component={this.renderInput}
            />
            <Field
              name='description'
              type='text'
              label={'Comentarios:'}
              capitalize={'sentences'}
              component={this.renderDescription}
              value={description}
              multiline
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

PublishScreen.propTypes = {
  navigation: PropTypes.shape().isRequired,
  submitLot: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  breeds: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  states: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'Publish',
  validate,
})(PublishScreen);
