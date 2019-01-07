export default (aamm) => {
  if (typeof aamm !== 'string' && typeof aamm !== 'number') {
    return false;
  }

  const stringParsedAamm = String(aamm).replace(/\D/g, '');

  if (stringParsedAamm.length !== 4) {
    return false;
  }

  // const year = Number(stringParsedAamm.slice(0, 2));
  const month = Number(stringParsedAamm.slice(2, 4));

  if (month > 12 || month < 1) {
    return false;
  }

  return true;
};
