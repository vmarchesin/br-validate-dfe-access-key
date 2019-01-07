import aamm from './aamm';
import cnpj from './cnpj';
import code from './code';
import dv from './dv';
import model, { getModelName } from './model';
import number from './number';
import series from './series';
import _type from './type';
import uf, { getUFName } from './uf';

const get = { model: getModelName, uf: getUFName };
export default {
  aamm, cnpj, code, dv, get, model, number, series, type: _type, uf,
};
