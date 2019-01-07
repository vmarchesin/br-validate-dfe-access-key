export default (type, model = '55', isOldVersionWithoutType = false) => {
  if (isOldVersionWithoutType) {
    return true;
  } else if (typeof type !== 'string' && typeof type !== 'number') {
    return false;
  }

  const stringType = String(type);

  if (stringType.length !== 1) {
    return false;
  } else if (model === '55' && (Number(stringType) < 1 || Number(stringType) > 5)) {
    return false;
  }

  return true;
};
