/*******************
 * YOUR CODE HERE! *
 *******************/
const yell = str => `${str}!`
const getFirstCharacter = str => str[0]
const getLastCharacter = str => str.slice(-1)
const getOneCharacter = (str,num) => str[num]
const getTwoCharacters = (str,index1,index2) =>str[index1] + str[index2]
const makeCapitalized = str => str.toUpperCase()
const yellLouder = str => `${str.toUpperCase()}!!!`

const getInitials = str => {
  const splitName = str.split(" ")
  const initials = `${splitName[0][0].toUpperCase()}.${splitName[1][0].toUpperCase()}.`
return initials
}

/*******************************************************************
 * THIS CODE IS FOR INTERNAL USE ONLY. DON'T CHANGE ANYTHING BELOW! *
 ********************************************************************/

if (typeof yell === 'undefined') {
  yell = undefined;
}

if (typeof getFirstCharacter === 'undefined') {
  getFirstCharacter = undefined;
}

if (typeof getLastCharacter === 'undefined') {
  getLastCharacter = undefined;
}

if (typeof getOneCharacter === 'undefined') {
  getOneCharacter = undefined;
}

if (typeof getTwoCharacters === 'undefined') {
  getTwoCharacters = undefined;
}

if (typeof makeCapitalized === 'undefined') {
  makeCapitalized = undefined;
}

if (typeof yellLouder === 'undefined') {
  yellLouder = undefined;
}

if (typeof getInitials === 'undefined') {
  getInitials = undefined;
}


module.exports = {
  yell,
  getFirstCharacter,
  getLastCharacter,
  getOneCharacter,
  getTwoCharacters,
  makeCapitalized,
  yellLouder,
  getInitials,
};
