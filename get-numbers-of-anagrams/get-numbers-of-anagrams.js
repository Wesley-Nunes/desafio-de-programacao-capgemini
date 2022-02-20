/**
 * Return the number of anagrams of substrings in a given string
 * @param {String} string String to create the substrings
 * @return {Number} The number of substrings that is anagrams.
 */
function getNumbersOfAnagrams(string) {
  if (typeof string !== "string") {
    throw new TypeError("input has to be a string");
  }
  if (string.length <= 1) {
    throw new RangeError(
      "It is not possible to extract substrings of a string of length of one or less"
    );
  }
  let counter = 0;
  const substrings = getSubstrings(string);
  const substringsPairs = getSubstringsPairs(substrings);

  for (let index = 0; index < substringsPairs.length; index += 1) {
    const [substringOne, substringTwo] = substringsPairs[index];
    counter += isAnagram(substringOne, substringTwo);
  }

  return counter;
}

function getSubstrings(string) {
  let substrings = [];
  let isPossibleMakeSubstring = true;
  let index = 0;
  let sizeOfSubstring = 1;

  while (isPossibleMakeSubstring) {
    substrings.push(string.slice(index, index + sizeOfSubstring));
    index += 1;

    if (index + sizeOfSubstring > string.length) {
      if (substrings.length < numbersOfSubstringsAvailable(string.length)) {
        index = 0;
        sizeOfSubstring += 1;
      } else {
        isPossibleMakeSubstring = false;
      }
    }
  }

  return substrings;
}

function numbersOfSubstringsAvailable(stringLength) {
  if (stringLength === 1) {
    return 1;
  } else {
    return stringLength + numbersOfSubstringsAvailable(stringLength - 1);
  }
}

function getSubstringsPairs(arrayOfStrings) {
  let substringsPairs = [];
  let isPossibleMakePairs = true;
  let index = 0;
  let nextPosition = index + 1;

  while (isPossibleMakePairs) {
    let firstPair = arrayOfStrings[index];
    let secondPair = arrayOfStrings[nextPosition];

    if (firstPair.length === secondPair.length) {
      substringsPairs.push([firstPair, secondPair]);
      nextPosition += 1;
    } else {
      index += 1;
      nextPosition = index + 1;
    }

    if (
      index === arrayOfStrings.length - 1 ||
      nextPosition > arrayOfStrings.length - 1
    ) {
      isPossibleMakePairs = false;
    }
  }

  return substringsPairs;
}

function isAnagram(string1, string2) {
  let firstString = createHash(string1);
  let secondString = createHash(string2);

  for (const char in firstString) {
    if (
      !secondString.hasOwnProperty(char) ||
      firstString[char] !== secondString[char]
    ) {
      return false;
    }
  }
  return 1;
}

function createHash(string) {
  let hash = {};
  for (let index = 0; index < string.length; index += 1) {
    if (hash.hasOwnProperty(string[index])) {
      hash[string[index]] += 1;
    } else {
      hash[string[index]] = 1;
    }
  }
  return hash;
}

module.exports = getNumbersOfAnagrams;
