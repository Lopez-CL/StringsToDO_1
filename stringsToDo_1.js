/*Create a function that, given a string, returns all of that string’s contents, but without blanks. 
Examples:
removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
removeBlanks("I can not BELIEVE it's not BUTTER") => "IcannotBELIEVEit'snotBUTTER"*/

const removeBlanks = (str) =>{
    let newStr = ""
    for(let i = 0; i < str.length; i++){
        let holder = str[i] === " "
        if(holder){
            console.log('we have a space!')
        }
        else{
            newStr = newStr + str[i]
        }
    }
    return newStr
}
console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "))
console.log(removeBlanks("I can not BELIEVE it's not BUTTER"))

/* Create a JavaScript function that given a string, returns the integer made from the string’s digits. You are allowed to use isNaN() and Number(). */

const getDigits = (str) =>{
    let newStr = ""
    for(let i = 0; i < str.length; i++){
        if(!isNaN(str[i])){
        newStr = newStr + str[i]
        }
        
    }
    return newStr
}

console.log(getDigits("0bc8c0d1ngd0j0!8"))
console.log(getDigits("1s1a3y5w7h9a2t4?6!8?0"))

/* Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). You are allowed to use .split() and .toUpperCase(). */

const acronym = (str) => {
    let acro = ""
    let brokenStr = str.split(" ")
    console.log(brokenStr)
    for(let i = 0; i < brokenStr.length; i++){
        let brokenWord = brokenStr[i].split("")
        // console.log(brokenWord)
        acro = acro + brokenWord[0].toUpperCase()
    }
    acro = acro + '.'
    return acro
}

console.log(acronym("there's no free lunch - gotta pay yer way."))
console.log(acronym("Live from New York, it's Saturday Night!"))

/*Count Non-Spaces
Create a function that, given a string, returns the number of non-space characters found in the string. 
Examples:
countNonSpaces("Honey pie, you are driving me crazy") => 29
countNonSpaces("Hello world !") => 11 */

const countNonSPaces = (str) =>{
    let count = 0
    for (let i = 0; i < str.length; i++){
        let holder = str[i] === " "
        !holder? count+=1:''
    }
    return count
}
console.log(countNonSPaces('Honey pie, you are driving me crazy'))
console.log(countNonSPaces('Hello World!'))

const removeShorterStrings = (arr, limit) =>{
    let newArr = []
    let idxCount = 0
    for(let i = 0; i < arr.length; i++){
        // console.log(arr[i])
        if(arr[i].length >= limit){
            console.log('word is long enough!')
            newArr[idxCount] = arr[i]
            idxCount++
        }
        // console.log([arr])
    }
    return newArr
}
console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4))
console.log(removeShorterStrings(['There', 'is', 'a', 'snake', 'in', 'my', 'boot'], 2))
// (1) iterate through the array of strings word by word, (2) compare length of each word to limit given (3) conditional to keep >= words (4) if not, that shorter word will be pushed out the arr

