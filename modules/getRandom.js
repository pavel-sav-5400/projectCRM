// eslint-disable-next-line require-jsdoc
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
export const uniqId = getRandomIntInclusive(1e8, 9e8);
