import { capitalize, reverseString, Calculator, caesarCipher, analyzeArray, object } from "./test-practice"

test('Capitalize first character of string', () => {
    expect(capitalize('you and I are going to the zoo')).toBe('You and I are going to the zoo')
})
test('Reverse a string', () => {
    expect(reverseString('you and I are going to the zoo')).toBe('ooz eht ot gniog era I dna uoy')
})
test('Calculator adds', () => {
    expect(Calculator.add(5, 7)).toBe(12)
})
test('Calculator subtracts', () => {
    expect(Calculator.subtract(15, 7)).toBe(8)
})
test('Calculator divides', () => {
    expect(Calculator.divide(12, 3)).toBe(4)
})
test('Calculator multiplies', () => {
    expect(Calculator.multiply(5, 5)).toBe(25)
})
test('Cipher basic', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc')
})

test('Cipher case preservation', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr')
})
test('Cipher punctuation preservation', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})
test('Get object average from array', () => {
    expect(object.average).toBe(4)
})
test('Get object min from array', () => {
    expect(object.min).toBe(1)
})
test('Get object max from array', () => {
    expect(object.max).toBe(8)
})
test('Get object length from array', () => {
    expect(object.length).toBe(6)
})
test('Get object from array', () => {
    expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
        average: 3,
        min: 1,
        max: 5,
        length: 5,
      })
})

