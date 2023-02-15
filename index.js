const arr = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]

function rotate(arrayWithNums) {

    let result = Array(arrayWithNums.length).fill(1).map(() => Array(arrayWithNums.length).fill(null))

    const arrLastIndex = arrayWithNums.length - 1

    arrayWithNums.forEach((_, numsIndex) => {
        arrayWithNums[numsIndex].forEach((num, numIndex) => {
            const obj = { value: 0, lineIndex: 0, columnIndex: 0 }
            obj.value = num
            obj.lineIndex = arrLastIndex - arrLastIndex + numIndex
            obj.columnIndex = arrLastIndex - numsIndex
            result[obj.lineIndex][obj.columnIndex] = obj.value
        })
    })

    for (let i = 0; i < arrayWithNums.length; i++) {
        arrayWithNums[i] = result[i]
    }

}

rotate(arr)


console.log(arr)
