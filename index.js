let runningSum = function (nums) {
    const newNums = [nums[0]]
    nums.reduce((prevValue, value) => {
        newNums.push(prevValue + value)
        return prevValue + value
    })

    return newNums
};
console.log(runningSum([1,2,3,4]))
