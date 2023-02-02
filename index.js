const simbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

function romanToInt(s) {
    let sum = 0
    for (let index = 0; index < s.length; index++) {
        if (s[index] == 'I' && (s[index + 1] === 'V' | s[index + 1] === 'X')) {
            if (s[index + 1] === 'V') {
                sum += 4
                index += 1
            }
            else {
                sum += 9
                index += 1
            }
        }
        else if (s[index] == 'X' && (s[index + 1] === 'L' | s[index + 1] === 'C')) {
            if (s[index + 1] === 'L') {
                sum += 40
                index += 1
            }
            else {
                sum += 90
                index += 1
            }
        }
        else if (s[index] == 'C' && (s[index + 1] === 'D' | s[index + 1] === 'M')) {
            if (s[index + 1] === 'D') {
                sum += 400
                index += 1
            }
            else {
                sum += 900
                index += 1
            }
        }
        else {
            sum += simbols[s[index]]
        }
    }
    return sum
}

console.log(romanToInt('MCMXCIV'))