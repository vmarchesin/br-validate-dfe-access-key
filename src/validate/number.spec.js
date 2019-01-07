import { expect } from 'chai';
import validateNumber from './number';
import utils from './utils';

describe('Number', () => {
  describe('Invalid', () => {
    it('should validate wrong type', () => {
      expect(validateNumber(null)).to.be.equal(false);
      expect(validateNumber({})).to.be.equal(false);
      expect(validateNumber([])).to.be.equal(false);
      expect(validateNumber(() => 0)).to.be.equal(false);
      expect(validateNumber(undefined)).to.be.equal(false);
    });

    it('should validate length', () => {
      expect(validateNumber(utils.randomWithDigitRange(2, 8))).to.be.equal(false);
      expect(validateNumber(utils.randomWithDigitRange(10, 20))).to.be.equal(false);
    });
  });

  describe('Valid', () => {
    it('should validate length', () => {
      expect(validateNumber(utils.randomWithDigitRange(9))).to.be.equal(true);
    });
  });
});
