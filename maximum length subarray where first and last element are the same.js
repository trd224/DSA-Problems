
const arr = [1,1,2,3,1,4,5,4,2]
//maximum length subarray where first and last element are the same

function maxLenFn(arr){
    let map = new Map();
    let maxLen = 0;
    for(let i = 0; i < arr.length; i++){
        if(!map.has(arr[i])){
           map.set(arr[i], i)
        }
       maxLen = Math.max(maxLen, i - map.get(arr[i]) + 1)
    }
    return maxLen;
}

console.log(maxLenFn(arr));


