/** product: calculate the product of an array of numbers. */
function product(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * product(arr.slice(1));
}

/** longest: return the length of the longest word in an array of words. */
function longest(words) {
  if (!words) return 0;
  const firstWordLength = typeof words[0] === 'string' ? words[0].length : 0;
  if (words.length === 1) {
    return firstWordLength;
  }
  return Math.max(firstWordLength, longest(words.slice(1)));
}

/** everyOther: return a string with every other letter. */
function everyOther(str) {
  if (str.length <= 1) return str;
  return str[0] + everyOther(str.slice(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */
function isPalindrome(str) {
  str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, -1))
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */
function findIndex(arr, val, index = 0) {
  if (index >= arr.length) return -1;
  if (arr[index] === val) return index;
  return findIndex(arr, val, index + 1);

}

/** revString: return a copy of a string, but in reverse. */
function revString(str) {
  if (str.length <= 1) return str;
  return revString(str.slice(1)) + str[0];
}

/** gatherStrings: given an object, return an array of all of the string values. */
function gatherStrings(obj) {
  let result = [];
  for (let key in obj) {
    if (typeof obj[key] === 'string') result.push(obj[key]);
    if (typeof obj[key] === 'object') result.push(...gatherStrings(obj[key]))
  }
  return result;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */
function binarySearch(arr, val, left = 0, right = arr.length - 1) {
  if (left > right) return -1;

  let middle = Math.floor((left + right) / 2);
  if (arr[middle] === val) return middle;
  if (arr[middle] > val) return binarySearch(arr, val, left, middle - 1);
  return binarySearch(arr, val, middle + 1, right)
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
