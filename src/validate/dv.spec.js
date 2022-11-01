import { expect } from 'chai';
import validateDV from './dv';

describe('DV', () => {
  describe('Invalid', () => {
    it('should validate wrong type', () => {
      expect(validateDV(null)).to.be.equal(false);
      expect(validateDV({})).to.be.equal(false);
      expect(validateDV([])).to.be.equal(false);
      expect(validateDV(() => 0)).to.be.equal(false);
      expect(validateDV(undefined)).to.be.equal(false);
      expect(validateDV(42100484684182000157550010000000020108042108)).to.be.equal(false);
      expect(validateDV(0)).to.be.equal(false);
    });

    it('should validate invalid access key', () => {
      expect(validateDV('42100484684182000157550010000000020108042102')).to.be.equal(false);
    });

    it('should validate invalid access key with size other than 44', () => {
      expect(validateDV('4210048468418200015755001000000002010804210')).to.be.equal(false);
      expect(validateDV('421004846841820001575500100000000201080421022')).to.be.equal(false);
    });
  });

  describe('Valid', () => {
    it('should validate with punctuation', () => {
      expect(validateDV('42-10/04-84.684.182/0001-57-55-001-000.000.002-010.804.210-8'))
        .to.be.equal(true);
    });

    it('should validate without punctuation', () => {
      expect(validateDV('42100484684182000157550010000000020108042108')).to.be.equal(true);
    });
  });
});
