var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']

function countWords(arr) {
  return arr.reduce(function(countMap, word) {
      if (word in countMap) {
    countMap[word]++;
  }
  else {
    countMap[word] = 1;
  }
    return countMap
  }, {}) // second argument to reduce initialises countMap to {}
}
console.log(countWords(inputWords))