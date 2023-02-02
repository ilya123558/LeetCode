var averageValue = function (nums) {
    const newNumsArray = nums.filter(elem => (elem % 3 === 0) && (elem % 2 === 0)) || []
    const sum = newNumsArray.reduce((a, b) => a + b, 0)
    if (newNumsArray.length !== 0) {
        return Math.floor(sum / newNumsArray.length)
    }

    return 0
};

console.log(averageValue([1,3,6,10,12,15]))
