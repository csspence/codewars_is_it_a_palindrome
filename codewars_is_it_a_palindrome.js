/*
Write function isPalindrome that checks if a given string (case insensitive) is a palindrome.

In Racket, the function is called palindrome?

(palindrome? "nope") ; returns #f
(palindrome? "Yay")  ; returns #t
*/

const isPalindrome = (x) => {
  return x.toLowerCase() === (x.split('').reverse()).join('').toLowerCase() ? true : false;
}