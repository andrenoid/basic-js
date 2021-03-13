const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
            if (members == undefined || members == null || typeof members == "number" || members.length == 0) {
                return false;
            }
            let array = [];
            for (let i = 0; i < members.length; i++) {
                if (typeof members[i] == 'string') {
                    members[i] = members[i].trim();
                    array.push(members[i][0]);
                }
            }
            return array.sort().join('');
  
};
