import { expect } from 'chai';
import validateAccessKey from '.';

describe('Access Key', () => {
  describe('Invalid', () => {
    it('should validate wrong type', () => {
      expect(validateAccessKey(null)).to.be.equal(false);
      expect(validateAccessKey({})).to.be.equal(false);
      expect(validateAccessKey([])).to.be.equal(false);
      expect(validateAccessKey(() => 0)).to.be.equal(false);
      expect(validateAccessKey(undefined)).to.be.equal(false);
      expect(validateAccessKey(42100484684182000157550010000000020108042108)).to.be.equal(false);
      expect(validateAccessKey(0)).to.be.equal(false);
    });

    it('should validate invalid access key', () => {
      expect(validateAccessKey('42100484684182000157550010000000020108042102')).to.be.equal(false);
    });

    it('should validate invalid access key with size other than 44', () => {
      expect(validateAccessKey('4210048468418200015755001000000002010804210')).to.be.equal(false);
      expect(validateAccessKey('421004846841820001575500100000000201080421022')).to.be.equal(false);
    });
  });

  describe('Valid', () => {
    it('should validate with punctuation', () => {
      expect(validateAccessKey('35-12/08-59.597.245/0001-90-55-000-000.009.583-171.004.005-6'))
        .to.be.equal(true);
    });

    it('should validate without punctuation', () => {
      expect(validateAccessKey('35120859597245000190550000000095831710040056')).to.be.equal(true);
    });

    it('should validate ignoring type', () => {
      expect(validateAccessKey('42100484684182000157550010000000020108042108', {
        ignoreType: true,
      })).to.be.equal(true);
    });

    it('should validate while describing', () => {
      const expectedDescription = {
        uf: {
          isValid: true,
          translation: 'Santa Catarina',
          value: '42',
        },
        aamm: {
          isValid: true,
          value: '1004',
        },
        cnpj: {
          isValid: true,
          value: '84684182000157',
        },
        model: {
          isValid: true,
          translation: 'Nota Fiscal Eletrônica - NF-e',
          value: '55',
        },
        series: {
          isValid: true,
          value: '001',
        },
        number: {
          isValid: true,
          value: '000000002',
        },
        type: {
          isValid: true,
          value: null,
        },
        code: {
          isValid: true,
          value: '010804210',
        },
        dv: {
          isValid: true,
          value: '8',
        },
      };

      const validation = validateAccessKey('42100484684182000157550010000000020108042108', {
        describe: true,
        ignoreType: true,
      });

      expect(validation).to.be.an('object').and.have.all.keys(expectedDescription);

      Object.keys(expectedDescription).forEach((key) => {
        Object.keys(expectedDescription[key]).forEach((nestedKey) => {
          expect(validation).to.nested.include({
            [`${key}.${nestedKey}`]: expectedDescription[key][nestedKey],
          });
        });
      });
    });
  });
});
