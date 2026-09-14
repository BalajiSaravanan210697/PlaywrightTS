//length of last word from given string s

function lengthofLastWord(str){
    let trimmedStr=str.trim()
    let splitedArray=trimmedStr.split(" ")
    return splitedArray[splitedArray.length-1].length;   
}
console.log(lengthofLastWord("Hello World"));
console.log(lengthofLastWord( "   fly me   to   the moon  "));

function isAnagramOrNot(){
    
}