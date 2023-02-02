var buildArray = function(nums) {

    const ans = []

    for (let i = 0; i < nums.length; i++) {
        ans.push(nums[nums[i]])
    }

    return ans
};

console.log(buildArray([5,0,1,2,3,4]))
