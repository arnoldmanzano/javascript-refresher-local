var selectElementsStartingWithA = function(array) {

  function checkStartWithA(string) {
    return string[0] === 'a';
  }

  return array.filter(checkStartWithA);
};

var selectElementsStartingWithVowel = function(array) {

  function checkStartWithVowel(string) {
    return (/^[aeiou]/).test(string);
  }

  return array.filter(checkStartWithVowel);
};

var removeNullElements = function(array) {
  function checkNotNull(item) {
    return item !== null;
  }

  return array.filter(checkNotNull);
};

var removeNullAndFalseElements = function(array) {
  function checkNotNullAndFalse(item) {
    return item !== null && item !== false;
  }

  return array.filter(checkNotNullAndFalse);
};

var reverseWordsInArray = function(array) {
  return array.map(function(string) {
    return string.split('').reverse().join('');
  });
};

var everyPossiblePair = function(array) {
  console.log(array);
  function makePairs(element, index, arr) {
    return [element];
  }

  return array.sort().map(makePairs);
};

var allElementsExceptFirstThree = function(array) {
  return array.slice(3);
};

var addElementToBeginning = function(array, element) {
  array.splice(0, 0, element);
  return array;
};

var sortByLastLetter = function(array) {
  return array;
};

var getFirstHalf = function(string) {
  return string.slice(0, (string.length+1)/2);
};

var makeNegative = function(number) {
  return -1 * Math.abs(number);
};

var numberOfPalindromes = function(array) {
  return 'Write your method here';
};

var shortestWord = function(array) {
  return 'Write your method here';
};

var longestWord = function(array) {
  return 'Write your method here';
};

var sumNumbers = function(array) {
  return array.reduce(function(a, b) { return a + b; }, 0);
};

var repeatElements = function(array) {
  return ;
};

var stringToNumber = function(string) {
  return parseInt(string);
};

var calculateAverage = function(array) {
  return 'Write your method here';
};

var getElementsUntilGreaterThanFive = function(array) {
  return 'Write your method here';
};

var convertArrayToObject = function(array) {
  return 'Write your method here';
};

var getAllLetters = function(array) {
  return 'Write your method here';
};

var swapKeysAndValues = function(object) {
  return 'Write your method here';
};

var sumKeysAndValues = function(object) {
  return 'Write your method here';
};

var removeCapitals = function(string) {
  return 'Write your method here';
};

var roundUp = function(number) {
  return 'Write your method here';
};

var formatDateNicely = function(date) {
  return 'Write your method here';
};

var getDomainName = function(string) {
  return 'Write your method here';
};

var titleize = function(string) {
  return 'Write your method here';
};

var checkForSpecialCharacters = function(string) {
  return 'Write your method here';
};

var squareRoot = function(number) {
  return Math.sqrt(number);
};

var factorial = function(number) {
  return 'Write your method here';
};

var findAnagrams = function(string) {
  return 'Write your method here';
};

var convertToCelsius = function(number) {
  return 'Write your method here';
};

var letterPosition = function(array) {
  return 'Write your method here';
};
