const arr = [1,1,2,3,1,4,5,4,2]

//minimum length subarray where first and last element are same
function minLanFn(arr){
    let map = new Map();
    let minLen = Infinity;
    for(let i = 0; i < arr.length; i++){
        if(map.has(arr[i])){
            minLen = Math.min(minLen, i - map.get(arr[i]) + 1)
        }
        map.set(arr[i], i);
    }
     return minLen;
}

console.log(minLanFn(arr));
