export default (number) => {
  if (typeof number !== 'string' && typeof number !== 'number') {
    return false;
  }

  const stringNumber = String(number);

  if (stringNumber.length !== 9) {
    return false;
  }

  return true;
};
