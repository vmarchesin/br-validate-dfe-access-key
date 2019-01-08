# Validador de Chaves de Acesso de DFes (Documentos Fiscais Eletrônicos)

[![npm](https://img.shields.io/npm/v/br-validate-dfe-access-key.svg)]()
[![npm](https://img.shields.io/npm/dt/br-validate-dfe-access-key.svg)]()
![Travis](https://img.shields.io/travis/com/vmarchesin/br-validate-dfe-access-key.svg)
![Maintenance](https://img.shields.io/maintenance/yes/2019.svg)

![Logo NFe](./assets/nfe-logo.png)

Uma **Chave de Acesso** é um identificador único que referencia um DFe (Documento Fiscal Eletrônico), controlado pela SEFAZ (Secretaria da Fazenda, órgão do governo que gerencia os DFes). Esta biblioteca valida apenas o formato da chave de acesso. Não é possível recuperar a informação ou confirmar a existência da chave de acesso através desta biblioteca.

Esta biblioteca possui zero dependências.

```js
  import validateAccessKey from 'br-validate-access-key';

  validateAccessKey('35120859597245000190550000000095831710040056'); //true
  validateAccessKey('35-12/08-59.597.245/0001-90-55-000-000.009.583-171.004.005-6'); //true
  validateAccessKey('42100484684182000157550010000000020108042108'); //false
```

## INSTALAÇÃO

[![NPM](https://nodei.co/npm/br-validate-dfe-access-key.png)](https://www.npmjs.com/package/br-validate-dfe-access-key)


```bash
npm i -S br-validate-dfe-access-key
```

## VALIDAÇÕES INDIVIDUAIS

Para que a validação da chave de acesso seja feita, é necessário fazer várias validações menores em cada campo. A chave só será válida se todos os campos forem válidos. Também é possível fazer validações diretamente nos campos de forma individual:

```js
import validateAccessKey, { validate } from 'br-validate-access-key';

validateAccessKey('42100484684182000157550010000000020108042108'); //false
validate.uf('42'); //true
validate.aamm('1004'); //true
validate.cnpj('84684182000157'); //true
validate.model('55'); //true
validate.series('001'); //true
validate.number('000000002'); //true
validate.type('0'); //false
validate.code('010804210'); //true
```

## CONFIGURAÇÃO

É possível passar opções como o segundo argumento do método de validação.

* `ignoreType`: Ignora o campo **tpEmis** e considera o campo **cNF** com 9 dígitos.

```js
validateAccessKey('42100484684182000157550010000000020108042108', {
  ignoreType: true,
}); //true

```

* `describe`: Retorna um objeto com as validações individuais ao invés de um booleano.
> Todo campo possui as propriedades `isValid` e `value`.
>
> Para validar a chave de acesso a partir da descrição use:
>
> ```js
> validateAccessKey(accessKey, { describe: true })
>   .every(field => field.isValid)
> ```


```js
validateAccessKey('42100484684182000157550010000000020108042108', {
  describe: true,
}); /* {
  uf: {
    isValid: true,
    translation: 'Santa Catarina',
    value: '42'
  },
  aamm: {
    isValid: true,
    value: '1004'
  },
  ...
} */

```

## CONSTRUÇÃO DE UMA CHAVE DE ACESSO

As chaves de acesso são únicas para cada documento, mas todas seguem um padrão. O valor semântico dos campos é diferente para cada tipo de documento, mas a sua distribuição ao longo dos 44 caracteres é sempre a mesma.

Os campos que compõem uma chave de acesso são, em ordem da esquerda para a direita:

* **cUF**: 02 dígitos
* **AAMM**: 04 dígitos
* **CNPJ**: 14 dígitos
* **mod**: 02 dígitos
* **serie**: 03 dígitos
* **nNf**: 09 dígitos
* **tpEmis**: 01 dígitos\*
* **cNF**: 08 dígitos\*
* **cDV**: 01 dígito

<small>\* O campo **tpEmis** passou a compor a chave de acesso a partir da versão 1.1 da NFe. Para as versões anteriores à 1.1 o campo **cNF** possui 9 dígitos.</small>

## VALIDAÇÕES DE OUTROS TIPOS DE DFe

Esta biblioteca valida apenas chaves de acesso de NFes. Apesar do layout de todos os DFes ser o mesmo, o valor semântico de cada campo é importante para a validação da chave. Por exemplo: em uma NFe o campo **tpEmis** assume valores entre 1 e 5, porém em um CTe os valores 7 e 8 são válidos, e possuem significados diferentes.

Visto que existem vários tipos de DFe, com vários valores semânticos diferentes, a implementação da validação completa de todos os DFes se dará pela demanda de tal validação. Caso queira a validação de um DFe específico, faça uma contribuição ou abra uma Issue.

## CONTRIBUIÇÕES

Contribuições serão aceitas desde que acompanhadas da respectiva [Nota Técnica](http://www.nfe.fazenda.gov.br/portal/listaConteudo.aspx?tipoConteudo=tW+YMyk/50s=) que define a regra de validação. Contribuições serão aceitas para todos os tipos de DFe.

Contribuições que não possuam uma alta cobertura de testes não serão aceitas.

## LICENÇA

Esta biblioteca está publicada sob a licença MIT, o que significa que você é livre para modificar e/ou reusar o código gratuitamente ou para fins comerciais. Se você fizer alterações a partir do código original por favor faça referência ao autor.