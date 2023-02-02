function getConcatenation(nums) {

    const ans = []

    for (let index = 0; index < 2; index++) {
        for (let i = 0; i < nums.length; i++) {
            ans.push(nums[i])
        }
    }

    return ans
};

console.log(getConcatenation([1,3,2,1]))
