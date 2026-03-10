const arr = [1,2,3,4];

const suffix = [];
suffix[arr.length - 1] = 1;

for(let i = arr.length - 2; i >= 0; i--){
    suffix[i] = suffix[i+1] * arr[i+1]
}

console.log(suffix)