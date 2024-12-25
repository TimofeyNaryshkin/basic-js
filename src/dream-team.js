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
  if (!Array.isArray(members)) {
    return false;
  }
  const stringMembers = members.filter(el => typeof el === 'string');
  let dreamTeam = [];
  stringMembers.forEach(member => {
    dreamTeam.push(member.trim()[0].toUpperCase());
  })
  dreamTeam = dreamTeam.sort().join('');
  console.log(dreamTeam);
  return dreamTeam;
  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam
};
