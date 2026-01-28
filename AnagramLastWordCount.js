// check given two words are Anagrams or not
let str1="below"
let str2="elbow"

if (str1.length !==  str2.length){
    console.log("Given words are not Anagrams")
    return false
}

let processedstr1=str1.toLowerCase().split("").sort().join("")
let processedstr2=str2.toLowerCase().split("").sort().join("")

console.log(processedstr1)
console.log(processedstr2)

if (processedstr1==processedstr2){
console.log("Given words are anagram")
}else {
   console.log("Given words are not anagram") 
}
//below program to print last word of the given senetence
let strng="India won the T20 Worldcup"

let arr = strng.split(" ")//give space inside to split the words

console.log("priting the words of the array: ",arr) 
console.log("Length of the array is: ",arr.length) 
console.log("Last word is: ", arr[arr.length-1]) 