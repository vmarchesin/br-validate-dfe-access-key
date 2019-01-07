import { expect } from 'chai';
import validateType from './type';
import utils from './utils';

describe('Type', () => {
  describe('Invalid', () => {
    it('should validate wrong type', () => {
      expect(validateType(null)).to.be.equal(false);
      expect(validateType({})).to.be.equal(false);
      expect(validateType([])).to.be.equal(false);
      expect(validateType(() => 0)).to.be.equal(false);
      expect(validateType(undefined)).to.be.equal(false);
    });

    it('should validate length', () => {
      expect(validateType(utils.randomWithDigitRange(2, 10))).to.be.equal(false);
    });
  });

  describe('Random check', () => {
    it('should validate', () => {
      const rand = utils.randomWithDigitRange(1);
      expect(validateType(rand)).to.be.equal(rand >= 1 && rand <= 5);
    });
  });

  describe('Valid', () => {
    it('should ignore type', () => {
      expect(validateType(1, '55', true)).to.be.equal(true);
    });

    it('should validate type between 1 and 5', () => {
      expect(validateType(1)).to.be.equal(true);
      expect(validateType(2)).to.be.equal(true);
      expect(validateType(3)).to.be.equal(true);
      expect(validateType(4)).to.be.equal(true);
      expect(validateType(5)).to.be.equal(true);
    });
  });
});
