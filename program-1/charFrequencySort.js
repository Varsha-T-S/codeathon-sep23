function sortByFrequency(str) {
  // Create a frequency map of each character in the string
  const freqMap = {};
  for (let char of str) {
    freqMap[char] = (freqMap[char] || 0) + 1;
  }

  // Sort the characters in the string by their frequency
  const sortedChars = Object.keys(freqMap).sort((a, b) => freqMap[b] - freqMap[a]);

  // Build the sorted string by repeating each character by its frequency
  let sortedStr = '';
  for (let char of sortedChars) {
    sortedStr += char.repeat(freqMap[char]);
  }

  return sortedStr;
}



const inputStr = 'hello world';
const sortedStr = sortByFrequency(inputStr);
console.log(sortedStr); // Output: 'lllooeh wrd'

module.exports = { sortByFrequency };