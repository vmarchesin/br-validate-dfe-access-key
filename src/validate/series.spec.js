import { expect } from 'chai';
import validateSeries from './series';
import utils from './utils';

describe('Series', () => {
  describe('Invalid', () => {
    it('should validate wrong type', () => {
      expect(validateSeries(null)).to.be.equal(false);
      expect(validateSeries({})).to.be.equal(false);
      expect(validateSeries([])).to.be.equal(false);
      expect(validateSeries(() => 0)).to.be.equal(false);
      expect(validateSeries(undefined)).to.be.equal(false);
    });

    it('should validate length', () => {
      expect(validateSeries(utils.randomWithDigitRange(1, 2))).to.be.equal(false);
      expect(validateSeries(utils.randomWithDigitRange(4, 20))).to.be.equal(false);
    });
  });

  describe('Valid', () => {
    it('should validate length', () => {
      expect(validateSeries(utils.randomWithDigitRange(3))).to.be.equal(true);
    });
  });
});
