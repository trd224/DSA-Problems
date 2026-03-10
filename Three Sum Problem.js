
function threeSum(nums) {
    nums.sort((a, b) => a - b);
    let result = [];

    for (let i = 0; i < nums.length - 2; i++) {

        // skip duplicates
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {

            let sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                // skip duplicates
                while (nums[left] === nums[left + 1]) left++;
                while (nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            }

            else if (sum < 0) {
                left++;
            }

            else {
                right--;
            }
        }
    }

    return result;
}

const nums = [-1,0,1,2,-1,-4];
console.log(threeSum(nums));

//  [-4, -1, -1, 0, 1, 2];
// [-1, -1, 2][-1, 0, 1]