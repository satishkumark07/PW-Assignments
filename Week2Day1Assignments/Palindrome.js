
//check given string is palindrome or not
let Strng="radar"

console.log("The given String is: ",Strng)
let result=Strng.split('').reverse().join('')
console.log("The given String in reverse is: ",result)

if (Strng.toLowerCase()==result.toLowerCase()){
    console.log("Given string is Palindrome")
}else {
   console.log("Given string is not Palindrome") 
}

// if given string is number
let word=12321
word=word.toString()
console.log("The given String is: ",word)
let result2=word.split('').reverse().join('')
console.log("The given String in reverse is: ",result2)

if (word.toLowerCase()==result2.toLowerCase()){
    console.log("Given string is Palindrome")
}else {
   console.log("Given string is not Palindrome") 
}