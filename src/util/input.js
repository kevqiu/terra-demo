const getInputClasses = (fields, errors, touched) => {
  const classes = {};
  for (const field of Object.keys(fields)) {
    if (errors[field] && touched[field]) {
      classes[field] = "error";
    } else {
      classes[field] = "primary";
    }
  }
  return classes;
};

export { getInputClasses };
