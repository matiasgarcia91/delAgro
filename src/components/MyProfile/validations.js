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
  return errors;
};

export default validate;
