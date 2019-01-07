import { expect } from 'chai';
import validateCode from './code';
import utils from './utils';

describe('Code', () => {
  describe('Invalid', () => {
    it('should validate wrong type', () => {
      expect(validateCode(null)).to.be.equal(false);
      expect(validateCode({})).to.be.equal(false);
      expect(validateCode([])).to.be.equal(false);
      expect(validateCode(() => 0)).to.be.equal(false);
      expect(validateCode(undefined)).to.be.equal(false);
    });

    it('should validate length', () => {
      expect(validateCode(utils.randomWithDigitRange(2, 7))).to.be.equal(false);
      expect(validateCode(utils.randomWithDigitRange(9, 20))).to.be.equal(false);
      expect(validateCode(utils.randomWithDigitRange(8), true)).to.be.equal(false);
    });
  });

  describe('Valid', () => {
    it('should validate length', () => {
      expect(validateCode(utils.randomWithDigitRange(8))).to.be.equal(true);
      expect(validateCode(utils.randomWithDigitRange(9), true)).to.be.equal(true);
    });
  });
});
