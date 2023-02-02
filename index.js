function twoSum(nums, target) {
    for (let index = 0; index < nums.length; index++) {
        for (let nextIndex = index + 1; nextIndex < nums.length; nextIndex++) {
            if (nums[index] + nums[nextIndex] === target) {
                return [index, nextIndex]
            }
        }
    }
}

console.log(twoSum([2,7,11,15], 9))