const CustomError = require("../extensions/custom-error");

module.exports = function repeater(/* str, options */) {
      
      str = String(str);
      let addition;
      options.addition === undefined ? addition = '' : addition = String(options.addition);

      let repeatTimes = options.repeatTimes || 1;
      let separator = options.separator || '+';
      let additionRepeatTimes = options.additionRepeatTimes || 1;
      let additionSeparator = options.additionSeparator || '|';
      let arr = [];
      let answer;

      for (let i = 0; i < repeatTimes; i++) {
        arr.push(str);
        for (let j = 0; j < additionRepeatTimes; j++) {
          arr.push(addition);
          if (j !== additionRepeatTimes - 1) {
            arr.push(additionSeparator);
          }
        }
        if (i !== repeatTimes - 1) {
          arr.push(separator);
        }
      }
      answer = arr.join('')

      console.log(answer);
      return answer;
  
};
  
