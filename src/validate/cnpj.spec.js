import { expect } from 'chai';
import validateCNPJ from './cnpj';

describe('CNPJ', () => {
  describe('Invalid', () => {
    it('should validate wrong type', () => {
      expect(validateCNPJ(null)).to.be.equal(false);
      expect(validateCNPJ({})).to.be.equal(false);
      expect(validateCNPJ([])).to.be.equal(false);
      expect(validateCNPJ(() => 0)).to.be.equal(false);
      expect(validateCNPJ(undefined)).to.be.equal(false);
    });

    it('should validate string', () => {
      expect(validateCNPJ('')).to.be.equal(false);
      expect(validateCNPJ('false')).to.be.equal(false);
      expect(validateCNPJ('00000000000000')).to.be.equal(false);
      expect(validateCNPJ('11111111111111')).to.be.equal(false);
    });

    it('should validate number', () => {
      expect(validateCNPJ('')).to.be.equal(false);
      expect(validateCNPJ('false')).to.be.equal(false);
      expect(validateCNPJ('00000000000000')).to.be.equal(false);
      expect(validateCNPJ('11111111111111')).to.be.equal(false);
    });

    it('should validate with punctuation', () => {
      expect(validateCNPJ('11.779.287/0001-10')).to.be.equal(false);
      expect(validateCNPJ('32.516.718/0001-20')).to.be.equal(false);
      expect(validateCNPJ('71.701.068/0001-40')).to.be.equal(false);
      expect(validateCNPJ('81.101.271/0001-30')).to.be.equal(false);
      expect(validateCNPJ('99.293.612/0001-80')).to.be.equal(false);
    });

    it('should validate without punctuation', () => {
      expect(validateCNPJ('11779287000110')).to.be.equal(false);
      expect(validateCNPJ('32516718000120')).to.be.equal(false);
      expect(validateCNPJ('71701068000140')).to.be.equal(false);
      expect(validateCNPJ('81101271000130')).to.be.equal(false);
      expect(validateCNPJ('99293612000180')).to.be.equal(false);

      expect(validateCNPJ(11779287000110)).to.be.equal(false);
      expect(validateCNPJ(32516718000120)).to.be.equal(false);
      expect(validateCNPJ(71701068000140)).to.be.equal(false);
      expect(validateCNPJ(81101271000130)).to.be.equal(false);
      expect(validateCNPJ(99293612000180)).to.be.equal(false);
    });
  });

  describe('Valid', () => {
    it('should validate with punctuation', () => {
      expect(validateCNPJ('11.779.287/0001-16')).to.be.equal(true);
      expect(validateCNPJ('32.516.718/0001-21')).to.be.equal(true);
      expect(validateCNPJ('71.701.068/0001-46')).to.be.equal(true);
      expect(validateCNPJ('81.101.271/0001-35')).to.be.equal(true);
      expect(validateCNPJ('99.293.612/0001-87')).to.be.equal(true);
    });

    it('should validate without punctuation', () => {
      expect(validateCNPJ('11779287000116')).to.be.equal(true);
      expect(validateCNPJ('32516718000121')).to.be.equal(true);
      expect(validateCNPJ('71701068000146')).to.be.equal(true);
      expect(validateCNPJ('81101271000135')).to.be.equal(true);
      expect(validateCNPJ('99293612000187')).to.be.equal(true);

      expect(validateCNPJ(11779287000116)).to.be.equal(true);
      expect(validateCNPJ(32516718000121)).to.be.equal(true);
      expect(validateCNPJ(71701068000146)).to.be.equal(true);
      expect(validateCNPJ(81101271000135)).to.be.equal(true);
      expect(validateCNPJ(99293612000187)).to.be.equal(true);
    });
  });
});
