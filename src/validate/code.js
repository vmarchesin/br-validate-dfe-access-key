export default (code, isOldVersionWithoutType = false) => {
  if (typeof code !== 'string' && typeof code !== 'number') {
    return false;
  }

  const stringCode = String(code);

  if (isOldVersionWithoutType && stringCode.length !== 9) {
    return false;
  } else if (!isOldVersionWithoutType && stringCode.length !== 8) {
    return false;
  }

  return true;
};
