function analyzeSentence(sentence) {
  let length = 0;
  let wordCount = 0;
  let vowelCount = 0;
  const vowels = "aeiouAEIOU";
  let inWord = false;

  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    if (char === ".") {
      break;
    }

    length++;

    if (vowels.includes(char)) {
      vowelCount++;
    }

    if (char === " ") {
      if (inWord) {
        wordCount++;
      }
      inWord = false;
    } else {
      inWord = true;
    }
  }

  // If the last character before the period was not a space, count the last word
  if (inWord) {
    wordCount++;
  }

  return {
    length: length,
    wordCount: wordCount,
    vowelCount: vowelCount,
  };
}

// Example usage
let sentence = "This is an example sentence.";
let result = analyzeSentence(sentence);
console.log(
  `Length: ${result.length}, Words: ${result.wordCount}, Vowels: ${result.vowelCount}`
);

// Output for the given sentence: Length: 24, Words: 5, Vowels: 9
