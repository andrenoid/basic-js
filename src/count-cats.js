const CustomError = require("../extensions/custom-error");

module.exports = function countCats(/* matrix */) {
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
            let result = 0;
            let array = [];
            if (!matrix) {
                return result;
            }
            for (let i = 0; i < matrix.length; i++) {
                if (i % 2 !== 0) {
                    matrix[i].reverse();
                }
            }
            
            array = matrix.flat();
            result = array.filter(item => item == '^^')
            return result.length;
        }
};
