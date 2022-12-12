function isPalindrome(word) {
  // Write your algorithm here  
  const splittedWord = word.split("")
  const reversedArray = splittedWord.reverse()
  const reversedWord = reversedArray.join("")

  if(word.toLowerCase() === reversedWord.toLowerCase()){
    return true
  }else{
    return false
  }

}

/* 
  Add your pseudocode here
Look if the word is equal to the reversed list
  If the reversed list is not the same as the word  it returns false
  If the reversed list is the same as the word  it returns true

*/
/*
  Add written explanation of your solution here
  first: change the  word received to  reversed list
  second: ensure the word received and reversed list are the same
  third: it will return true or false
  */

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
