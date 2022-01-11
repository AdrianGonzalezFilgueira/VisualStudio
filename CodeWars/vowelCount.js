function getCount(str) {
  
  var vowelsCount = 0;
  var vowels = ["a", "e", "i", "o", "u"]
  
  // enter your majic here
   for (let letter of str.toLowerCase()) {
    if (vowels.includes(letter)) {
        vowelsCount++
    }
  }
  
  return vowelsCount;
}

console.log(getCount("abracadabra"));