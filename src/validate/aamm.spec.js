import { expect } from 'chai';
import validateAAMM from './aamm';
import utils from './utils';

describe('AAMM', () => {
  describe('Invalid', () => {
    it('should validate wrong type', () => {
      expect(validateAAMM(null)).to.be.equal(false);
      expect(validateAAMM(null)).to.be.equal(false);
      expect(validateAAMM({})).to.be.equal(false);
      expect(validateAAMM([])).to.be.equal(false);
      expect(validateAAMM(() => 0)).to.be.equal(false);
      expect(validateAAMM(undefined)).to.be.equal(false);
    });

    it('should validate invalid string', () => {
      expect(validateAAMM('')).to.be.equal(false);
      expect(validateAAMM('12122')).to.be.equal(false);
      expect(validateAAMM('0000')).to.be.equal(false);
      expect(validateAAMM('000')).to.be.equal(false);
      expect(validateAAMM('00')).to.be.equal(false);
      expect(validateAAMM('0')).to.be.equal(false);
    });

    it('should validate month', () => {
      expect(validateAAMM('1200')).to.be.equal(false);
      expect(validateAAMM('1213')).to.be.equal(false);
      expect(validateAAMM('1214')).to.be.equal(false);
      expect(validateAAMM('1215')).to.be.equal(false);
    });

    it('should validate month', () => {
      expect(validateAAMM('1200')).to.be.equal(false);
      expect(validateAAMM('1213')).to.be.equal(false);
      expect(validateAAMM('1214')).to.be.equal(false);
      expect(validateAAMM('1215')).to.be.equal(false);
    });
  });

  describe('Valid', () => {
    it('should validate month', () => {
      const year = String(utils.randomWithDigitRange(1, 2)).padStart(2, '0');

      for (let i = 1; i <= 12; i++) {
        expect(validateAAMM(`${year}${String(i).padStart(2, '0')}`)).to.be.equal(true);
      }
    });
  });
});
