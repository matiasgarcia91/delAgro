const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Requerido';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Dirección de email invalida';
  }

  if (!values.cellphone) {
    errors.cellphone = 'Requerido';
  } else if (isNaN(Number(values.cellphone))) {
    errors.cellphone = 'Debe ser un numero';
  } else if (!/^(0|[0-9]{9})$/i.test(values.cellphone)) {
    errors.cellphone = 'Numero de celular invalido';
  }

  const { firstName, lastName, password, confirmPassword } = values;
  if (!firstName) errors.firstName = 'Requerido';
  if (!lastName) errors.lastName = 'Requerido';
  if (!password) errors.password = 'Requerido';
  if (!confirmPassword) errors.confirmPassword = 'Requerido';

  if (confirmPassword !== password) {
    errors.password = 'Las contraseñas no son iguales';
  }
  return errors;
};

export default validate;
