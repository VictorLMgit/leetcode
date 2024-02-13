var firstPalindrome = function (words) {
    for (let word of words) if (isPalindrome(word)) return word;
    return "";
};

var isPalindrome = function (word) {
    let j = word.length - 1;
    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] != word[j]) return false;
        j--;
    }
    return true;
}

let words = ["abc", "car", "ada", "racecar", "cool"];
console.log(firstPalindrome(words));