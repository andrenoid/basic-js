const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  //throw new CustomError('Not implemented');
  if (typeof sampleActivity != 'string' || Number(sampleActivity) <= 0 || Number(sampleActivity) > 15 || Number.isNaN(sampleActivity) == false) return false;
  let counter;
  let answer;
  counter = 0.693 / HALF_LIFE_PERIOD;
  answer = Math.ceil(Math.log(MODERN_ACTIVITY/Number(sampleActivity))/counter);
  return answer;
};
