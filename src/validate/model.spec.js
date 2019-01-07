import { expect } from 'chai';
import validateModel, { modelTable } from './model';
import utils from './utils';

describe('Model', () => {
  describe('Invalid', () => {
    it('should validate wrong type', () => {
      expect(validateModel(null)).to.be.equal(false);
      expect(validateModel({})).to.be.equal(false);
      expect(validateModel([])).to.be.equal(false);
      expect(validateModel(() => 0)).to.be.equal(false);
      expect(validateModel(undefined)).to.be.equal(false);
    });

    it('should validate length', () => {
      expect(validateModel(utils.randomWithDigitRange(1))).to.be.equal(false);
      expect(validateModel(utils.randomWithDigitRange(3, 5))).to.be.equal(false);
    });
  });

  describe('Random checks', () => {
    it('should validate 2 digit model', () => {
      const randomModel = utils.randomWithDigitRange(2);
      const models = Object.keys(modelTable);

      expect(validateModel(randomModel)).to.be.equal(models.includes(String(randomModel)));
      expect(validateModel(String(randomModel))).to.be.equal(models.includes(String(randomModel)));
    });
  });
});
