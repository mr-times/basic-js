const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  /*
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] !== 'string' || members[i] instanceof String) {
      return false;
    }
  }*/

  if (!members || !Array.isArray(members)) { 
    return false
  };
  let name = '';
  for (let i = 0; i < members.length; i++) {
    if(typeof (members[i]) == 'string') {
    members[i] = members[i].trim();
    }
  };
  for (let i = 0; i < members.length; i++) {
    console.log(members[i]);
    if(typeof (members[i]) == 'string') {
    name += members[i].charAt(0).toUpperCase();
    }
  };
  function orderAlphabetically(str) {
    return str.split('').sort().join('');
  }

  return orderAlphabetically(name);
  }



module.exports = {
  createDreamTeam
};
