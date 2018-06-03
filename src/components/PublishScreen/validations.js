const validate = (values) => {
  const errors = {};

  if (!values.quantity) {
    errors.quantity = 'Requerido';
  } else if (isNaN(Number(values.quantity))) {
    errors.quantity = 'Debe ser un numero';
  } else if (Number(values.quantity) < 30) {
    errors.quantity = 'Al menos 30 animales';
  }

  if (!values.weight) {
    errors.weight = 'Requerido';
  } else if (isNaN(Number(values.weight))) {
    errors.weight = 'Debe ser un numero';
  }

  if (!values.price) {
    errors.price = 'Requerido';
  } else if (isNaN(Number(values.price))) {
    errors.price = 'Debe ser un numero';
  }

  return errors;
};

export default validate;
