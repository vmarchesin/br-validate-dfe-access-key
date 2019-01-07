export default (series) => {
  if (typeof series !== 'string' && typeof series !== 'number') {
    return false;
  }

  const stringSeries = String(series);

  if (stringSeries.length !== 3) {
    return false;
  }

  return true;
};
