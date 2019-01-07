import { expect } from 'chai';
import validateUF, { ufTable } from './uf';
import utils from './utils';

describe('UF', () => {
  describe('Invalid', () => {
    it('should validate wrong type', () => {
      expect(validateUF(null)).to.be.equal(false);
      expect(validateUF({})).to.be.equal(false);
      expect(validateUF([])).to.be.equal(false);
      expect(validateUF(() => 0)).to.be.equal(false);
      expect(validateUF(undefined)).to.be.equal(false);
    });

    it('should validate invalid string', () => {
      expect(validateUF('')).to.be.equal(false);
    });

    it('should validate 3 digit number', () => {
      expect(validateUF(utils.randomWithDigitRange(3))).to.be.equal(false);
    });
  });

  describe('Random checks', () => {
    it('should validate 2 digit number', () => {
      const randomUF = utils.randomWithDigitRange(2);
      const ufs = Object.keys(ufTable);

      expect(validateUF(randomUF)).to.be.equal(ufs.includes(String(randomUF)));
      expect(validateUF(String(randomUF))).to.be.equal(ufs.includes(String(randomUF)));
    });
  });

  describe('Valid', () => {
    it('should validate ufTable', () => {
      Object.keys(ufTable).forEach(key => expect(validateUF(key)).to.be.equal(true));
    });

    it('should have only 27 valid UFs', () => {
      let validUfs = 0;
      for (let i = 0; i < 100; i++) {
        validUfs += validateUF(i);
      }

      expect(validUfs).to.be.equal(27);
    });
  });
});
