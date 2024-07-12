function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1, string.length)
}

function reverseString(string) {
    let newString = ''
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i]
    }
    return newString
}

function Calculate() {
    this.add = (num1, num2) => {
        return num1 + num2
    }

    this.subtract = (num1, num2) => {
        return num1 - num2
    }
    
    this.multiply = (num1, num2) => {
        return num1 * num2
    }

    this.divide = (num1, num2) => {
        return num1 / num2
    }
}

const Calculator = new Calculate()

function caesarCipher(string, shift) {
    let alteredString = ''
    for(let i = 0; i < string.length; i++) {
        let code = string.charCodeAt(i)
        if (code >= 65 && code <= 90) {
            code = code + shift
            if (code > 90) {
                let dif = code - 90
                code = 64 + dif
            }
        }
        if (code >= 97 && code <= 122) {
            code = code + shift
            if (code > 122) {
                let dif = code - 122
                code = 96 + dif
            }
        }
        alteredString += String.fromCharCode(code)
    }
    return alteredString
}

function analyzeArray(array) {
    let object = {
        average: findAvg(array),
        min: findMin(array),
        max: findMax(array),
        length: findLength(array)
    }
    return object
}

function findAvg(array) {
    let sum = 0
    for(let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum/array.length
}

function findMin(array) {
    let min = Infinity
    for(let i = 0; i < array.length; i++) {
        if (array[i] < min){
            min = array[i]
        }    }
    return min
}

function findMax(array) {
    let max = -Infinity
    for(let i = 0; i < array.length; i++) {
        if (array[i] > max){
            max = array[i]
        }    }
    return max
}

function findLength(array) {
    return array.length
}

const object = analyzeArray([1,8,3,4,2,6])

export {capitalize, reverseString, Calculator, caesarCipher, analyzeArray, object}