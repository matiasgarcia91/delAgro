const validate = (values) => {
  const { firstName, lastName, password, confirmPassword, email, cellphone } = values;
  const errors = {};
  if (!email) {
    errors.email = 'Requerido';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = 'Dirección de email invalida';
  }

  if (!cellphone) {
    errors.cellphone = 'Requerido';
  } else if (isNaN(Number(cellphone))) {
    errors.cellphone = 'Debe ser un numero';
  } else if (!/^(0|[0-9]{9})$/i.test(cellphone)) {
    errors.cellphone = 'Numero de celular invalido';
  }

  if (!firstName) errors.firstName = 'Requerido';
  if (!lastName) errors.lastName = 'Requerido';
  if (!password) errors.password = 'Requerido';
  if (!confirmPassword) errors.confirmPassword = 'Requerido';

  if (confirmPassword && confirmPassword !== password) {
    errors.password = 'Las contraseñas no son iguales';
  }
  return errors;
};

export default validate;
