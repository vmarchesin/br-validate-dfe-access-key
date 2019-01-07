const randomWithDigitRange = (minDigits = 1, maxDigits) => {
  if (minDigits === 0) {
    throw new Error('Invalid minimum size: 0');
  }

  const max = Number(new Array(maxDigits || minDigits).fill('9').join(''));
  let min = minDigits;

  if (minDigits !== 1) {
    min = Number([1, [new Array(minDigits - 1).fill(0).join('')]].join(''));
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default { randomWithDigitRange };
