const getNestedObjectValue = (obj, path) => {
  if (!path) return obj;
  const properties = path.split('.');
  if (properties.length < 1) return obj;
  return getNestedObjectValue(obj[properties.shift()], properties.join('.'));
};

export default getNestedObjectValue;
