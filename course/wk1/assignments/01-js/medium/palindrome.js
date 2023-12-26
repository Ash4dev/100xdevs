/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  
  let s = "";
  for (let i = 0; i < str.length; i++) {
    if (typeof(str[i]) == "string" && str[i].toLowerCase() != str[i].toUpperCase()){
      s += str[i].toLowerCase();
    }
  }

  let ptr1 = 0, ptr2 = s.length-1;
  while(ptr1 <= ptr2){
    if (s[ptr1] != s[ptr2]){
      return false;
    }
    ptr1++;
    ptr2--;
  }
  return true;
}

module.exports = isPalindrome;
