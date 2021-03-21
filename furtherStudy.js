"use strict";


function wordsInCommon(words1, words2) {
    const words1Set = new Set(words1);
    console.log(words1Set);
    const words2Set = new Set(words2);
    console.log(words2Set);

    let result = new Set();

    for (const word of words1Set) {
        if (words2Set.has(word)) {
            console.log('word is in words2set');
            result.add(word);
        }
    }
    return result;
}


function kidsGame(names) {
  // Replace this with your code
}
