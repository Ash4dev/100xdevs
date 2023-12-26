/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  if (str1.length != str2.length){
    return false;
  }

  s1 = str1.toLowerCase();
  s2 = str2.toLowerCase();

  let ump = new Map();
  for (let i = 0; i < s1.length; i++){
    ump[s1[i]] = ump[s1[i]] > 0 ? ump[s1[i]]+1 : 1;
  }

  for (let i = 0; i < s2.length; i++){
    if (!ump[s2[i]]){
      return false;
    }
    ump[s2[i]]--;
    if (!ump[s2[i]]){
      delete ump[s2[i]];
    }
  }

  return (Object.keys(ump).length == 0);
}

module.exports = isAnagram;
