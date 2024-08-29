const string = ["apple", "banana", "cherry", "date", "elderberry"]
string.forEach((word, index) => {
  if (word.length >= 5) {
    console.log(`${index}: ${word}`);
  }
});
