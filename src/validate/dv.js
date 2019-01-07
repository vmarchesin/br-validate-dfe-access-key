const weights = [
  4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2,
  9, 8, 7, 6, 5, 4, 3, 2, 9, 8, 7,
  6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4,
  3, 2, 9, 8, 7, 6, 5, 4, 3, 2,
];

const getDv = (accessKey, w) => {
  const dvModulus = w
    .map((weight, i) => weight * Number(accessKey[i]))
    .reduce((acc, curr) => acc + curr, 0) % 11;

  return dvModulus < 2 ? 0 : 11 - dvModulus;
};

export default (accessKey) => {
  if (typeof accessKey !== 'string') {
    return false;
  }

  const parsedAccessKey = accessKey.replace(/\D/g, '');

  if (parsedAccessKey.length !== 44) {
    return false;
  }

  let calculatedAccessKey = parsedAccessKey.slice(0, 43);
  calculatedAccessKey = calculatedAccessKey.concat(getDv(calculatedAccessKey, weights));

  const dv = calculatedAccessKey.slice(43, 44);
  const incomingDv = parsedAccessKey.slice(43, 44);

  return incomingDv === dv;
};
