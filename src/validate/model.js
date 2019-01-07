export const modelTable = {
  '01': 'Nota Fiscal 1/1ª',
  '1B': 'Nota Fiscal Avulsa',
  '02': 'Nota Fiscal de Venda a Consumidor',
  '2D': 'Cupom Fiscal',
  '2E': 'Cupom Fiscal Bilhete de Passagem',
  '04': 'Nota Fiscal de Produtor',
  '06': 'Nota Fiscal/Conta de Energia Elétrica',
  '07': 'Nota Fiscal de Serviço de Transporte',
  '08': 'Conhecimento de Transporte Rodoviário de Cargas',
  '8B': 'Conhecimento de Transporte de Cargas Avulso',
  '09': 'Conhecimento de Transporte Aquaviário de Cargas',
  '10': 'Conhecimento Aéreo',
  '11': 'Conhecimento de Transporte Ferroviário de Cargas',
  '13': 'Bilhete de Passagem Rodoviário',
  '14': 'Bilhete de Passagem Aquaviário',
  '15': 'Bilhete de Passagem e Nota de Bagagem',
  '17': 'Despacho de Transporte',
  '16': 'Bilhete de Passagem Ferroviário',
  '18': 'Resumo de Movimento Diário',
  '20': 'Ordem de Coleta de Cargas',
  '21': 'Nota Fiscal de Serviço de Comunicação',
  '22': 'Nota Fiscal de Serviço de Telecomunicação',
  '23': 'GNRE',
  '24': 'Autorização de Carregamento e Transporte',
  '25': 'Manifesto de Carga',
  '26': 'Conhecimento de Transporte Multimodal de Cargas',
  '27': 'Nota Fiscal De Transporte Ferroviário De Carga',
  '28': 'Nota Fiscal/Conta de Fornecimento de Gás Canalizado',
  '29': 'Nota Fiscal/Conta De Fornecimento D\'água Canalizada',
  '55': 'Nota Fiscal Eletrônica - NF-e',
  '57': 'Conhecimento de Transporte Eletrônico - CT-e',
  '58': 'Cupom Fiscal Eletrônico CF-e-SAT',
  '59': 'Cupom Fiscal Eletrônico - CF-e',
  '60': 'Cupom Fiscal Eletrônico CF-e-ECF',
  '65': 'Nota Fiscal Eletrônica para Consumidor Final',
  '67': 'Conhecimento de Transporte Eletrônico para Outros Serviços - CT-eOS',
};

export const getModelName = (model) => {
  if (typeof model !== 'string' && typeof model !== 'number') {
    return undefined;
  }

  const parsedModel = model.replace(/\D/g, '');

  return modelTable[String(parsedModel)];
};

export default (model) => {
  if (typeof model !== 'string' && typeof model !== 'number') {
    return false;
  }

  const stringModel = String(model);

  if (stringModel.length !== 2) {
    return false;
  }

  return Object.keys(modelTable).includes(stringModel);
};
