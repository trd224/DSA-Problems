const nums = [1,1,1,2,2,3];
let k = 2;
function topKFrequent(nums, k) {

    let freq = {}

    for(let num of nums){
        freq[num] = (freq[num] || 0) + 1
    }

    let bucket = Array(nums.length + 1).fill().map(() => [])

    for(let key in freq){
        bucket[freq[key]].push(Number(key))
    }

    let result = []

    for(let i = bucket.length - 1; i >= 0; i--){
        for(let num of bucket[i]){
            result.push(num)

            if(result.length === k){
                return result
            }
        }
    }
}

console.log(topKFrequent(nums, k))

