import validate from './validate';

export default (accessKey, options = {}) => {
  if (typeof accessKey !== 'string') {
    return false;
  }

  const stringParsedAccessKey = String(accessKey).replace(/\D/g, '');

  if (stringParsedAccessKey.length !== 44) {
    return false;
  }

  const uf = stringParsedAccessKey.slice(0, 2);
  const aamm = stringParsedAccessKey.slice(2, 6);
  const cnpj = stringParsedAccessKey.slice(6, 20);
  const model = stringParsedAccessKey.slice(20, 22);
  const series = stringParsedAccessKey.slice(22, 25);
  const number = stringParsedAccessKey.slice(25, 34);
  const dv = stringParsedAccessKey.slice(43, 44);

  let type = stringParsedAccessKey.slice(34, 35);
  let code = stringParsedAccessKey.slice(35, 43);

  if (options.ignoreType === true) {
    type = null;
    code = stringParsedAccessKey.slice(34, 43);
  }

  const validations = {
    uf: {
      isValid: validate.uf(uf),
      translation: validate.get.uf(uf),
      value: uf,
    },
    aamm: {
      isValid: validate.aamm(aamm),
      value: aamm,
    },
    cnpj: {
      isValid: validate.cnpj(cnpj),
      value: cnpj,
    },
    model: {
      isValid: validate.model(model),
      translation: validate.get.model(model),
      value: model,
    },
    series: {
      isValid: validate.series(series),
      value: series,
    },
    number: {
      isValid: validate.number(number),
      value: number,
    },
    type: {
      isValid: validate.type(type, model, options.ignoreType === true),
      value: type,
    },
    code: {
      isValid: validate.code(code, options.ignoreType === true),
      value: code,
    },
    dv: {
      isValid: validate.dv(accessKey),
      value: dv,
    },
  };

  if (options.describe === true) {
    return validations;
  }

  return Object.values(validations).every(field => field.isValid);
};

export { validate };
