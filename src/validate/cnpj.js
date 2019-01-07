const firstDvWeights = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
const secondDvWeights = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

const getDv = (cnpj, weights) => {
  const dvModulus = weights
    .map((weight, i) => weight * Number(cnpj[i]))
    .reduce((acc, curr) => acc + curr, 0) % 11;

  return dvModulus < 2 ? 0 : 11 - dvModulus;
};

export default (cnpj) => {
  if (typeof cnpj !== 'string' && typeof cnpj !== 'number') {
    return false;
  }

  const parsedCnpj = String(cnpj).replace(/\D/g, '');

  if (parsedCnpj.length !== 14) {
    return false;
  } else if (parsedCnpj === '00000000000000') {
    return false;
  }

  let calculatedCnpj = parsedCnpj.slice(0, 12);
  calculatedCnpj = calculatedCnpj.concat(getDv(calculatedCnpj, firstDvWeights));
  calculatedCnpj = calculatedCnpj.concat(getDv(calculatedCnpj, secondDvWeights));

  const dv = calculatedCnpj.slice(12, 14);
  const incomingDv = parsedCnpj.slice(12, 14);

  return incomingDv === dv;
};
